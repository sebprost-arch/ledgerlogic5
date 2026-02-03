
import * as fs from 'fs';
import * as path from 'path';

const TARGET_FILE = path.join(process.cwd(), 'src/data/blogData.ts');

function humanize(str: string): string {
    const spaceAdded = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return spaceAdded.charAt(0).toUpperCase() + spaceAdded.slice(1);
}

function run() {
    let fileContent = '';
    try {
        fileContent = fs.readFileSync(TARGET_FILE, 'utf-8');
    } catch (e) {
        console.error("Could not read file:", TARGET_FILE);
        process.exit(1);
    }

    // --- METADATA EXTRACTION ---
    const slugRegex = /"slug":\s*"([^"]+)"/g;
    const excerptRegex = /"excerpt":\s*"([^"]+)"/g;
    const rtRegex = /"readTime":\s*"([^"]+)"/g;
    const catRegex = /"category":\s*"([^"]+)"/g;
    const tagsRegex = /"tags":\s*\[([\s\S]*?)\]/g;

    const getMatches = (regex: RegExp) => {
        const res = [];
        let m;
        while ((m = regex.exec(fileContent)) !== null) res.push({ val: m[1], index: m.index });
        return res;
    }

    const slugs = getMatches(slugRegex);
    const excerpts = getMatches(excerptRegex);
    const readTimes = getMatches(rtRegex);
    const categories = getMatches(catRegex);

    // Tags need special handling
    const tags = [];
    let tm;
    while ((tm = tagsRegex.exec(fileContent)) !== null) {
        const cleanTags = tm[1].replace(/"/g, '').replace(/\s+/g, '').split(',').filter((t: any) => t.length > 0);
        tags.push({ val: cleanTags, index: tm.index });
    }

    const metadataMap = new Map();
    for (let i = 0; i < slugs.length; i++) {
        const current = slugs[i];
        const next = slugs[i + 1];
        const limit = next ? next.index : fileContent.length;

        const rt = readTimes.find(r => r.index > current.index && r.index < limit);
        const cat = categories.find(c => c.index > current.index && c.index < limit);
        const exc = excerpts.find(e => e.index > current.index && e.index < limit);
        const tag = tags.find(t => t.index > current.index && t.index < limit);

        if (rt && cat) {
            metadataMap.set(current.val, {
                readTime: rt.val,
                category: cat.val,
                excerpt: exc ? exc.val : "Learn more about this topic.",
                tags: tag ? tag.val : []
            });
        }
    }
    console.log(`Found complete metadata for ${metadataMap.size} posts.`);


    // --- 1. OVERWRITE PASS (Index Scanning) ---
    const badStrings = [
        'Actionable Insights',
        'BusinessManagement',
        'CloudAccounting'
    ];

    let content = fileContent;
    let updates = 0;
    const replacements: { start: number, end: number, newText: string, slug: string }[] = [];

    // Regex Explanation:
    // We match "atAGlance": { ... }
    // It ALWAYS contains "items": [ ... ]
    // So we match match from { UNTIL ] then followed by whitespace/closing }
    // Regex: "atAGlance":\s*\{[\s\S]*?"items":\s*\[[\s\S]*?\]\s*\}
    // This captures the nested items array properly by stopping at the first ] then closing } 
    // Wait, nesting inside items? items is array of simple objects. It ends with ]
    const atAGlanceRegex = /"atAGlance":\s*\{[\s\S]*?"items":\s*\[[\s\S]*?\]\s*\}/;

    for (let i = 0; i < slugs.length; i++) {
        const current = slugs[i];
        const next = slugs[i + 1];
        const limit = next ? next.index : content.length;

        const slice = content.substring(current.index, limit);
        const atAGlanceMatch = atAGlanceRegex.exec(slice);

        if (atAGlanceMatch) {
            const blockContent = atAGlanceMatch[0];
            const blockStart = current.index + atAGlanceMatch.index;
            const blockEnd = blockStart + blockContent.length;

            if (badStrings.some(bs => blockContent.includes(bs))) {
                const meta = metadataMap.get(current.val);
                if (meta) {
                    updates++;

                    let audience = "Canadian Business Owners";
                    if (meta.tags.some((t: any) => t.toLowerCase().includes('startup'))) audience = "Startup Founders";
                    else if (meta.category.toLowerCase().includes('tax')) audience = "Taxpayers & Business Owners";
                    else if (meta.tags.some((t: any) => t.toLowerCase().includes('ecommerce'))) audience = "E-commerce Sellers";
                    if (meta.category === "Incorporation") audience = "Sole Proprietors & Owners";

                    const topicRaw = meta.tags.length > 0 ? meta.tags[0] : meta.category;
                    const topic = humanize(topicRaw);

                    let insight = meta.excerpt.replace(/<[^>]*>/g, '').trim();
                    if (!insight || insight.length < 10) insight = "Essential insights for " + audience;
                    if (insight.length > 100) insight = insight.substring(0, 97) + "...";

                    const newObj = {
                        title: "At a Glance",
                        items: [
                            { label: "Read Time", text: meta.readTime },
                            { label: "Target", text: audience },
                            { label: "Topic", text: topic },
                            { label: "Insight", text: insight }
                        ]
                    };

                    const indent = "        ";
                    const jsonString = JSON.stringify(newObj, null, 4)
                        .split('\n')
                        .map((line, idx) => idx === 0 ? line : indent + line)
                        .join('\n');

                    replacements.push({
                        start: blockStart,
                        end: blockEnd,
                        newText: `"atAGlance": ${jsonString}`,
                        slug: current.val
                    });
                }
            }
        }
    }

    replacements.sort((a, b) => b.start - a.start);

    for (const r of replacements) {
        console.log(`Fixing block for: ${r.slug}`);
        content = content.substring(0, r.start) + r.newText + content.substring(r.end);
    }

    console.log(`Overwrote ${updates} blocks.`);

    if (updates > 0) {
        fs.writeFileSync(TARGET_FILE, content);
        console.log(`Saved ${updates} updates. (Length diff: ${content.length - fileContent.length})`);
    } else {
        console.log("No changes needed.");
    }
}

run();

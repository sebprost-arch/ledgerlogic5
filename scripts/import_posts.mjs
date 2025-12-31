import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_DIR = path.join(__dirname, '../src/assets/blog_export/posts');
const OUT_FILE = path.join(__dirname, '../src/data/blogData.ts');

const getDirectories = (source) => {
    if (!fs.existsSync(source)) return [];
    return fs.readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
};

// Load Image Map
const IMAGE_MAP_PATH = path.join(__dirname, '../src/data/post_images_map.json');
let IMAGE_MAP = {};
if (fs.existsSync(IMAGE_MAP_PATH)) {
    try {
        IMAGE_MAP = JSON.parse(fs.readFileSync(IMAGE_MAP_PATH, 'utf-8'));
    } catch (e) {
        console.error('Error reading image map:', e);
    }
}

// Curated high-quality images
const CURATED_IMAGES = [
    // Tax & Accounting
    { keywords: ['tax', 'cra', 'deduction', 'audit', 'filing'], url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000' }, // Calculator & tax forms
    { keywords: ['tax', 'income', 't4', 'return'], url: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=2000' }, // Tax forms close up
    { keywords: ['audit', 'cra', 'compliance'], url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000' }, // Papers & glasses (audit feel)

    // Bookkeeping & Finance
    { keywords: ['bookkeeping', 'books', 'ledger'], url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000' }, // Accounting ledger/notebook
    { keywords: ['finance', 'financial', 'money', 'cash'], url: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=2000' }, // Money/Coins
    { keywords: ['statement', 'report', 'balance'], url: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=2000' }, // Financial graphs

    // Crypto & Modern Tech
    { keywords: ['crypto', 'bitcoin', 'blockchain', 'currency'], url: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=2000' }, // Bitcoin/Crypto generic
    { keywords: ['tech', 'digital', 'software', 'app'], url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000' }, // Team working on laptops
    { keywords: ['ai', 'automation', 'future'], url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000' }, // Futuristic robot/AI

    // Startup & Business
    { keywords: ['startup', 'entrepreneur', 'founder', 'business'], url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000' }, // Meeting room / handshake
    { keywords: ['growth', 'scale', 'strategy'], url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000' }, // Growth chart on laptop
    { keywords: ['planning', 'strategy', 'goal'], url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2000' }, // Whiteboard planning

    // Payroll & HR
    { keywords: ['payroll', 'salary', 'employee', 'hr'], url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000' }, // iPad finance app
    { keywords: ['hiring', 'team', 'staff'], url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000' }, // Team collaboration

    // Software Specifics (Xero, QBO, etc - generic tech office)
    { keywords: ['xero', 'quickbooks', 'cloud'], url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000' }, // Data dashboard
];

const DEFAULT_IMAGES = [
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000', // Laptop & Notes
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000', // Calculator
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000', // Analytics
];

function getImageForPost(slug, category, title, content, existingImage) {
    if (IMAGE_MAP[slug]) {
        return IMAGE_MAP[slug];
    }
    // 1. CLEAN & NORMALIZE
    const lowerTitle = (title || '').toLowerCase();
    const lowerContent = (content || '').toLowerCase();
    const combined = lowerTitle + ' ' + lowerContent;

    // 2. BRAND / SOFTWARE LOGO MAPPING (Specific Rules)
    // Loop, Float, Vault - Keep Logos
    if (lowerTitle.includes('loop')) return '/images/blog-heroes/logo_loop.png';
    if (lowerTitle.includes('float')) return '/images/blog-heroes/logo_float.svg';
    if (lowerTitle.includes('vault') || lowerTitle.includes('venn')) return '/images/blog-heroes/logo_vault.svg';
    if (lowerTitle.includes('shopify') || lowerTitle.includes('dropshipping')) return '/images/blog-heroes/logo_shopify.png';
    if (lowerTitle.includes('amazon') || lowerTitle.includes('fba')) return '/images/blog-heroes/logo_amazon.png';

    // Xero Variety Strategy
    if (lowerTitle.includes('xero')) {
        // Migration / Switching topics
        if (combined.includes('switch') || combined.includes('migration') || combined.includes('sage') || combined.includes('quickbooks')) {
            return '/images/blog-heroes/hero_data_migration_v2.png';
        }
        // Mobile / App / Modern usage
        if (combined.includes('app') || combined.includes('mobile') || combined.includes('pricing') || combined.includes('easy')) {
            return '/images/blog-heroes/hero_xero_mobile_v2.png';
        }
        // Learning / General
        if (combined.includes('learn') || combined.includes('training')) {
            return '/images/blog-heroes/hero_general_accounting.png';
        }
        // Fallback to official logo for core reviews
        return '/images/blog-heroes/logo_xero.png';
    }

    if (lowerTitle.includes('quickbooks') || lowerTitle.includes('intuit')) return '/images/blog-heroes/logo_quickbooks.png';

    // 3. SPECIFIC INDUSTRY / TOPIC MAPPING (Realistic Photography)

    // Crypto / Bitcoin -> Hardware wallet, realistic
    if (combined.includes('bitcoin') || combined.includes('crypto')) {
        return '/images/blog-heroes/hero_crypto_real.png';
    }

    // Content Creators / Social Media -> Creator workspace
    if (combined.includes('influencer') || combined.includes('content creator') || combined.includes('social media')) {
        return '/images/blog-heroes/hero_creator.png';
    }

    // Startups / Growth -> Modern team meeting
    if (combined.includes('startup') || combined.includes('scale') || combined.includes('growth')) {
        return '/images/blog-heroes/hero_startup.png';
    }

    // Tax / CRA / Government -> Canadian Tax Documents
    if (combined.includes('tax') || combined.includes('cra') || combined.includes('deduction') || combined.includes('audit')) {
        return '/images/blog-heroes/hero_tax_canada.png';
    }

    // 4. FALLBACK GENERAL ACCOUNTING
    return '/images/blog-heroes/hero_general_accounting.png';
}

// Basic Markdown to HTML converter
function markdownToHtml(markdown) {
    let html = markdown;

    // Headers (h2-h4) - adding IDs for TOC
    html = html.replace(/^### (.*$)/gim, (match, title) => {
        const id = title.toLowerCase().replace(/[^\w]+/g, '-');
        return `<h3 id="${id}">${title}</h3>`;
    });
    html = html.replace(/^## (.*$)/gim, (match, title) => {
        if (title.trim() === '') return ''; // Skip empty headers
        const id = title.toLowerCase().replace(/[^\w]+/g, '-');
        return `<h2 id="${id}">${title}</h2>`;
    });

    // Images
    html = html.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" class="img-fluid" />');

    // Links
    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, (match, text, url) => {
        let newUrl = url;

        // Skip non-ledgerlogic links or wp-content links
        if (!url.includes('ledgerlogic.ca') || url.includes('wp-content')) {
            // If it's a relative link (not starting with http), leave it?
            // Assuming input markdown has absolute links for internal stuff based on grep.
            // If existing external link, leave it.
            return `<a href="${newUrl}">${text}</a>`;
        }

        // 1. Blog Posts: /YYYY/MM/DD/slug/ -> /blog/slug
        // Regex for /YYYY/MM/DD/slug/
        const blogPostMatch = newUrl.match(/ledgerlogic\.ca\/\d{4}\/\d{2}\/\d{2}\/([^\/]+)\/?/);
        if (blogPostMatch) {
            newUrl = `/blog/${blogPostMatch[1]}`;
        }
        // 2. Categories -> /blog
        else if (newUrl.includes('/category/')) {
            newUrl = '/blog';
        }
        // 3. Known Pages
        else if (newUrl.includes('/contact')) {
            newUrl = '/contact';
        }
        else if (newUrl.includes('/bookkeeping') || newUrl.includes('/virtual-cfo')) {
            newUrl = '/#services';
        }
        // 4. Default: Strip domain to make relative
        else {
            newUrl = newUrl.replace(/https?:\/\/ledgerlogic\.ca/, '');
        }

        return `<a href="${newUrl}">${text}</a>`;
    });

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

    // Lists (Unordered) - Simple support
    // This is tricky with regex. Let's do a simple pass for lines starting with * or -
    // We'll wrap them in a simple way. Multiline lists are hard.
    // For now, let's treat lines starting with * as list items.
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
    // Wrap consecutive lis in ul (very naive)
    // html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>'); // checking this might be too aggressive across newlines?

    // Paragraphs:
    // Split by double newline, wrap in <p> if not starting with <h or <ul or <li
    const paragraphs = html.split(/\n\s*\n/);
    html = paragraphs.map(p => {
        const trimmed = p.trim();
        if (!trimmed) return '';
        if (trimmed.startsWith('<h') || trimmed.startsWith('<ul') || trimmed.startsWith('<li') || trimmed.startsWith('<img')) {
            return trimmed;
        }
        return `<p>${trimmed}</p>`;
    }).join('\n');

    // Remove Divi/Shortcode artifacts
    // Matches [et_pb_...] ... [/et_pb_...] or self-closing
    // We want to remove the TAGS but keep the content inside often?
    // User showed: [et_pb_section ...][et_pb_row ...][et_pb_text ... "Text"]Content...
    // The previous regex was naive. Let's try to strip these specific known tags.
    // Ideally we want to remove the *tags* but keep the inner text if it's content.
    // But usually [et_pb_text] wraps the content.
    // Let's just remove the Opening and Closing tags for et_pb_*.
    html = html.replace(/\[\/?et_pb_[^\]]*\]/g, '');

    // Also remove generic [shortcodes] if they look like layout junk
    // html = html.replace(/\[.*?\]/g, ''); // Too dangerous for links

    return html;
}

function extractTOC(markdown) {
    const toc = [];
    const lines = markdown.split('\n');
    lines.forEach(line => {
        const match = line.match(/^## (.*$)/);
        if (match) {
            const title = match[1].trim();
            if (title) {
                const id = title.toLowerCase().replace(/[^\w]+/g, '-');
                toc.push({ id, title });
            }
        }
    });
    return toc;
}

function parsePost(dirName) {
    const filePath = path.join(POSTS_DIR, dirName, 'index.md');
    if (!fs.existsSync(filePath)) return null;

    const content = fs.readFileSync(filePath, 'utf-8');

    // Parse Frontmatter
    const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontMatterMatch) return null;

    const frontMatterBlock = frontMatterMatch[1];
    const body = content.replace(frontMatterMatch[0], '').trim();

    const metadata = {};
    const lines = frontMatterBlock.split('\n');
    let currentKey = null;

    lines.forEach(line => {
        const colonIndex = line.indexOf(':');

        // Handle list items (indented with -)
        if (line.trim().startsWith('- ') && currentKey === 'categories') {
            const val = line.trim().replace(/^- /, '').replace(/^"|"$/g, '');
            if (!metadata.categories) metadata.categories = [];
            metadata.categories.push(val);
            return;
        }

        if (colonIndex !== -1) {
            let key = line.slice(0, colonIndex).trim();
            let value = line.slice(colonIndex + 1).trim();

            // If value is empty, it might be start of a list (like categories:)
            if (value === '') {
                currentKey = key;
                return;
            }

            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            metadata[key] = value;
            currentKey = null; // Reset if it was a single line k:v
        }
    });

    // Extract date
    let dateStr = metadata.date;
    try {
        const d = new Date(dateStr);
        dateStr = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch (e) { }

    // Extract author
    let author = metadata.author || 'LedgerLogic Team';
    if (author === 'Seb') {
        author = 'Seb Prost, CPA';
    }
    let tags = [];
    let category = 'Business Management'; // Default

    // Logic: Key categories from frontmatter
    // We want to map "categories: [ 'foo', 'bar' ]" to our single category field + tags
    if (metadata.categories) {
        // Handle if it's a string or array (YAML parser might vary)
        // Based on file view, it is a YAML list: - "value"
        const rawCats = Array.isArray(metadata.categories) ? metadata.categories : [metadata.categories];

        // Clean up categories (kebab to Title Case)
        const cleanCats = rawCats.map(c => c.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

        tags = cleanCats;
        if (cleanCats.length > 0) {
            category = cleanCats[0]; // Use first one as main category
        }
        // Consolidate specific categories into "Tax"
        if (['Sales Tax', 'Corporate Tax', 'Non Residents', 'Payroll'].includes(category)) {
            category = 'Tax';
        }

        // Rename Cloud Accounting and merge Xero into "Accounting Tools"
        if (['Cloud Accounting', 'Xero'].includes(category)) {
            category = 'Accounting Tools';
        }
    } else {
        tags = ['Business', 'Accounting'];
        category = 'Business Management'; // Fallback with Title Case
    }

    // Clean Divi shortcodes from body BEFORE markdown parsing
    // Matches [et_pb_...] and [/et_pb_...] and escaped versions [et\_pb\_...]
    const cleanBody = body.replace(/\[\/?et\\?_pb\\?_[^\]]*\]/g, '');

    // Generate excerpt (first paragraph) from CLEAN body
    // 1. Remove [text](url) -> text
    // 2. Remove simple html tags
    // 3. Remove # and *
    const excerpt = cleanBody.split('\n\n')[0]
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // remove links, keep text
        .replace(/<[^>]*>?/g, '') // remove html tags
        .replace(/[#*`]/g, '') // remove markdown chars
        .trim()
        .slice(0, 150) + '...';

    // Generate HTML
    const htmlContent = markdownToHtml(cleanBody);
    const toc = extractTOC(body); // TOC on original or clean? clean is better but TOC is based on headers. Headers shouldn't be inside shortcodes usually. Use body for TOC to be safe/stable? No, cleanBody is safer.
    // Actually, headers are unlikely to be strictly inside et_pb_text attributes, but...
    // Let's use cleanBody for TOC too if possible, but extractTOC uses regex on lines.
    // If [et_pb_...] was on a line, it's gone now.
    // Let's keep extractTOC as is unless verified otherwise. The TOC extracts ## Headers.
    // If I use cleanBody for TOC, I might lose headers if I accidentally deleted them? No.
    // Let's sticking to passing cleanBody to markdownToHtml.


    // Extract Image (first image in content or random if none)
    const imgMatch = body.match(/!\[.*?\]\((.*?)\)/);

    const slug = metadata.slug || dirName;

    // Image selection
    let image = getImageForPost(slug, metadata.title || '', body, imgMatch ? imgMatch[1] : null);


    const postData = {
        id: dirName,
        slug: metadata.slug || dirName,
        title: metadata.title || 'Untitled',
        excerpt,
        content: htmlContent,
        toc,
        author,
        date: dateStr,
        readTime: '5 min read',
        tags,
        category,
        image
    };

    // Ensure directory exists
    const postsDir = path.join(__dirname, '../src/data/posts');
    if (!fs.existsSync(postsDir)) {
        fs.mkdirSync(postsDir, { recursive: true });
    }

    // Write individual JSON file for dynamic loading
    const jsonPath = path.join(postsDir, `${postData.slug}.json`);
    fs.writeFileSync(jsonPath, JSON.stringify(postData, null, 4));

    return postData;
}

// MAIN
console.log('Starting import...');
const dirs = getDirectories(POSTS_DIR);
let posts = [];

dirs.forEach(dir => {
    const post = parsePost(dir);
    if (post) {
        posts.push(post);
        console.log(`Processed: ${post.title}`);
    }
});

// Sort by date (Newest First)
posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
});

const fileContent = `export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    toc: { id: string; title: string }[];
    author: string;
    date: string;
    readTime: string;
    tags: string[];
    image: string;
}

export const blogPosts: BlogPost[] = ${JSON.stringify(posts, null, 4)};
`;

fs.writeFileSync(OUT_FILE, fileContent);
console.log(`Successfully wrote ${posts.length} posts to ${OUT_FILE}`);

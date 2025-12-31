const fs = require('fs');
const path = require('path');

// Read the original TS file
const originalPath = path.join(__dirname, '../src/data/blogData.ts');
let fileContent = fs.readFileSync(originalPath, 'utf8');

// Quick and dirty "transpile" to get the object in Node
// 1. Remove interface definition (lines until export const)
// This is fragile but works if format is consistent
const arrayStartIndex = fileContent.indexOf('export const blogPosts: BlogPost[] = [');
if (arrayStartIndex === -1) {
    console.error('Could not find blogPosts array start');
    process.exit(1);
}

// Extract just the array part
let arrayContent = fileContent.substring(arrayStartIndex);
arrayContent = arrayContent.replace('export const blogPosts: BlogPost[] = ', 'module.exports = ');

// Remove TypeScript specific syntax if any inside (unlikely for object literal)
// Save to temp JS file
const tempPath = path.join(__dirname, 'temp_blogData.cjs');
fs.writeFileSync(tempPath, arrayContent);

try {
    // Import the data
    const blogPosts = require(tempPath);
    console.log(`Loaded ${blogPosts.length} posts.`);

    const outputDir = path.join(__dirname, '../src/data/posts');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Process posts
    const strippedPosts = blogPosts.map(post => {
        // Save content to file
        const contentPath = path.join(outputDir, `${post.slug}.json`);
        fs.writeFileSync(contentPath, JSON.stringify({ content: post.content }));
        console.log(`Saved content for ${post.slug}`);

        // Return post without content
        const { content, ...meta } = post;
        return meta;
    });

    // Generate new blogData.ts
    const newContent = `export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content?: string; // Optional now as it's loaded dynamically
    toc: { id: string; title: string }[];
    author: string;
    date: string;
    readTime: string;
    tags: string[];
    image: string;
    category: string;
    views: number;
    featured?: boolean;
}

export const blogPosts: BlogPost[] = ${JSON.stringify(strippedPosts, null, 4)};
`;

    fs.writeFileSync(originalPath, newContent);
    console.log('Updated blogData.ts');

} catch (error) {
    console.error('Error processing data:', error);
} finally {
    // Cleanup
    if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
    }
}

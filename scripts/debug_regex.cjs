
const fs = require('fs');
const path = require('path');

const filePath = 'src/assets/blog_export/posts/loop-banking-and-credit-card-review-for-canadian-businesses-and-startups/index.md';
const content = fs.readFileSync(filePath, 'utf-8');

// The regex used in import_posts.mjs
const regex = /\[\/?et\\?_pb\\?_[^\]]*\]/g;

// Separate frontmatter from body to match import_posts logic
const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
const body = content.replace(frontMatterMatch[0], '').trim();

console.log('--- ORIGINAL BODY START ---');
console.log(body.substring(0, 200));

const cleanBody = body.replace(regex, '');

console.log('--- CLEANED BODY START ---');
// Show first 50 chars to see if [et_pb_...] is gone
console.log(cleanBody.substring(0, 200));

console.log('--- CLEANED BODY END ---');
console.log(cleanBody.slice(-200));

const remains = cleanBody.includes('et_pb');
console.log('Remains et_pb?', remains);
const remainsEscaped = cleanBody.includes('et\\_pb');
console.log('Remains et\\_pb?', remainsEscaped);
const remainsBracket = cleanBody.includes('[');
console.log('Remains [?', remainsBracket);

if (remains || remainsEscaped) {
    console.log("FAILED to clear all artifacts.");
} else {
    console.log("SUCCESS verified.");
}

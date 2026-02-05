
const fs = require('fs');
const path = require('path');

// Read the blogData file
const blogDataPath = path.join(process.cwd(), 'src/data/blogData.ts');
const fileContent = fs.readFileSync(blogDataPath, 'utf8');

// Extract the blogPosts array content using regex
// This is a rough extraction since it's a TS file, not pure JSON
// We'll look for objects inside the array
const posts = [];
const lines = fileContent.split('\n');
let currentPost = {};
let inPost = false;

for (let line of lines) {
    line = line.trim();

    if (line === '{') {
        inPost = true;
        currentPost = {};
        continue;
    }

    if (line === '},' || line === '}') {
        if (inPost && currentPost.category === 'Tax') {
            posts.push(currentPost);
        }
        inPost = false;
        continue;
    }

    if (inPost) {
        if (line.startsWith('"id":')) {
            currentPost.id = line.match(/"id": "(.*)"/)[1];
        }
        if (line.startsWith('"date":')) {
            currentPost.date = line.match(/"date": "(.*)"/)[1];
        }
        if (line.startsWith('"category":')) {
            currentPost.category = line.match(/"category": "(.*)"/)[1];
        }
        if (line.startsWith('"title":')) {
            currentPost.title = line.match(/"title": "(.*)"/)[1];
        }
    }
}

// Sort posts by date descending
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Output the top 10
console.log('Top 15 Tax Posts (Simulated View):');
posts.slice(0, 15).forEach((post, index) => {
    console.log(`${index + 1}. [${post.date}] ${post.id}`);
});


import { blogPosts, BlogPost } from './src/data/blogData';

function listPosts() {
    console.log(`Total posts: ${blogPosts.length}`);

    // Parse dates and sort
    const postsWithDates = blogPosts.map(p => {
        const d = new Date(p.date);
        return { ...p, dt: d };
    });

    // Sort descending (newest first)
    postsWithDates.sort((a, b) => b.dt.getTime() - a.dt.getTime());

    // Target index 71 (72nd post)
    const targetStart = 71;
    const targets = postsWithDates.slice(targetStart);

    console.log(`Target start index: ${targetStart}`);
    console.log(`Found ${targets.length} targets.`);

    targets.forEach((p, i) => {
        // Print in a format easy to parse: INDEX|ID|DATE|IMAGE
        console.log(`TARGET|${targetStart + i}|${p.id}|${p.date}|${p.image}`);
    });
}

listPosts();

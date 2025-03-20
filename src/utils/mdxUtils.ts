// src/utils/mdxUtils.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export function getAllPostsMetadata() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames
        .filter(fileName => fileName.endsWith('.mdx'))
        .map(fileName => {
            // Remove ".mdx" from file name to get id
            const id = fileName.replace(/\.mdx$/, '');

            // Read file content
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const { data } = matter(fileContents);

            return {
                id,
                title: data.title || id,
                date: data.date || '',
                // Add any other frontmatter properties you need
            };
        })
        .sort((a, b) => (a.date > b.date ? -1 : 1)); // Sort by date
}
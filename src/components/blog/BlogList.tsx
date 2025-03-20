import React from 'react';
import { Link } from '@tanstack/react-router';
import blogPosts from 'virtual:blog-posts';

const BlogList: React.FC = () => {
    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {blogPosts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link> - {post.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
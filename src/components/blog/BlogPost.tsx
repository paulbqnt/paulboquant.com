import React, { useEffect, useState } from 'react';
import { useParams } from '@tanstack/react-router';
import { MDXProvider } from '@mdx-js/react';

const BlogPost: React.FC = () => {
    // Use TanStack Router's useParams
    const { id } = useParams({ from: '/post/$id' });
    const [Content, setContent] = useState<React.ComponentType | null>(null);

    useEffect(() => {
        if (id) {
            console.log("Attempting to load MDX file for ID:", id);
            import(`../../content/posts/${id}.mdx`)
                .then((module) => {
                    console.log("MDX file loaded successfully:", module);
                    setContent(() => module.default);
                })
                .catch((err) => console.error('Failed to load MDX file:', err));
        }
    }, [id]);

    if (!Content) {
        return <div>Loading...</div>;
    }

    return (
        <MDXProvider>
            <Content />
        </MDXProvider>
    );
};

export default BlogPost;
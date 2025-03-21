// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import { getAllPostsMetadata } from './src/utils/mdxUtils';

export default defineConfig({
  plugins: [
    react(),
    mdx(),
    {
      name: 'virtual-blog-blog',
      resolveId(id) {
        if (id === 'virtual:blog-blog') {
          return id;
        }
        return null;
      },
      load(id) {
        if (id === 'virtual:blog-blog') {
          const posts = getAllPostsMetadata();
          return `export default ${JSON.stringify(posts)}`;
        }
        return null;
      }
    }
  ]
});
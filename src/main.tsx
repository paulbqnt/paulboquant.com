import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from '@mantine/core';
import './index.css';
// import '@mantine/code-highlight/styles.css';
import darkTheme from "./theme.ts"; // Make sure global styles are applied
import '../src/styles/prism-override.css'; // Add this import after Mantine styles

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <MantineProvider
        theme={darkTheme}
        withGlobalStyles
        withNormalizeCSS
    >
        <App />
    </MantineProvider>
);

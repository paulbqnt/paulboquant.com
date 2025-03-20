import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from '@mantine/core';
import './index.css';

import darkTheme from "./theme.ts"; // Make sure global styles are applied

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

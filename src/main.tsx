import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from '@mantine/core';
import './index.css'; // Make sure global styles are applied

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <MantineProvider theme={{ colorScheme: 'dark' }}>
        <App />
    </MantineProvider>
);

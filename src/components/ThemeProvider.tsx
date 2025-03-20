// src/components/ThemeProvider.tsx
import React from 'react';
import { MantineProvider, createTheme } from '@mantine/core';

const darkTheme = createTheme({
    colorScheme: 'dark',
    fontFamily: 'Open Sans, sans-serif',
    colors: {
        dark: [
            '#1A1A2E', '#1F1F33', '#24243D', '#2E2E4C', '#3A3A5A', '#464668',
            '#515176', '#63638C', '#7575A2', '#8A8AB8',
        ],
        primary: [
            '#1E90FF', '#1C80E0', '#1A71C1', '#1861A2', '#165283', '#144264',
            '#123245', '#102226', '#0E1207', '#0C0208',
        ],
        text: [
            '#E0E0E0', '#BDBDBD', '#9E9E9E', '#7F7F7F', '#616161', '#424242',
            '#3D3D3D', '#333333', '#292929', '#1F1F1F',
        ],
    },
    primaryColor: 'primary',
    white: '#E0E0E0',
    black: '#1A1A2E',
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <MantineProvider theme={darkTheme} withGlobalStyles withNormalizeCSS>
            {children}
        </MantineProvider>
    );
};

export default ThemeProvider;

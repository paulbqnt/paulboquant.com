import React from 'react';
import { Group, Container, Text } from '@mantine/core';

const AppFooter: React.FC = () => {
    return (
        <Container
            fluid
            style={{
                backgroundColor: "var(--mantine-color-dark-0)", // ✅ Set dark background
                color: "var(--mantine-color-text-0)", // ✅ Ensure readable text
                padding: "1rem",
                textAlign: "center",
            }}
        >
            <Text size="sm">
                © {new Date().getFullYear()} Paul Boquant
            </Text>
        </Container>
    );
};

export default AppFooter;

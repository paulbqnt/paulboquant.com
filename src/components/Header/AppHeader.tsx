import React from 'react';
import { Link } from '@tanstack/react-router';
import { Group, Container } from '@mantine/core';

const AppHeader: React.FC = () => {
    return (
        <Container fluid px="md">
            <Group position="apart" sx={{ height: '60px' }}>
                <Group>
                    <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                    <Link to="/projects" style={{ textDecoration: 'none' }}>Projects</Link>
                    <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
                </Group>
            </Group>
        </Container>
    );
};

export default AppHeader;

// src/pages/About.tsx
import { Container, Text } from '@mantine/core';
import { Link } from '@tanstack/react-router';

const Projects = () => {
    return (
        <Container>

            <h2>Projects Page</h2>
            <h3>Hiram, Option Pricing App</h3>
            <Link to="/projects/hiram" style={{ textDecoration: 'none' }}>link</Link>

            <h3>Option Pricing Library (Python)</h3>
            <Link to="/projects/hiram-pricing" style={{ textDecoration: 'none' }}>link</Link>

        </Container>
    );
};

export default Projects;

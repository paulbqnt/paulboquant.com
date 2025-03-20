// src/pages/About.tsx
import { Container, Text } from '@mantine/core';
import { Link } from '@tanstack/react-router';

const Projects = () => {
    return (
        <Container>

            <h2>Projects Page</h2>

            <h3>Project 1</h3>
            <Link to="/projects/project1" style={{ textDecoration: 'none' }}>link</Link>

            <h3>Project 2</h3>
            <Link to="/projects/project2" style={{ textDecoration: 'none' }}>link</Link>

        </Container>
    );
};

export default Projects;

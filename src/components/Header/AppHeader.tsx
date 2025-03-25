import React from 'react';
import { Link } from '@tanstack/react-router';
import { Group, Container } from '@mantine/core';
import styles from './AppHeader.module.css';

const AppHeader: React.FC = () => {
    return (
        <header className={styles.header}>
            <Container fluid px="md">
                <Group>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/blog" className={styles.link}>Blog</Link>
                    <Link to="/projects" className={styles.link}>Projects</Link>
                    <Link to="/learn" className={styles.link}>Learn</Link>
                    <Link to="/snippets" className={styles.link}>Snippets</Link>
                    <Link to="/now" className={styles.link}>Now</Link>
                    <Link to="/contact" className={styles.link}>Contact</Link>
                    <Link to="/about" className={styles.link}>About</Link>
                </Group>
            </Container>
        </header>
    );
};

export default AppHeader;

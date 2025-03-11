'use client';
import { Container, Group } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconRss, IconSearch } from '@tabler/icons-react';
import React from "react";
import styles from './Footer.module.css';
import Text from "../Text"

function Footer() {
    return (
        <footer className={styles.footer}>
            <Text>© 2025 Paul Boquant. All Rights Reserved.</Text>
            <Group>
                <a href="/" aria-label="Search">
                    <IconSearch />
                </a>
                <a href="/" aria-label="RSS">
                    <IconRss />
                </a>
                <a href="https://github.com/paulbqnt" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <IconBrandGithub />
                </a>
                <a href="https://www.linkedin.com/in/paulboquant/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <IconBrandLinkedin />
                </a>
            </Group>
        </footer>
    );
}

export default Footer;
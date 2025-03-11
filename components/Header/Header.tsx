'use client'; // Ensure the component is rendered on the client side

import { IconSearch } from '@tabler/icons-react';
import { Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import Link from 'next/link';
import Text from "../Text"
import classes from './Header.module.css';

const links = [
    { link: '/blog', label: 'Blog' },
    { link: '/projects', label: 'Projects' },
    { link: '/uses', label: 'Uses' },
    { link: '/about', label: 'About' }

];

function Header() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => (
        <Link key={link.label} href={link.link} className={classes.link}>
            {link.label}
        </Link>
    ));

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                    <Link href="/">
                        <Text>Paul Boquant</Text>
                    </Link>
                </Group>

                <Group>
                    <Group ml={50} gap={5} visibleFrom="sm">
                        {items}
                    </Group>

                </Group>
            </div>
        </header>
    );
}

export default Header;
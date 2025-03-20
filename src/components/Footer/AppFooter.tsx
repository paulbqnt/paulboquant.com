import React from 'react';
import { Group, Button, Container, Text } from '@mantine/core';

const AppFooter: React.FC = () => {
    return (
        <Container fluid>
            <Group position="center" sx={{ height: '60px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
                <Button variant="subtle">Privacy Policy</Button>
                <Button variant="subtle">Terms of Service</Button>
                <Button variant="subtle">Support</Button>
            </Group>
            <Text align="center" size="sm" color="dimmed" mt="md">
                © {new Date().getFullYear()} Paul Boquant. All rights reserved.
            </Text>
        </Container>
    );
};

export default AppFooter;
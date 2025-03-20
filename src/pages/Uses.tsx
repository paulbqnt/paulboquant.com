// src/pages/About.tsx
import { Container, Text } from '@mantine/core';

const Uses = () => {
    return (
        <Container>

            <h1>What I use</h1>
            <Text>Computer</Text>
            <ul>
                <li>Fedora</li>
                <li>PopOS</li>
            </ul>
            <Text>Editor</Text>
            <Text>Terminal</Text>
            <Text>Desktop App</Text>
            <ul>
                <li>Bruno</li>
                <li>FlameShot</li>
            </ul>
            <Text>Mobile App</Text>
            <ul>
                <li>Orgzly</li>
                <li>Qobuz</li>
                <li>ProtonPass</li>
            </ul>
            <Text>Keyboard</Text>
            <ul>
                <li>Kinesis Advantage 2 LF</li>
            </ul>
        </Container>
    );
};

export default Uses;

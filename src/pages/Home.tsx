import { Container, Text } from '@mantine/core';
import MathComponent from "../components/MathComponent";

const Home = () => {
    const myExpression = 'E  = mc^2 '; // Replace this with any expression you want

    return (
        <Container>
            <h2>About</h2>
            <Text>Hey! I'm Paul Boquant, a French Financial Engineer based in Dusseldorf, Germany.</Text>
            <MathComponent expression={myExpression} />
        </Container>
    );
};

export default Home;

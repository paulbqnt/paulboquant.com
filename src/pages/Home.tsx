import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Container, Text } from "@mantine/core";

const Home = () => {
    const exampleCode = `
def greet(name: str) -> str:
    return f"Hello, {name}!"

print(greet('Paul'))  # Output: Hello, Paul!
    `;

    return (
        <Container>
            <h2>About</h2>
            <Text>
                Hey! I'm Paul, a French Financial Engineer based in Dusseldorf, Germany.
            </Text>

            <SyntaxHighlighter
                language="python"
                style={vscDarkPlus}
                customStyle={{
                    borderRadius: '8px',
                    padding: '1rem',
                    margin: '1rem 0'
                }}
            >
                {exampleCode.trim()}
            </SyntaxHighlighter>
        </Container>
    );
};

export default Home;
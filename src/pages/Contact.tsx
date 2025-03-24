import {Button, Container, Group, Text, TextInput} from "@mantine/core";
import { useForm } from '@mantine/form';


const Contact = () => {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            email: '',
        },
    });
    return (
        <Container>
            <h1>Contact</h1>
            <Text>Feel free to get in touch and let's have a discussion about how we can work together.</Text>
            <Text>Find me on social media</Text>

            <Group>
                <Button variant="default">Email</Button>
                <Button variant="default">Linkedin</Button>
                <Button variant="default">Github</Button>
            </Group>


            <Text>Or send me a message</Text>

            <TextInput
                label="Name"
                placeholder="Name"
                key={form.key('name')}
                {...form.getInputProps('name')}
            />
            <TextInput
                mt="md"
                label="Email"
                placeholder="Email"
                key={form.key('email')}
                {...form.getInputProps('email')}
            />

            <TextInput></TextInput>

            <Button>Send Message</Button>

        </Container>

    );
};

export default Contact;

// src/pages/About.tsx
import {Button, Container, Paper, Tabs, Text, Textarea} from '@mantine/core';
import {IconMessageCircle, IconPhoto, IconSettings} from "@tabler/icons-react";

const About = () => {
    return (
        // TODO: add 4 tabs: INTRO/Resume/Career/Education
        <Container>
            <Tabs defaultValue="gallery">
                <Tabs.List>
                    <Tabs.Tab value="intro" leftSection={<IconPhoto size={12} />}>
                        Intro
                    </Tabs.Tab>
                    <Tabs.Tab value="resume" leftSection={<IconMessageCircle size={12} />}>
                        Resume
                    </Tabs.Tab>
                    <Tabs.Tab value="career" leftSection={<IconSettings size={12} />}>
                        Career
                    </Tabs.Tab>
                    <Tabs.Tab value="education" leftSection={<IconSettings size={12} />}>
                        Education
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="intro">

                    <Text>Hello!</Text>
                    <Text>
                        Thanks for stopping by my personal website.

                        I'm Paul. I've been working in Finance for over 4 years, doing both the coding you see on the screen (frontend) and the stuff that happens behind the scenes (backend).

                        I'm really into Python and Kotlin, which are swiss knife languages. I also know a bunch of frameworks that make building websites even easier, like React, and Python librairies like pandas and numpy and fastAPI. I love learning. Currently focused on (TCP/IP, Operating Systems, and Japanese Language)

                        I believe that good communication is super important in any job.

                        I'm good at adapting to different situations, working efficiently, and always trying to do my best. My experience has taught me how to solve problems, but I'm also happy to work with others to get things done. I'm excited about the chance to work together and make cool stuff!

                        I'm looking forward to the possibility of working with you!
                        Best Regards,
                    </Text>
                    <Text>Paul Boquant</Text>

                </Tabs.Panel>

                <Tabs.Panel value="resume">
                    <Button>Download Resume</Button>
                    {/*set the iframe to add my last resume*/}
                    <iframe></iframe>
                </Tabs.Panel>

                <Tabs.Panel value="career">

                    <Paper shadow="xs" p="md" style={{ backgroundColor: 'grey' }}>
                        <Text>Paper is the most basic ui component</Text>
                    </Paper>

                    <Paper shadow="xs" p="md" style={{ backgroundColor: 'grey' }}>
                        <Text>Paper is the most basic ui component</Text>

                    </Paper>

                    <Paper shadow="xs" p="md" style={{ backgroundColor: 'grey' }}>
                        <Text>Paper is the most basic ui component</Text>
                    </Paper>

                    <Paper shadow="xs" p="md" style={{ backgroundColor: 'grey' }}>
                        <Text>Paper is the most basic ui component</Text>
                    </Paper>

                    <Paper shadow="xs" p="md" style={{ backgroundColor: 'grey' }}>
                        <Text>Paper is the most basic ui component</Text>
                    </Paper>

                </Tabs.Panel>




                <Tabs.Panel value="education">
                    <Paper shadow="xs" p="md" style={{ backgroundColor: 'grey' }}>
                        <Text>
                            Master of Science in Finance & Asset Managment
                        </Text>
                    </Paper>
                    <Paper shadow="xs" p="md" style={{ backgroundColor: 'grey' }}>
                        <Text>
                            Bachelor of Science in Economics, Management & Law
                        </Text>
                    </Paper>
                </Tabs.Panel>
            </Tabs>
        </Container>








    );
};

export default About;


{/*<h2>About</h2>*/}

{/*<Text></Text>*/}




{/*<h4>Intro</h4>*/}



{/*<h4>Resume</h4>*/}
{/*<h4>Career</h4>*/}
{/*<h4>Education</h4>*/}
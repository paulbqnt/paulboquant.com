import {Container, List, Text} from '@mantine/core';
import {Link} from "@tanstack/react-router";

const Now = () => {
    return (

        <Container>
            <h1>Now</h1>
            <Text>Live in Dusseldorf, Germany, working as a Trader/Financial Engineer for a Fintech.</Text>
            <Text>I'm currently expanding my Computer Science knowledge with the goal of understanding better what's inside.</Text>
            <Text>Consolidating my skills in backend programming.</Text>


            <Text>Mainly focusing on these books: Operating Systems 3 easy pieces, TCP/IP Illustrated.</Text>



            <h3>Currently Learning</h3>
            <List>
                <List.Item>Operating Systems</List.Item>
                <List.Item>Networking</List.Item>
                <List.Item>Functional Programming Paradigm</List.Item>
            </List>


            <h3>My cycle of special interest</h3>
            <List>
                <List.Item>Market Finance (Derivatives)</List.Item>
                <List.Item>Linux & UNIX based systems</List.Item>
                <List.Item>日本語 (Japanese Language)</List.Item>
            </List>

            <Text>Last updated: March 25, 2025, Inspired by <a href="https://nownownow.com/about">nownow.com</a></Text>

        </Container>
    );
};

export default Now;

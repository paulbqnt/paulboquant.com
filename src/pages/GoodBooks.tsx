import { Container, List, Text } from "@mantine/core";



const GoodBooks = () => {
    return (
        <Container>
            <h1>Good Books</h1>
            <h2>Programming</h2>
            <List>
                <List.Item>Code Complete: A Practical Handbook of Software Construction, Second Edition - by Steve McConnell</List.Item>
                <List.Item>Pragmatic Programmer: Your Journey To Mastery - by David Thomas, Andrew Hunt</List.Item>
                <List.Item>Operating Systems: Three Easy Pieces - by Remzi H Arpaci-Dusseau, Andrea C Arpaci-Dusseau</List.Item>
                <List.Item>TCP/IP Illustrated: The Protocols, Volume 1 - by Kevin Fall, W. Stevens</List.Item>
            </List>

            <h2>Finance</h2>
            <List>
                <List.Item>Exotic Options and Hybrids: A Guide to Structuring, Pricing and Trading - by Mohamed Bouzoubaa, Adel Osseiran</List.Item>
                <List.Item>Options, Futures, and Other Derivatives - by John Hull</List.Item>
            </List>

        </Container>

    );
};

export default GoodBooks;

export interface IPost {
    title: string;
    slug: string;
    author: string;
    date: string;
    category: string;
    thumbnail: string;
}

export const posts: IPost[] = [
    {
        title: "Abc",
        slug: "abc",
        author: "Paul Boquant",
        date: "2024-02-28",
        category: "Test",
        thumbnail: "/images/thumbnails/cybersecurity.jpg",
    },
    {
        title: "Def",
        slug: "def",
        author: "Paul Boquant",
        date: "2024-02-28",
        category: "Test",
        thumbnail: "/images/thumbnails/green-coding.jpg",
    },
];
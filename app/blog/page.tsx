import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { posts } from "@/posts";
import Image from "next/image";
import Link from "next/link";

export default function page() {
    return (
        <div>
            <Header />
            <div>
                {posts.map((p, idx) => (
                    <Link
                        key={idx}
                        href={`/blog/${p.slug}`}
                    >
                        {/* image */}
                        <div>
                            <Image
                                src={p.thumbnail}
                                alt={`${p.title} - thumbnail`}
                                sizes="100vh"
                                fill
                            />
                        </div>

                        {/* category */}
                        <p>
                            {p.category}
                        </p>

                        {/* title */}
                        <h2>
                            {p.title}
                        </h2>

                        {/* author and date */}
                        <div>
                            <div>{p.author}</div>
                            <div>{p.date}</div>
                        </div>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    );
}
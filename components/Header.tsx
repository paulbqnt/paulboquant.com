"use client";

import Image from "next/image";
import Link from "next/link";

const links = [{ displayName: "Blog", herf: "/blog" }];

export default function Header() {
    // const { theme, setTheme } = useTheme();

    // const toggleTheme = () => {
    //     setTheme(theme === "light" ? "dark" : "light");
    // };
    return (
        <header>
            <Link href={"/"} >
                {/*<Image*/}
                {/*    // src={theme === "light" ? "/light-union.svg" : "/dark-union.svg"}*/}
                {/*    width={36}*/}
                {/*    height={36}*/}
                {/*    alt="logo"*/}
                {/*    priority*/}
                {/*/>*/}
                <div>
                    Meta<span>Blog</span>
                </div>
            </Link>
            <div >
                <nav>
                    {links.map((l, idx) => (
                        <Link href={l.herf} key={idx}>
                            {l.displayName}
                        </Link>
                    ))}
                </nav>
                {/*<button*/}
                {/*    onClick={toggleTheme}*/}
                {/*    className="focus:outline-none"*/}
                {/*    aria-label="Toggle theme"*/}
                {/*>*/}
                {/*    <Image*/}
                {/*        src={theme === "light" ? "/light-toggle.svg" : "/dark-toggle.svg"}*/}
                {/*        alt="theme toggle"*/}
                {/*        width={48}*/}
                {/*        height={28}*/}
                {/*        priority*/}
                {/*    />*/}
                {/*</button>*/}
            </div>
        </header>
    );
}
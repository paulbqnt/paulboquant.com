"use client";

// import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    // const { theme } = useTheme();
    return (
        <div>
            <Link href={"/"} className="flex space-x-2 items-center">
                {/*<Image*/}
                {/*    src={theme === "light" ? "/light-union.svg" : "/dark-union.svg"}*/}
                {/*    width={36}*/}
                {/*    height={36}*/}
                {/*    alt="logo"*/}
                {/*    priority*/}
                {/*/>*/}
                <div>
                    Meta<span>Blog</span>
                </div>
            </Link>
            <div>
                <Link href={"/"}>Terms of Use</Link>
                <Link href={"/"}>Privacy Policy</Link>
                <Link href={"/"}>Cookie Policy</Link>
            </div>
        </div>
    );
}
import Link from "next/link";
import React from "react";

const About = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-3xl">About</h1>
            <Link href="/">To Home</Link>
        </main>
    );
};

export default About;

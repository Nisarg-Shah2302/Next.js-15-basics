'use client';
import { useRouter } from "next/navigation";

const About = () => {
    const router = useRouter();
    console.log(" ABOUT US COMPONENT ")
    return (
        <>
            <p>ABOUT Component</p>
            <button
                onClick={() => router.push("/")}
                className="bg-blue-500 text-white p-2 rounded-md"
            >
                Go Home
            </button>
        </>
    )
}

export default About;
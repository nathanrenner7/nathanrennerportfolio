"use client"
import Link from "next/link";

import { Lobster } from "@next/font/google"
import { usePathname } from "next/navigation";

const lobster = Lobster({
    subsets: ['latin'],
    weight: ['400']
})

const Headed = () => {

    const pathName = usePathname();

    console.log(pathName);

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <Link href="/" className={`${lobster.className} text-gray-900 text-2xl font-semibold hover:text-gray-700`}>Nathan Renner</Link>
                    <div className="flex space-x-4">
                        <Link href="/" className={`${pathName === "/" ? "text-gray-900 hover:text-gray-700" : "text-gray-700 hover:text-gray-900"}`}>Home</Link>
                        <Link href="#projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
                        <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Headed;
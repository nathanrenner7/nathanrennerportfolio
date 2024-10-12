import { Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <section id="contact" className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
            <div className="flex justify-center space-x-6">
                <Link href="mailto:nathanrenner1@gmail.com" className="text-gray-600 hover:text-gray-900">
                    <Mail className="w-8 h-8" />
                </Link>
                <Link href="https://github.com/nathanrenner7" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                    <FaGithub className="w-8 h-8" />
                </Link>
                <Link href="https://www.linkedin.com/in/nathan-renner-208b99292/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                    <FaLinkedin className="w-8 h-8" />
                </Link>
            </div>
        </section>
    );
}

export default Footer;
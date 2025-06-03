import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="mt-auto p-6 border-t border-white/10 text-center text-sm text-gray-400">
            <div className="flex justify-center gap-6 mb-4">
                <a href="https://www.linkedin.com/in/john-weaver-25830a231/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <FaLinkedin size={20} />
                </a>
                <a href="https://github.com/weavr-software" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <FaGithub size={20} />
                </a>
            </div>
            © {new Date().getFullYear()} Weavr Software. All rights reserved.
        </footer>
    );
}

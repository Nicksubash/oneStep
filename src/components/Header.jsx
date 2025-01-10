import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { transform } from 'framer-motion';

export default function Header() {
    const [isShrunk, setShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShrunk(true);
            } else {
                setShrunk(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 backdrop-blur-lg shadow-lg w-3/4 mx-auto rounded-full flex justify-center items-center z-50 transition-all duration-300 ${
                isShrunk ? 'py-1 px-2 scale-0' : 'py-4 px-6 scale-100'
            }`}
        >
            <div className="container flex justify-between items-center">
                <Link to="/">
                    <img
                        src="/cat.gif"
                        alt="logo"
                        className={`transition-transform duration-300 ${
                            isShrunk ? 'h-8' : 'h-12'
                        }`}
                    />
                </Link>
                <nav className="flex space-x-6 gap-8 mr-8">
                    <Link
                        to="/"
                        className="text-2xl text-cyan-600  hover:text-cyan-700 font-semibold transition-all duration-300 transform hover:scale-110"
                    >
                        Home
                    </Link>
                    {/* <Link
                        to="/projects"
                        className="text-2xl text-cyan-600  hover:text-indigo-500 font-semibold transition-colors duration-300"
                    >
                        Projects
                    </Link> */}
                    <Link
                        to="/About"
                        className="text-2xl text-cyan-600 hover:text-cyan-700 font-semibold transition-all duration-300 transform hover:scale-110"
                        >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="text-2xl text-cyan-600  hover:text-cyan-700 font-semibold transition-all duration-300 transform hover:scale-110"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}

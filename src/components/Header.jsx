import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [isShrunk, setShrunk] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShrunk(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            className={`sticky top-0 backdrop-blur-lg shadow-lg w-3/4 mx-auto rounded-full flex justify-center items-center z-50 transition-all duration-300 ${
                isShrunk ? 'py-1 px-2 scale-0' : 'py-4 px-6 scale-100'
            }`}
        >
            <div className="container flex justify-between items-center w-full p-9 font-outfit font-bold">
                <Link to="/">
                    <img
                        src="/cat.gif"
                        alt="logo"
                        className={`transition-transform duration-300 ${
                            isShrunk ? 'h-8' : 'h-12'
                        }`}
                    />
                </Link>

                {/* Hamburger Menu for Small Screens */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-3xl text-cyan-600">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Navigation Links */}
                <nav
                    className={`${
                        isOpen ? 'flex flex-col items-center space-y-4' : 'hidden'
                    } md:flex md:flex-row md:space-x-6 gap-8 mr-8`}
                >
                    <Link
                        to="/"
                        className="text-2xl text-cyan-600 hover:text-cyan-700 font-semibold transition-all duration-300 transform hover:scale-110"
                    >
                        Home
                    </Link>
                    <Link
                        to="/projects"
                        className="text-2xl text-cyan-600 hover:text-cyan-700 font-semibold transition-all duration-300 transform hover:scale-110"
                    >
                        Projects
                    </Link>
                    <Link
                        to="/About"
                        className="text-2xl text-cyan-600 hover:text-cyan-700 font-semibold transition-all duration-300 transform hover:scale-110"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="text-2xl text-cyan-600 hover:text-cyan-700 font-semibold transition-all duration-300 transform hover:scale-110"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}

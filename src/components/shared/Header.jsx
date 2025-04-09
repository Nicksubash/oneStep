import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import AnimatedButton from "./AnimateButton";
import Modal from '../modal/modal';
import LoginForm from '../Auth/LoginForm';
import RegisterForm from '../Auth/RegisterForm';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isJlptOpen, setIsJlptOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setshowRegisterModal]= useState(false)

    const toggleLoginModal = () => {
        setShowLoginModal(!showLoginModal);
        if (isOpen) setIsOpen(false);
    };

    const toggleRegisterModal = () => {
        setshowRegisterModal(!showRegisterModal);
        if (isOpen) setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="sticky top-0 z-50 backdrop-blur-lg shadow-lg w-full mx-auto">
                <div className="container flex justify-between items-center w-full p-4 font-outfit font-bold">
                    <Link to="/">
                        <img
                            src="/cat.gif"
                            alt="logo"
                            className="h-12"
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
                        } md:flex md:flex-row md:space-x-6 gap-8`}
                    >
                        <Link to="/" className="text-2xl text-cyan-600 hover:text-cyan-700">
                            Home
                        </Link>
                        <Link to="/about-us" className="text-2xl text-cyan-600 hover:text-cyan-700">
                            About Us
                        </Link>
                        <Link to="/community" className="text-2xl text-cyan-600 hover:text-cyan-700">
                            Community
                        </Link>

                        <div className="relative">
                            <button 
                                className="flex items-center text-2xl text-cyan-600 hover:text-cyan-700"
                                onClick={() => setIsJlptOpen(!isJlptOpen)}
                                onMouseEnter={() => setIsJlptOpen(true)}
                                onMouseLeave={() => setIsJlptOpen(false)}
                            >
                                JLPT
                                <FaChevronDown className={`ml-1 transition-transform ${isJlptOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {isJlptOpen && (
                                <div 
                                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                                    onMouseEnter={() => setIsJlptOpen(true)}
                                    onMouseLeave={() => setIsJlptOpen(false)}
                                >
                                    {['N1', 'N2', 'N3', 'N4', 'N5'].map((level) => (
                                        <Link
                                            key={level}
                                            to={`/jlpt/${level.toLowerCase()}`}
                                            className="block px-4 py-2 text-gray-800 hover:bg-cyan-50"
                                            onClick={() => setIsJlptOpen(false)}
                                        >
                                            JLPT {level}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link to="/ssw" className="text-2xl text-cyan-600 hover:text-cyan-700">
                            SSW
                        </Link>
                        <Link to="/book" className="text-2xl text-cyan-600 hover:text-cyan-700">
                            BOOK
                        </Link>
                        
                        <div className="flex flex-col md:flex-row gap-4 md:ml-6 mt-4 md:mt-0">
                            <AnimatedButton onClick={toggleLoginModal}>
                                Login/Register
                            </AnimatedButton>
                        </div>
                    </nav>
                </div>
            </header>

            <Modal isOpen={showLoginModal} onClose={toggleLoginModal}>
                <LoginForm 
                onSuccess={toggleLoginModal}
                onRegisterClick={()=>{
                    toggleLoginModal();
                    toggleRegisterModal();
                }}
                />
            </Modal>

            {/*register modal */}
            <Modal isOpen={showRegisterModal} onClose={toggleRegisterModal}>
                <RegisterForm 
                    onSuccess={toggleRegisterModal}
                    onLoginClick={() => {
                        toggleRegisterModal();
                        toggleLoginModal();
                    }}
                />
            </Modal>
        </>
    );
}
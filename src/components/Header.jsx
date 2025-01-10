import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="sticky top-0  backdrop-blur-lg shadow-md w-3/4 mx-auto py-2 px-4 rounded-full flex justify-center items-center z-50 pt-5">

            <div className="container mx-auto flex justify-between items-center ml-8">
                <Link to="/">
                    <img 
                        src='/nameLogo.png' 
                        alt="logo" 
                        className="h-16 w-auto hover:scale-105 transition-transform duration-300"
                    />
                </Link>
                <nav className="flex space-x-6 mr-8 ">
                    <Link 
                        to="/" 
                        className="text-2xl text-black hover:text-indigo-500 font-semibold transition-colors duration-300"
                    >
                        Home
                    </Link>
                    <Link 
                        to="/projects" 
                        className="text-2xl text-black hover:text-indigo-500  font-semibold transition-colors duration-300"
                    >
                        Projects
                    </Link>
                    <Link 
                        to="/contact" 
                        className="text-2xl text-black hover:text-indigo-500 font-semibold transition-colors duration-300"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}


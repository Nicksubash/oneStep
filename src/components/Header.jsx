import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-amber-700 text-white p-3 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/">
                <img src='/nameLogo.png'
                alt="logo"
                className='h-20 w-auto'/>
                </Link>
            <nav>
                    <Link to="/" className="mx-4 text-3xl hover:text-blue-300">Home</Link>
                    <Link to="/projects" className="mx-4 text-3xl hover:text-blue-300">Projects</Link>
                    <Link to="/contact" className="mx-4 text-3xl hover:text-blue-300">Contact</Link>
                </nav>
            </div>
        </header>
    );
}

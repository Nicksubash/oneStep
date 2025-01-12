import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const Footer = () => {
    const { socials } = portfolioData;
    const [isShrunk, setShrunk] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleScroll = () => {
            setShrunk(window.scrollY > 50);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <motion.footer
            className={`text-black py-4 backdrop-blur-lg shadow-lg rounded-full mx-auto transition-all duration-300 min-w-[300px] md:min-w-[800px] ${
                isShrunk ? 'py-2 px-4 scale-100' : 'py-6 px-8 scale-0'
            }`}
            initial={isMobile ? {} : { opacity: 0 }}
            animate={isMobile ? {} : { opacity: 1 }}
            transition={{ duration: isMobile ? 0 : 0.2 }}
        >
            <div className="text-center text-2xl font-semibold text-cyan-600 top-0">
                <p>Find me on</p>
            </div>
            <div className="container flex justify-center items-center">
                <div className="flex space-x-6">
                    {socials.map((social) => (
                        <a
                            key={social.id}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl hover:text-cyan-700 transition-colors duration-300 text-cyan-600"
                        >
                            {/* Dynamic Icon Rendering */}
                            {social.title === 'Blog' ? (
                                <i className="fas fa-rss"></i>
                            ) : (
                                <i className={`fab fa-${social.title.toLowerCase()}`}></i>
                            )}
                        </a>
                    ))}
                </div>
            </div>
            <div className="text-center mt-4 opacity-70 text-cyan-600 text-sm">
                <p>&copy; 2025 {portfolioData.name}. All Rights Reserved.</p>
            </div>
        </motion.footer>
    );
};

export default Footer;

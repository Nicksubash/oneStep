import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const Footer = () => {
  const { socials } = portfolioData;
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
    <motion.footer
      className={`text-black py-6 backdrop-blur-lg shadow-lg rounded-full mx-auto min-w-[800px] transition-all duration-300 ${
        isShrunk ? 'py-2 px-4 scale-100' : 'py-6 px-8 scale-0'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
         <div className="text-center mt-4 opacity-70 text-2xl font-semibold text-cyan-600 top-0">
            <p>Find me on</p>
        </div>
      <div className="container flex justify-center items-center">
     
        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {socials.map((social) => (
            <motion.a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-700 transition-colors duration-300 text-cyan-600 "
              whileHover={{ scale: 1.2 }}
            >
              {/* Dynamic Icon Rendering */}
              {social.title === 'Blog' ? (
                <i className="fas fa-rss"></i>
              ) : (
                <i className={`fab fa-${social.title.toLowerCase()}`}></i>
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
      <div className="text-center mt-4 opacity-70 text-cyan-600 ">
        <p>&copy; 2025 {portfolioData.name}. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;

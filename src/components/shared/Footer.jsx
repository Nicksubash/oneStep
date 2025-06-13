import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Data from '../../data/data.json';

const Footer = () => {
  const { socials, contact, name } = Data;
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mapping for Font Awesome icons 
  const iconMap = {
    facebook: 'fab fa-facebook-f',
    twitter: 'fab fa-x-twitter',
    instagram: 'fab fa-instagram',
    linkedin: 'fab fa-linkedin-in',
    blog: 'fas fa-rss',
  };

  return (
    <motion.footer
      className="text-gray-300 bg-gray-900 py-10 px-4 md:px-12 transition-all duration-300"
      initial={isMobile ? {} : { opacity: 0 }}
      animate={isMobile ? {} : { opacity: 1 }}
      transition={{ duration: isMobile ? 0 : 0.2 }}
    >
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
        <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">{name}</h3>
          <ul className="text-sm space-y-1">
            <li>
              <span className="font-medium text-gray-400">Address:</span> {contact.address}
            </li>
            <li>
              <span className="font-medium text-gray-400">Email:</span>{' '}
              <a href={`mailto:${contact.email}`} className="hover:text-white">
                {contact.email}
              </a>
            </li>
            <li>
              <span className="font-medium text-gray-400">Phone:</span>{' '}
              <a href={`tel:${contact.phone}`} className="hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li>
              <span className="font-medium text-gray-400">Website:</span>{' '}
              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {contact.website}
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-indigo-400 font-semibold mb-4">クイックリンク</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">会社案内</a></li>
            <li><a href="/services" className="hover:text-white">事業内容</a></li>
            <li><a href="/contact" className="hover:text-white">お問い合わせ</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-indigo-400 font-semibold mb-4">事業一覧</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/services#recruitment" className="hover:text-white">Recruitment & Staffing</a></li>
            <li><a href="/services#student" className="hover:text-white">Student Consulting</a></li>
            <li><a href="/services#translation" className="hover:text-white">Translation & Documentation</a></li>
            <li><a href="/services#import" className="hover:text-white">Import & Export</a></li>

            {/* <li><a href="/services#english" className="hover:text-white">English Language Courses</a></li>
            <li><a href="/services#jlpt" className="hover:text-white">JLPT Preparation</a></li> */}
          </ul>
        </div>

        {/* Legal & Social */}
        <div>
          <h4 className="text-indigo-400 font-semibold mb-4">その他</h4>
          <ul className="space-y-2 text-sm mb-4">
            <li><a href="/privacy" className="hover:text-white">個人情報保護方針</a></li>
            <li><a href="/info" className="hover:text-white">関連国の情報</a></li>
            <li><a href="/privacy" className="hover:text-white">プライバシーポリシー</a></li>
          </ul>
          <div className="flex space-x-4">
            {socials.map((social) => {
              const iconClass = iconMap[social.title.toLowerCase()] || 'fas fa-globe';
              return (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-500 transition-colors duration-300 text-indigo-400"
                >
                  <i className={iconClass}></i>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
        &copy; 2025 {name}. All Rights Reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;

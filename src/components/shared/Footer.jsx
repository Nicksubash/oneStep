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
        <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-brand-primary to-brand-navyBright text-transparent bg-clip-text">{name}</h3>
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
              <span className="font-medium text-gray-400">Fax:</span>{' '}
              <a href={`tel:${contact.fax}`} className="hover:text-white">
                {contact.fax}
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
          <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-brand-primary to-brand-navyBright text-transparent bg-clip-text">クイックリンク</h4>
          <ul className="space-y-2 text-sm">
          <li><a href="/greeting" className="hover:text-white">代表メッセージ</a></li>
          <li><a href="/philosophy" className="hover:text-white">企業理念</a></li>
          <li><a href="/faq" className="hover:text-white">よくあるご質問</a></li>
            <li><a href="/contact" className="hover:text-white">お問い合わせ</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-brand-primary to-brand-navyBright text-transparent bg-clip-text">事業一覧</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/services#recruitment" className="hover:text-white">職業紹介サービス</a></li>
            <li><a href="/students" className="hover:text-white">留学生の就職サポート</a></li>
            <li><a href="/translation" className="hover:text-white">多言語ドキュメントサービス</a></li>
            {/* <li><a href="/services#english" className="hover:text-white">English Language Courses</a></li>
            <li><a href="/services#jlpt" className="hover:text-white">JLPT Preparation</a></li> */}
          </ul>
        </div>

        {/* Legal & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-brand-primary to-brand-navyBright text-transparent bg-clip-text">その他</h4>
          <ul className="space-y-2 text-sm mb-4">
            <li><a href="/privacy" className="hover:text-white">個人情報保護方針</a></li>
            <li><a href="/privacy_policy" className="hover:text-white">プライバシーポリシー</a></li>
          </ul>
          <div className="flex space-x-4">
  {socials.slice(0, 4).map((social) => {
    const iconClass = iconMap[social.title.toLowerCase()];
    return (
      <a
        key={social.id}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-navyBright flex items-center justify-center transition-all duration-300 group-hover:from-brand-navyBright group-hover:to-brand-primary transform group-hover:scale-105 shadow-lg">
          <i className={`${iconClass} text-white text-lg`}></i>
        </div>
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

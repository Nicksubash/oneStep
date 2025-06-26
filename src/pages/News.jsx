import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar/Navbar'; // Assuming you have these
import Footer from '../components/shared/Footer';

// --- Updated Notice Data ---
const notices = [
  {
    date: '2025.06.06',
    category: '行政通達',
    title: '滋賀労働局、派遣先に「派遣料金の配慮義務」遵守を要請',
    link: 'https://www.rodo.co.jp/news/200608/',
  },
  {
    date: '2025.04.01',
    category: '法改正',
    title: '求人サイト等での「就職お祝い金」、原則禁止に（2025年4月1日施行）',
    link: 'https://keiyaku-watch.jp/media/hourei/oiwaikin-2025/',
  },
  {
    date: '2025.01.15',
    category: '法改正',
    title: '職業紹介事業者に「お祝い金・転職勧奨禁止」が許可条件化',
    link: 'https://jinzainews.net/26804711/',
  },
  {
    date: '2025.06.06',
    category: '行政発表',
    title: '2025年度 派遣先事業所数・派遣料金等の情報を公表（派遣法第23条5項）',
    link: 'https://belltech.jp/news/労働者派遣法に基づく情報提供について2025年度-2/',
  },
  {
    date: '2025.04.16',
    category: '法改正',
    title: '派遣労使協定方式で使用する賃金水準公表（2025年度）',
    link: 'https://www.kaito-sr.com/archives/202504～%E6%B4%BE%E9%81%A3%E3%81%AE%E5%8A%B4%E4%BD%BF%E5%8D%94%E5%AE%9A%EF%BC%9A%E4%BB%A4%E5%92%8C%EF%BC%97%E5%B9%B4%E5%BA%A6%E3%81%AE%E4%B8%80%E8%88%AC%E5%8A%B4%E5%83%8D%E8%80%85/',
  }
];

// --- Helper Components (for demonstration) ---
const InfoTitle = ({ backgroundImage, title, description, highlightText }) => (
  <div className="relative pt-20 h-80 md:h-96 text-white">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-green-800/60"></div>
    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
      <p className="text-sm md:text-base font-semibold tracking-widest uppercase">{description}</p>
      <h1 className="text-4xl md:text-6xl font-bold my-2">{title}</h1>
      <p className="text-lg md:text-xl">{highlightText}</p>
    </div>
  </div>
);

const AnimatedSection = ({ children }) => (
  <div>{children}</div>
);

// Helper function to get category styles, now with new categories
const getCategoryStyle = (category) => {
  switch (category) {
    case '行政通達':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    case '法改正':
      return 'bg-red-100 text-red-800 border-red-300';
    case '行政発表':
      return 'bg-purple-100 text-purple-800 border-purple-300';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300';
  }
};


export default function News() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(notices.length / itemsPerPage);

  const currentNotices = notices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <>
      <Helmet>
        <title>お知らせ | One Step株式会社</title>
        <meta name="description" content="One Step株式会社からのお知らせや法改正などの新着情報をご案内します。" />
        <meta name="keywords" content="お知らせ, 新着情報, 法改正, 行政通達, One Step株式会社" />
        <meta name="robots" content="index, follow" />
        <html lang="ja" />
      </Helmet>

      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1600&h=600&q=80"
        title="お知らせ"
        description="News & Updates"
        highlightText="最新情報をご案内します"
      />

      <div className="bg-gray-50 py-16 sm:py-24">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto px-4">
            
            <ul className="space-y-4">
              {currentNotices.map((notice, index) => (
                <li key={index} className="border-b border-gray-200 pb-6">
                  <a 
                    href={notice.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block transition-colors duration-300"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="flex items-center gap-4 flex-shrink-0 w-full sm:w-auto">
                        <time dateTime={notice.date.replace(/\./g, '-')} className="text-gray-500 font-medium w-24">
                          {notice.date}
                        </time>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getCategoryStyle(notice.category)}`}>
                          {notice.category}
                        </span>
                      </div>
                      <p className="text-base sm:text-lg font-medium text-gray-800 group-hover:text-blue-700 flex-grow">
                        {notice.title}
                      </p>
                      <span className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-auto pl-4">
                        <i className="fas fa-external-link-alt"></i>
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-6">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  前へ
                </button>
                <span className="text-sm text-gray-600 font-mono">
                  {currentPage} / {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  次へ
                </button>
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </>
  );
}
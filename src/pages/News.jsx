import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar/Navbar'; 
import Footer from '../components/shared/Footer';
import { newsData } from '../data/newsData';
import BackgroundText from '../components/shared/BackgroundText';

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
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const currentNotices = newsData.slice(
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
      <div className="bg-gray-50 py-16 sm:py-24 relative overflow-hidden">
        {/* BackgroundText added here */}
        <BackgroundText
        text="NEWS"
        top="top-1/4"
        className="text-gray-200/30 -translate-y-1/2 z-0"/>
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
                      <p className="text-base sm:text-lg font-medium text-gray-800 group-hover:text-brand-primary flex-grow">
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
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
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
      <h1 className="text-4xl md:text-6xl font-bold my-2">{title}</h1>
      {/* <p className="text-sm md:text-base font-semibold tracking-widest uppercase">{description}</p> */}
      <p className="text-lg md:text-xl">{highlightText}</p>
    </div>
  </div>
);

const AnimatedSection = ({ children }) => (
  <div>{children}</div>
);

// Helper function to get category styles, now with new categories
const getCategoryStyle = (category) => {
  // Use original Japanese category names for styling logic
  switch (category) {
    case '会社情報':
      return 'bg-gray-50 text-brand-primary border-brand-primary';
    case '行政情報':
      return 'bg-amber-50 text-amber-700 border-amber-200';
    case '法改正':
      return 'bg-red-50 text-red-700 border-red-200';
    case '行政発表':
      return 'bg-purple-50 text-purple-700 border-purple-200';
    default:
      return 'bg-gray-50 text-gray-700 border-gray-200';
  }
};

// New component for individual news items
const NewsItem = ({ notice, index }) => {
  const { t } = useTranslation();
  
  // Map Japanese category names to translation keys
  const getCategoryTranslation = (category) => {
    switch (category) {
      case '会社情報':
        return t('news.categories.companyInfo');
      case '行政情報':
        return t('news.categories.administrativeInfo');
      case '法改正':
        return t('news.categories.legalAmendment');
      case '行政発表':
        return t('news.categories.administrativeAnnouncement');
      default:
        return category;
    }
  };
  
  const content = (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-all duration-300">
      <div className="flex flex-col space-y-4">
        {/* Header with date and category */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <time 
              dateTime={notice.date.replace(/\./g, '-')} 
              className="text-gray-500 font-medium text-sm bg-gray-50 px-3 py-1 rounded-full"
            >
              {notice.date}
            </time>
            <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getCategoryStyle(notice.category)}`}>
              {getCategoryTranslation(notice.category)}
            </span>
          </div>
          <div className="flex items-center text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {notice.link && (
              <>
                <span className="text-xs mr-2">{t('news.viewDetails')}</span>
                <i className="fas fa-external-link-alt text-xs"></i>
              </>
            )}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-medium text-gray-800 group-hover:text-brand-primary transition-colors duration-300 leading-relaxed">
          {notice.title}
        </h3>
        
        {/* Summary or excerpt if available */}
        {notice.summary && (
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {notice.summary}
          </p>
        )}
        
        {/* Bottom border accent */}
        <div className="h-1 bg-gradient-to-r from-brand-primary to-brand-navyBright rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </div>
    </div>
  );

  return (
    <li className="group">
      {notice.link ? (
        <a 
          href={notice.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block transition-all duration-300 hover:shadow-md"
        >
          {content}
        </a>
      ) : (
        <div className="block transition-all duration-300 cursor-default opacity-80">
          {content}
        </div>
      )}
    </li>
  );
};

export default function News() {
  const { t } = useTranslation();
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
        <title>{t('news.meta.title')}</title>
        <meta name="description" content={t('news.meta.description')} />
        <meta name="keywords" content={t('news.meta.keywords')} />
        <meta name="robots" content="index, follow" />
        <html lang={t('news.meta.lang')} />
      </Helmet>

      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1600&h=600&q=80"
        title={t('news.infoTitle.title')}
        description={t('news.infoTitle.description')}
        highlightText={t('news.infoTitle.highlightText')}
      />
      
      <div className="bg-gray-50 py-16 sm:py-24 relative overflow-hidden">
        {/* BackgroundText added here */}
        <BackgroundText
          text="NEWS"
          top="top-1/6"
          className="text-gray-200/30 -translate-y-1/2 z-0"
        />
        
        <AnimatedSection>
          <div className="max-w-4xl mx-auto px-4">
            {/* Page description */}
            <div className="text-center mb-12">
              <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                {t('news.pageDescription')}
              </p>
            </div>
            
            {/* News items with enhanced styling */}
            <ul className="space-y-6">
              {currentNotices.map((notice, index) => (
                <NewsItem key={index} notice={notice} index={index} />
              ))}
            </ul>

            {/* Enhanced pagination */}
            {totalPages > 1 && (
              <div className="mt-16 flex justify-center items-center gap-6">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
                >
                  <i className="fas fa-chevron-left"></i>
                  {t('news.pagination.previous')}
                </button>
                
                <div className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm">
                  <span className="text-sm text-gray-600">
                    <span className="font-medium text-blue-600">{currentPage}</span>
                    <span className="mx-2 text-gray-400">{t('news.pagination.of')}</span>
                    <span className="font-medium">{totalPages}</span>
                  </span>
                </div>
                
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
                >
                  {t('news.pagination.next')}
                  <i className="fas fa-chevron-right"></i>
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
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { newsData } from '../../data/newsData';

const NewsAndNotices = () => {
  const { t } = useTranslation();
  const newsItems = newsData.map(item => ({
    date: item.date.replace(/\./g, t('newsAndNotices.year')).replace(/(\d{4})" + t('newsAndNotices.year') + "(\d{2})" + t('newsAndNotices.year') + "(\d{2})/, `$1${t('newsAndNotices.year')}$2${t('newsAndNotices.month')}$3${t('newsAndNotices.day')}`),
    title: item.title,
    category: t('newsAndNotices.category'),
    link: '/news',
  }));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10">
          {/* News Section */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 border-b-2 border-red-600 pb-2">
              {t('newsAndNotices.title')}
            </h2>
            <div className="space-y-6 max-h-80 overflow-y-scroll pr-2 scrollbar-always px-8">
            {newsItems.map((news) => (
                <motion.div
                  key={news.title}
                  className="border-b border-gray-200 pb-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-sm bg-brand-light -100 text-brand-primary px-2 py-1 rounded">{news.category}</span>
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>
                  <a href={news.link} 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="block text-lg font-medium mt-2 text-gray-800 hover:text-brand-primary transition-colors duration-300">
                      {news.title}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndNotices;

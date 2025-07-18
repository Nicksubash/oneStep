import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import FAQItem from '../components/shared/FAQItems';
import CompanyCTA from '../components/shared/CompanyCTA';
import InfoTitle from '../components/shared/InfoTitle';

export default function FAQPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('jobSeekers');

  const renderFAQItems = (list) =>
    list.map((item, index) => (
      <FAQItem key={index} question={item.question}>
        {item.answer}
      </FAQItem>
    ));

  return (
    <>
      <Navbar />
      <InfoTitle
          backgroundImage="https://images.pexels.com/photos/1887995/pexels-photo-1887995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        title={t('faq.infoTitle.title')}
        description={t('faq.infoTitle.description')}
        highlightText={t('faq.infoTitle.highlightText')}
      />
      <div className="bg-white">
        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Tabs */}
          <div className="flex justify-center border-b border-gray-200 mb-12">
            <button
              onClick={() => setActiveTab('jobSeekers')}
              className={`py-3 px-8 text-lg font-semibold ${
                activeTab === 'jobSeekers'
                  ? 'border-b-2 border-brand-primary text-brand-primary'
                  : 'text-gray-500 hover:text-brand-primary hover:font-bold'
              }`}
            >
              {t('faq.tabs.jobSeekers')}
            </button>
            <button
              onClick={() => setActiveTab('companies')}
              className={`py-3 px-8 text-lg font-semibold ${
                activeTab === 'companies'
                  ? 'border-b-2 border-brand-primary text-brand-primary'
                  : 'text-gray-500 hover:text-brand-primary hover:font-bold'
              }`}
            >
              {t('faq.tabs.companies')}
            </button>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {activeTab === 'jobSeekers'
              ? renderFAQItems(t('faq.faqData.jobSeekers', { returnObjects: true }))
              : renderFAQItems(t('faq.faqData.companies', { returnObjects: true }))}
          </div>

          {/* CTA */}
          {activeTab === 'jobSeekers' ? (
         <CompanyCTA
            showTag={true}
            tagText="cta.faq.jobSeekers.tagText"
            title="cta.faq.jobSeekers.title"
            description="cta.faq.jobSeekers.description"
            buttonText="cta.faq.jobSeekers.buttonText"
            buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSdh6uGf2hrGfCRTZUuTFYR6abVvsrEHH77TrBDEsXg2IPDSLA/viewform"
          />) : (
         <CompanyCTA
            showTag={true}
            tagText="cta.faq.companies.tagText"
            title="cta.faq.companies.title"
            description="cta.faq.companies.description"
            buttonText="cta.faq.companies.buttonText"
            buttonLink="/contact"
          />
          )}

        </div>
      </div>
      <Footer />
    </>
  );
}

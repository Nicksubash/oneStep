import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import FAQItem from '../components/shared/FAQItems';
import CompanyCTA from '../components/shared/CompanyCTA';
import faqData from '../data//faqData.json';
import InfoTitle from '../components/shared/InfoTitle';

export default function FAQPage() {
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
        title="よくあるご質問"
        description="FAQ"
        highlightText="「サービスに関するご不明点は、まずはこちらをご確認ください。」"
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
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              お仕事をお探しの方へ
            </button>
            <button
              onClick={() => setActiveTab('companies')}
              className={`py-3 px-8 text-lg font-semibold ${
                activeTab === 'companies'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              企業ご担当者様へ
            </button>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {activeTab === 'jobSeekers'
              ? renderFAQItems(faqData.faq.jobSeekers)
              : renderFAQItems(faqData.faq.companies)}
          </div>

          {/* CTA */}
          {activeTab === 'jobSeekers' ? (
         <CompanyCTA
            showTag={true}
            tagText="お仕事をお探しの方へ / For Job Seekers"
            title="就職・転職に関するご相談は"
            description="専門のキャリアコンサルタントが丁寧にサポートします。お気軽にご相談ください。"
            buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSdh6uGf2hrGfCRTZUuTFYR6abVvsrEHH77TrBDEsXg2IPDSLA/viewform"
          />) : (
         <CompanyCTA
            showTag={true}
            tagText="企業様向け / For Companies" 
            title="外国人採用・人材に関するご相談は"
            description="貴社に最適な人材提案を行います。まずはお気軽にお問い合わせください。"
            buttonLink="/company-contact"
            />
          )}

        </div>
      </div>
      <Footer />
    </>
  );
}

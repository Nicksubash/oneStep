import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import BackgroundText from '../components/shared/BackgroundText';

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const sectionTitleStyle = "text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4";
  const bodyTextStyle = "text-gray-800 leading-loose"; 

  return (
    <>
      <Navbar />

      <div className="relative bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Background Text */}
          <BackgroundText text="PRIVACY" top="top-0" />

          {/* --- Page Title --- */}
          <div className="relative z-10 text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {t('privacyPolicy.pageTitle.title')}
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              {t('privacyPolicy.pageTitle.subtitle')}
            </p>
          </div>

          {/* --- Main Content Area --- */}
          <div className="relative z-10 space-y-10">

            {/* Introduction */}
            <p className={bodyTextStyle}>
              {t('privacyPolicy.introduction')}
            </p>

            {/* Section 1 */}
            <div>
              <h2 className={sectionTitleStyle}>{t('privacyPolicy.sections.section1.title')}</h2>
              <p className={bodyTextStyle}>
                {t('privacyPolicy.sections.section1.content')}
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className={sectionTitleStyle}>{t('privacyPolicy.sections.section2.title')}</h2>
              <p className={`${bodyTextStyle} mb-4`}>
                {t('privacyPolicy.sections.section2.content')}
              </p>
              <ul className={`list-disc list-inside space-y-2 pl-4 ${bodyTextStyle}`}>
                {t('privacyPolicy.sections.section2.list', { returnObjects: true }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className={sectionTitleStyle}>{t('privacyPolicy.sections.section3.title')}</h2>
              <p className={`${bodyTextStyle} mb-4`}>
                {t('privacyPolicy.sections.section3.content')}
              </p>
              <ul className={`list-disc list-inside space-y-2 pl-4 ${bodyTextStyle}`}>
                {t('privacyPolicy.sections.section3.list', { returnObjects: true }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className={sectionTitleStyle}>{t('privacyPolicy.sections.section4.title')}</h2>
              <p className={bodyTextStyle}>
                {t('privacyPolicy.sections.section4.content')}
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className={sectionTitleStyle}>{t('privacyPolicy.sections.section5.title')}</h2>
              <p className={bodyTextStyle}>
                {t('privacyPolicy.sections.section5.content')}
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className={sectionTitleStyle}>{t('privacyPolicy.sections.section6.title')}</h2>
              <p className={bodyTextStyle}>
                {t('privacyPolicy.sections.section6.content')}
              </p>
            </div>

            {/* Section 7 - Contact */}
            <div>
              <h2 className={sectionTitleStyle}>{t('privacyPolicy.sections.section7.title')}</h2>
              <div className="mt-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className={`${bodyTextStyle} mb-4`}>
                  {t('privacyPolicy.sections.section7.content')}
                </p>
                <div className="space-y-1 text-gray-900">
                  <p><strong>{t('privacyPolicy.sections.section7.companyInfo.name')}</strong></p>
                  <p>{t('privacyPolicy.sections.section7.companyInfo.address')}</p>
                  <p>{t('privacyPolicy.sections.section7.companyInfo.phone')}</p>
                  <p>{t('privacyPolicy.sections.section7.companyInfo.email')}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

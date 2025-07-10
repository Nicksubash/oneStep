import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/shared/Footer";
import InfoTitle from "../components/shared/InfoTitle";
import BackgroundText from "../components/shared/BackgroundText";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=600&fit=crop&crop=center"
        title={t('privacy.infoTitle.title')}
        description={t('privacy.infoTitle.description')}
        highlightText={t('privacy.infoTitle.highlightText')}
      />

      <div className="relative max-w-4xl mx-auto px-4 py-10">
        <BackgroundText text="PRIVACY" top="top-2" />

        <h2 className="relative z-10 text-3xl font-bold mb-6">{t('privacy.mainTitle')}</h2>
        <p className="relative z-10 mb-6 leading-loose">
          {t('privacy.introduction')}
        </p>

        <h3 className="relative z-10 text-2xl font-semibold mb-3">{t('privacy.sections.section1.title')}</h3>
        <p className="mb-6">
          {t('privacy.sections.section1.content')}
        </p>

        <h3 className="relative z-10 text-2xl font-semibold mb-3">{t('privacy.sections.section2.title')}</h3>
        <p className="mb-2">{t('privacy.sections.section2.content1')}</p>
        <ol className="list-decimal pl-6 space-y-1 mb-6">
          {t('privacy.sections.section2.list', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
        <p className="mb-6">
          {t('privacy.sections.section2.content2')}
        </p>

        <h3 className="relative z-10 text-2xl font-semibold mb-3">{t('privacy.sections.section3.title')}</h3>
        <p className="mb-6">
          {t('privacy.sections.section3.content')}
        </p>

        <h3 className="relative z-10 text-2xl font-semibold mb-3">{t('privacy.sections.section4.title')}</h3>
        <p className="mb-6">
          {t('privacy.sections.section4.content')}
        </p>

        <h3 className="relative z-10 text-2xl font-semibold mb-3">{t('privacy.sections.section5.title')}</h3>
        <p className="mb-6">
          {t('privacy.sections.section5.content')}
        </p>

        <div className="text-right text-sm text-gray-500 mt-10">
          {t('privacy.signature.company')}<br />
          {t('privacy.signature.ceo')}
        </div>
      </div>

      <Footer />
    </>
  );
}

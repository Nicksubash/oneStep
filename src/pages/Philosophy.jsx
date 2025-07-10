import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';

export default function Philosophy() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1600&h=600&fit=crop&crop=center"
        title={t('philosophy.infoTitle.title')}
        description={t('philosophy.infoTitle.description')}
        highlightText={t('philosophy.infoTitle.highlightText')}
      />

      <main className="max-w-4xl mx-auto px-4 py-16 space-y-16 text-gray-800">

        {/* CEO Message */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-brand-primary">{t('philosophy.ceoMessage.title')}</h2>
          <blockquote className="text-lg leading-relaxed border-l-4 border-brand-primary pl-4 italic text-brand-navy">
            {t('philosophy.ceoMessage.quote')}
          </blockquote>
          <p className="mt-4 font-semibold text-brand-primary">{t('philosophy.ceoMessage.author')}</p>
        </section>

        {/* Mission */}
        <section>
          <h2 className="text-xl font-bold mb-2 text-brand-primary">{t('philosophy.mission.title')}</h2>
          <p className="text-brand-navyBright font-semibold mb-4">{t('philosophy.mission.subtitle')}</p>
          <p className="mb-2">
            {t('philosophy.mission.description1')}
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>{t('philosophy.mission.list.item1')}</li>
            <li>{t('philosophy.mission.list.item2')}</li>
          </ul>
          <p className="mt-2">{t('philosophy.mission.description2')}</p>
        </section>

        {/* Vision */}
        <section>
          <h2 className="text-xl font-bold mb-2 text-brand-primary">{t('philosophy.vision.title')}</h2>
          <p className="text-brand-navyBright font-semibold mb-4">{t('philosophy.vision.subtitle')}</p>
          <p>
            {t('philosophy.vision.description')}
          </p>
        </section>

        {/* Promises */}
        <section>
          <h2 className="text-xl font-bold mb-6 text-center text-brand-primary">{t('philosophy.promises.title')}</h2>
          <ul className="space-y-4 text-center">
            {t('philosophy.promises.list', { returnObjects: true }).map((promise, index) => (
              <li key={index}>{promise}</li>
            ))}
          </ul>
        </section>

        {/* Slogan */}
        <section className="text-center space-y-6">
          <h2 className="text-xl font-bold text-brand-primary">{t('philosophy.slogan.title')}</h2>
          <p 
            className="text-2xl text-brand-navy font-semibold"
            dangerouslySetInnerHTML={{ __html: t('philosophy.slogan.main') }}
          />
          <p>
            {t('philosophy.slogan.description1')}
          </p>
          <p className="font-semibold">
            {t('philosophy.slogan.description2')}
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}

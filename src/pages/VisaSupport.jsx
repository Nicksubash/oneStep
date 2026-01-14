import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';
import CompanyCTA from '../components/shared/CompanyCTA';
import AnimatedSection from '../components/shared/AnimatedSection';
import AnimatedFlowSection from '../components/shared/AnimatedFlowSection';
import StrengthsGrid from '../components/shared/StrengthsGrid';
import { CheckCircleIcon, DocumentCheckIcon, GlobeAltIcon, UserGroupIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/solid';
import BackgroundText from '../components/shared/BackgroundText';
import { Trans } from 'react-i18next';

export default function VisaSupport() {
  const { t } = useTranslation();
  
  const strengths = [
    {
      icon: <DocumentCheckIcon className="h-12 w-12 text-white" />,
      title: t('visaSupport.strengths.0.title'),
      description: t('visaSupport.strengths.0.description')
    },
    {
      icon: <UserGroupIcon className="h-12 w-12 text-white" />,
      title: t('visaSupport.strengths.1.title'),
      description: t('visaSupport.strengths.1.description')
    },
    {
      icon: <CheckCircleIcon className="h-12 w-12 text-white" />,
      title: t('visaSupport.strengths.2.title'),
      description: t('visaSupport.strengths.2.description')
    }
  ];

  const sswServices = t('visaSupport.sswServices.list', { returnObjects: true });
  const engineerServices = t('visaSupport.engineerServices.list', { returnObjects: true });

  return (
    <>
      <Helmet>
        <title>{t('visaSupport.meta.title')}</title>
        <meta name="description" content={t('visaSupport.meta.description')} />
        <meta name="keywords" content={t('visaSupport.meta.keywords')} />
        <meta name="robots" content="index, follow" />
        <html lang={t('visaSupport.meta.lang')} />
      </Helmet>

      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=600&fit=crop&crop=center"
        title={t('visaSupport.infoTitle.title')}
        description={t('visaSupport.infoTitle.description')}
        highlightText={t('visaSupport.infoTitle.highlightText')}
      />

      <div className="relative flex flex-col items-center justify-center py-20 px-4 text-center overflow-hidden">
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto space-y-24 text-gray-800 leading-relaxed">
            <BackgroundText 
              text="VISA" 
              top="top-0" 
              className="-translate-y-1/2 text-gray-300/30 z-0" />
            
            {/* Hero Section */}
            <AnimatedSection>
              <section className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection delay={200}>
                  <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt={t('visaSupport.heroImageAlt')}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </AnimatedSection>
              
                <AnimatedSection delay={400}>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {t('visaSupport.heroTitle')}
                    </h2>
                    <p className="text-gray-700 text-lg">
                      {t('visaSupport.heroDescription')}
                    </p>
                  </div>
                </AnimatedSection>
              </section>
            </AnimatedSection>

            {/* Strengths Grid */}
            <StrengthsGrid strengths={strengths} />

            {/* SSW Support Section */}
            <AnimatedSection>
              <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {t('visaSupport.sswServices.title')}
                  </h2>
                  <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                    {t('visaSupport.sswServices.description')}
                  </p>
                  <div className="mt-6 inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    {t('visaSupport.sswServices.certified')}
                  </div>
                </div>
                <ul className="grid md:grid-cols-2 gap-4 mt-8">
                  {sswServices.map((service, index) => (
                    <AnimatedSection key={index} delay={200 + index * 100}>
                      <li className="flex items-start hover:bg-white p-4 rounded-lg transition-colors duration-300">
                        <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    </AnimatedSection>
                  ))}
                </ul>
              </section>
            </AnimatedSection>

            {/* Engineer/Specialist Visa Support Section */}
            <AnimatedSection>
              <section className="bg-purple-50 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {t('visaSupport.engineerServices.title')}
                  </h2>
                  <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                    {t('visaSupport.engineerServices.description')}
                  </p>
                  <div className="mt-6 inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    {t('visaSupport.engineerServices.certified')}
                  </div>
                </div>
                <ul className="grid md:grid-cols-2 gap-4 mt-8">
                  {engineerServices.map((service, index) => (
                    <AnimatedSection key={index} delay={200 + index * 100}>
                      <li className="flex items-start hover:bg-white p-4 rounded-lg transition-colors duration-300">
                        <CheckCircleIcon className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    </AnimatedSection>
                  ))}
                </ul>
              </section>
            </AnimatedSection>

            {/* Ideal For Section */}
            <AnimatedSection>
              <section className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  {t('visaSupport.idealFor.title')}
                </h2>
                <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto">
                  {t('visaSupport.idealFor.description')}
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <CompanyCTA showTag={true} />
            </AnimatedSection>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}


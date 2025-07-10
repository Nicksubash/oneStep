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
import { CheckCircleIcon, UserGroupIcon, GlobeAltIcon, PuzzlePieceIcon } from '@heroicons/react/24/solid';
import BackgroundText from '../components/shared/BackgroundText';
import { Trans } from 'react-i18next';

export default function Service() {
  const { t } = useTranslation();
  const strengths = [
    {
      icon: <UserGroupIcon className="h-12 w-12 text-white" />,
      title: t('service.strengths.0.title'),
      description: t('service.strengths.0.description')
    },
    {
      icon: <GlobeAltIcon className="h-12 w-12 text-white" />,
      title: t('service.strengths.1.title'),
      description: t('service.strengths.1.description')
    },
    {
      icon: <PuzzlePieceIcon className="h-12 w-12 text-white" />,
      title: t('service.strengths.2.title'),
      description: t('service.strengths.2.description')
    }
  ];

  const jobTypes = [
    t('service.jobTypes.0'),
    t('service.jobTypes.1'),
    t('service.jobTypes.2'),
    t('service.jobTypes.3'),
    t('service.jobTypes.4'),
    t('service.jobTypes.5')
  ];

  const flowSteps = [
    t('service.flow.steps.0'),
    t('service.flow.steps.1'),
    t('service.flow.steps.2'),
    t('service.flow.steps.3')
  ];
  const flowDescriptions = [
    t('service.flow.descriptions.0'),
    t('service.flow.descriptions.1'),
    t('service.flow.descriptions.2'),
    t('service.flow.descriptions.3')
  ];

  const challenges = [
    t('service.challenges.0'),
    t('service.challenges.1'),
    t('service.challenges.2'),
    t('service.challenges.3'),
    t('service.challenges.4')
  ];

  return (
    <>
      <Helmet>
        <title>{t('service.meta.title')}</title>
        <meta
          name="description"
          content={t('service.meta.description')}
        />
        <meta
          name="keywords"
          content={t('service.meta.keywords')}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-domain.com/service" />
        <html lang={t('service.meta.lang')} />
      </Helmet>

      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=600&fit=crop&crop=center"
        title={t('service.infoTitle.title')}
        description={t('service.infoTitle.description')}
        highlightText={t('service.infoTitle.highlightText')}
      />

      <div className="relative flex flex-col items-center justify-center py-20 px-4 text-center overflow-hidden">
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto space-y-24 text-gray-800 leading-relaxed">
             <BackgroundText 
             text="SERVICE" 
             top="top-0" 
             className="-translate-y-1/2 text-gray-300/30 z-0" />
            <AnimatedSection>
              <section className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection delay={200}>
                  <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt={t('service.heroImageAlt')}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </AnimatedSection>
              
                <AnimatedSection delay={400}>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      <span className="text-brand-primary">{t('service.heroTitleHighlight')}</span>{t('service.heroTitleRest')}
                    </h2>
                    <p className="text-gray-700">
                      {t('service.heroDescription')}
                    </p>
                  </div>
                </AnimatedSection>
              </section>
            </AnimatedSection>

            <StrengthsGrid strengths={strengths} />

            <AnimatedFlowSection
              title={t('service.flow.title')}
              steps={flowSteps}
              descriptions={flowDescriptions}
              colorScheme="indigo"
            />

            <AnimatedSection>
              <section className="grid md:grid-cols-2 gap-16 items-start">
                <AnimatedSection delay={200}>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      <Trans
                        i18nKey="service.challengesTitle"
                        components={{ span: <span className="text-brand-primary" /> }}
                      />
                    </h2>
                    <ul className="space-y-4">
                      {challenges.map((item, index) => (
                        <AnimatedSection key={item} delay={400 + index * 100}>
                          <li className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        </AnimatedSection>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={400}>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      <Trans
                      i18nKey="service.jobTypesTitle" components={{span: <span className='text-brand-primary'/>}} />
                  
                      </h2>
                    <div className="flex flex-wrap gap-3">
                      {jobTypes.map((type, index) => (
                        <AnimatedSection key={type} delay={600 + index * 100}>
                          <span className="bg-gray-100 text-brand-primary  px-4 py-2 rounded-full font-semibold shadow-sm hover:bg-red-100 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                            {type}
                          </span>
                        </AnimatedSection>
                      ))}
                    </div>
                    <AnimatedSection delay={800}>
                      <div className="mt-8 w-full h-60 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                        <img
                          src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt={t('service.jobTypesImageAlt')}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </AnimatedSection>
                  </div>
                </AnimatedSection>
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
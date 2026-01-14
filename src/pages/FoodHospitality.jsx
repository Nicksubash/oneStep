import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';
import CompanyCTA from '../components/shared/CompanyCTA';
import AnimatedSection from '../components/shared/AnimatedSection';
import StrengthsGrid from '../components/shared/StrengthsGrid';
import { HeartIcon, UsersIcon, StarIcon, GlobeAltIcon } from '@heroicons/react/24/solid';
import BackgroundText from '../components/shared/BackgroundText';

export default function FoodHospitality() {
  const { t } = useTranslation();
  
  const strengths = [
    {
      icon: <HeartIcon className="h-12 w-12 text-white" />,
      title: t('foodHospitality.strengths.0.title'),
      description: t('foodHospitality.strengths.0.description')
    },
    {
      icon: <UsersIcon className="h-12 w-12 text-white" />,
      title: t('foodHospitality.strengths.1.title'),
      description: t('foodHospitality.strengths.1.description')
    },
    {
      icon: <StarIcon className="h-12 w-12 text-white" />,
      title: t('foodHospitality.strengths.2.title'),
      description: t('foodHospitality.strengths.2.description')
    }
  ];

  const restaurants = t('foodHospitality.restaurants', { returnObjects: true });

  return (
    <>
      <Helmet>
        <title>{t('foodHospitality.meta.title')}</title>
        <meta name="description" content={t('foodHospitality.meta.description')} />
        <meta name="keywords" content={t('foodHospitality.meta.keywords')} />
        <meta name="robots" content="index, follow" />
        <html lang={t('foodHospitality.meta.lang')} />
      </Helmet>

      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=600&fit=crop&crop=center"
        title={t('foodHospitality.infoTitle.title')}
        description={t('foodHospitality.infoTitle.description')}
        highlightText={t('foodHospitality.infoTitle.highlightText')}
      />

      <div className="relative flex flex-col items-center justify-center py-20 px-4 text-center overflow-hidden">
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto space-y-24 text-gray-800 leading-relaxed">
            <BackgroundText 
              text="HOSPITALITY" 
              top="top-0" 
              className="-translate-y-1/2 text-gray-300/30 z-0" />
            
            {/* Hero Section */}
            <AnimatedSection>
              <section className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection delay={200}>
                  <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt={t('foodHospitality.heroImageAlt')}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </AnimatedSection>
              
                <AnimatedSection delay={400}>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {t('foodHospitality.heroTitle')}
                    </h2>
                    <p className="text-gray-700 text-lg">
                      {t('foodHospitality.heroDescription')}
                    </p>
                  </div>
                </AnimatedSection>
              </section>
            </AnimatedSection>

            {/* Strengths Grid */}
            <StrengthsGrid strengths={strengths} />

            {/* Restaurants Section */}
            <AnimatedSection>
              <section>
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                  {t('foodHospitality.restaurantsTitle')}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {restaurants.map((restaurant, index) => (
                    <AnimatedSection key={index} delay={200 + index * 100}>
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="text-6xl mb-4">{restaurant.icon}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {restaurant.name}
                        </h3>
                        <p className="text-gray-700 mb-4">
                          {restaurant.description}
                        </p>
                        <div className="flex items-center justify-center text-sm text-gray-600">
                          <span className="bg-white px-4 py-2 rounded-full">
                            {restaurant.location}
                          </span>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
                <div className="mt-8 text-center text-gray-600 italic">
                  {t('foodHospitality.photosNote')}
                </div>
              </section>
            </AnimatedSection>

            {/* Mission Statement */}
            <AnimatedSection>
              <section className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  {t('foodHospitality.missionTitle')}
                </h2>
                <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto leading-relaxed">
                  {t('foodHospitality.missionDescription')}
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


import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';
import { AcademicCapIcon, DocumentTextIcon, BriefcaseIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import JobApplicationForm from '../components/shared/JobApplicationFrom';
import CompanyCTA from '../components/shared/CompanyCTA';
import AnimatedFlowSection from '../components/shared/AnimatedFlowSection';
import StrengthsGrid from '../components/shared/StrengthsGrid';
import BackgroundText from '../components/shared/BackgroundText';

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1, ...options }
    );
    const el = elementRef.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  return [elementRef, isVisible];
};

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function Student() {
  const { t } = useTranslation();
  
  const strengths = [
    {
      icon: <DocumentTextIcon className="h-16 w-16 text-white" />,
      title: t('student.strengths.0.title'),
      description: t('student.strengths.0.description'),
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <BriefcaseIcon className="h-16 w-16 text-white" />,
      title: t('student.strengths.1.title'),
      description: t('student.strengths.1.description'),
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-16 w-16 text-white" />,
      title: t('student.strengths.2.title'),
      description: t('student.strengths.2.description'),
      color: 'from-amber-500 to-purple-500'
    }
  ];

  const studentSteps = t('student.flow.steps', { returnObjects: true });
  const studentDescriptions = t('student.flow.descriptions', { returnObjects: true });
  
  const testimonials = t('student.testimonials', { returnObjects: true });

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .floating-cherry {
          animation: float 6s ease-in-out infinite;
        }
        .brush-stroke::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #3F51B5, transparent);
          border-radius: 2px;
        }
      `}</style>

      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen font-sans">
        <Navbar />

        {/* Floating cherry blossoms */}
        <div className="fixed top-20 left-10 text-4xl opacity-10 floating-cherry">🌸</div>
        <div className="fixed top-40 right-20 text-3xl opacity-10 floating-cherry" style={{animationDelay: '2s'}}>🌸</div>
        <div className="fixed bottom-40 left-20 text-5xl opacity-10 floating-cherry" style={{animationDelay: '4s'}}>🌸</div>
        <div className="fixed bottom-20 right-10 text-4xl opacity-10 floating-cherry" style={{animationDelay: '1s'}}>🌸</div>

        <div className="relative">
          <InfoTitle
            backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&h=600&fit=crop&crop=center"
            title={t('student.infoTitle.title')}
            description={t('student.infoTitle.description')}
            highlightText={t('student.infoTitle.highlightText')}
          />
        </div>

        <div className="bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto px-6 py-20 space-y-24 text-gray-800 leading-relaxed">

            {/* Support Section */}
            <AnimatedSection>
              <section className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt={t('student.heroImageAlt')}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-transparent to-transparent pointer-events-none"></div>
                </div>
                <BackgroundText 
                  text="SERVICE" 
                  top="top-0" 
                  className="-translate-y-1/2 text-gray-300/30 z-0" />
                <div className="space-y-6 relative">
                  <h2 className="text-4xl font-bold text-gray-900 relative brush-stroke">
                    {t('student.supportSection.title').split(t('student.supportSection.highlightText'))[0]}
                    <span className="text-brand-primary">{t('student.supportSection.highlightText')}</span>
                  </h2>
                  <div className="space-y-4 text-gray-700 text-lg">
                    {t('student.supportSection.concerns', { returnObjects: true }).map((concern, index) => (
                      <p key={index} className="flex items-start space-x-3">
                        <span className={`text-${index === 0 ? 'red' : index === 1 ? 'blue' : 'green'}-500 text-xl`}>
                          {index === 0 ? '📝' : index === 1 ? '😰' : '🔍'}
                        </span>
                        <span>{concern}</span>
                      </p>
                    ))}
                  </div>
                  <div className="p-6 rounded-xl border-l-4 border-red-500 bg-red-100 text-gray-800 font-medium">
                    {t('student.supportSection.message')}
                  </div>
                </div>
              </section>
            </AnimatedSection>

            {/* Feature Cards */}
            <StrengthsGrid strengths={strengths} />   

            <AnimatedFlowSection
            title={t('student.flow.title')}
            steps={studentSteps}
            descriptions={studentDescriptions}
            colorScheme="indigo"/>
                
            {/* Testimonials */}
            {/* <AnimatedSection delay={400}>
              <section className="space-y-12">
                <h2 className="text-4xl font-bold text-gray-900 text-center">利用者の声</h2>
                <div className="grid md:grid-cols-2 gap-10">
                  {testimonials.map(({ quote, name, origin, image, flag }, idx) => (
                    <figure
                      key={idx}
                      className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center space-y-4"
                    >
                      <blockquote className="text-lg text-gray-800 italic">"{quote}"</blockquote>
                      <figcaption className="flex items-center space-x-4">
                        <img
                          src={image}
                          alt={name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-red-500"
                          loading="lazy"
                        />
                        <div className="text-gray-700">
                          <p className="font-semibold">{name} <span>{flag}</span></p>
                          <p className="text-sm">{origin}</p>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            </AnimatedSection> */}

            {/* Job Application Form */}
            <AnimatedSection delay={600}>
              <section className="bg-purple-50 p-12 rounded-xl shadow-inner">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">{t('student.jobApplicationForm.title')}</h2>
                <JobApplicationForm />
              </section>
            </AnimatedSection>
          </div>
        </div>
        <CompanyCTA showTag={true}
         title="cta.student.title"
         description="cta.student.description"
         buttonText="cta.student.buttonText"
         buttonLink="/company-contact"
         />
        <Footer />
      </div>
    </>
  );
}

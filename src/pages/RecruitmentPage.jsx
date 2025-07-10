import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';
import AnimatedFlowSection from '../components/shared/AnimatedFlowSection';
import StrengthsGrid from '../components/shared/StrengthsGrid';
import CompanyCTA from '../components/shared/CompanyCTA';
import { HeartIcon, ArrowTrendingUpIcon, UsersIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import RishiImage from "../image/rishi.png"
import BackgroundText from '../components/shared/BackgroundText';
import AccessContactSection from '../components/shared/AccessContactSection';
import { useTranslation } from 'react-i18next';

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1, ...options });
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
      className={`transition-all duration-1000 ease-out ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};


export default function RecruitmentPage() {
  const { t } = useTranslation();

  const strengths = [
    { icon: <HeartIcon className="h-16 w-16 text-white" />, title: t('recruitment.strengths.0.title'), description: t('recruitment.strengths.0.description'), color: 'from-blue-500 to-cyan-500' },
    { icon: <ArrowTrendingUpIcon className="h-16 w-16 text-white" />, title: t('recruitment.strengths.1.title'), description: t('recruitment.strengths.1.description'), color: 'from-indigo-500 to-blue-400' },
    { icon: <UsersIcon className="h-16 w-16 text-white" />, title: t('recruitment.strengths.2.title'), description: t('recruitment.strengths.2.description'), color: 'from-teal-500 to-green-400' },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=&h=600&fit=crop&crop=center"
        title={t('recruitment.infoTitle.title')}
        description={t('recruitment.infoTitle.description')}
        highlightText={t('recruitment.infoTitle.highlightText')}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-brand-navy text-center mb-6">
            <span className="inline-block border-b-4 border-brand-primary pb-1">{t('recruitment.desiredTitle')}</span>
          </h2>
          <p className="text-center max-w-3xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed mb-12" 
             dangerouslySetInnerHTML={{ __html: t('recruitment.desiredText') }} />
          <StrengthsGrid strengths={strengths} />
        </AnimatedSection>
        
        {/* --- RE-INTEGRATED: Job Listings Section --- */}
        <AnimatedSection delay={400}>
          <section>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">{t('recruitment.requirementsTitle')}</h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md">
              <BackgroundText text={"Recruitment"}/>
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <th className="bg-gray-50 p-4 font-semibold w-1/3 md:w-1/4">{t('recruitment.requirementsTable.position')}</th>
                    <td className="p-4">{t('recruitment.requirementsTable.positionValue')}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="bg-gray-50 p-4 font-semibold">{t('recruitment.requirementsTable.jobDescription')}</th>
                    <td className="p-4">{t('recruitment.requirementsTable.jobDescriptionValue')}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="bg-gray-50 p-4 font-semibold">{t('recruitment.requirementsTable.salary')}</th>
                    <td className="p-4">{t('recruitment.requirementsTable.salaryValue')}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="bg-gray-50 p-4 font-semibold">{t('recruitment.requirementsTable.location')}</th>
                    <td className="p-4">{t('recruitment.requirementsTable.locationValue')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </AnimatedSection>
        
        <AnimatedFlowSection 
          title={t('recruitment.flowTitle')} 
          steps={t('recruitment.steps', { returnObjects: true })} 
          descriptions={t('recruitment.descriptions', { returnObjects: true })} 
          colorScheme="indigo" 
        />

               
        {/* --- RE-INTEGRATED: Employee Interview Section --- */}
        <AnimatedSection delay={200}>
            <section className="bg-blue-50 p-8 md:p-12 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">{t('recruitment.interviewTitle')}</h2>
            <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                <img
                    src={RishiImage}
                    alt="社員 田中 沙織" 
                    className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white"
                />
                </div>
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <h3 className="font-bold text-blue-800">{t('recruitment.interview.0.q')}</h3>
                        <p className="text-gray-700">{t('recruitment.interview.0.a')}</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-blue-800">{t('recruitment.interview.1.q')}</h3>
                        <p className="text-gray-700">{t('recruitment.interview.1.a')}</p>
                    </div>
                </div>
            </div>
            </section>
        </AnimatedSection>

        {/* --- Contact Information and Map Section --- */}
        <AnimatedSection delay={300}>
        <AccessContactSection
          title={t('contact.accessSection.title')}
          address={t('contact.accessSection.access.address')}
          phone={t('contact.accessSection.contact.phone')}
          email={t('contact.accessSection.contact.email')}
          fax={t('contact.accessSection.contact.fax')}
          note={[t('contact.accessSection.access.station1'), t('contact.accessSection.access.station2')]}
          mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.1234567890123!2d136.12345678901234!3d35.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA3JzI0LjQiTiAxMzbCsDA3JzI0LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
          contactLabel="contact.accessSection.contact.title"
          accessLabel="contact.accessSection.access.title"
        />
        </AnimatedSection>

        {/* --- ENHANCED: Dedicated CTA Section --- */}
        <CompanyCTA
          showTag={true}
          tagText="cta.recruitment.applicants.tagText"
          title="cta.recruitment.applicants.title"
          description="cta.recruitment.applicants.description"
          buttonText="cta.recruitment.applicants.buttonText"
          buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSdh6uGf2hrGfCRTZUuTFYR6abVvsrEHH77TrBDEsXg2IPDSLA/viewform"
        />
      </div>

      <Footer />
    </div>
  );
}
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/shared/Footer";
import CEOImage from "../image/ceo1.png";
import InfoTitle from "../components/shared/InfoTitle";
import BackgroundText from "../components/shared/BackgroundText";

const CEOInfo = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex-shrink-0 lg:w-1/3 text-center">
      <div className="relative overflow-hidden">
        <img
          src={CEOImage}
          alt="CEO Sudip Regmi"
          className="w-72 h-auto mx-auto transition-transform duration-700 hover:scale-105 object-cover  hover:grayscale-0"
        />
      </div>
      <h2 className="text-xl font-bold text-brand-navy mb-2">{t('ceoGreeting.ceoInfo.title')}</h2>
      <p className="text-2xl font-bold text-brand-navy mb-3">{t('ceoGreeting.ceoInfo.name')}</p>
      <p className="text-sm text-gray-700">
        {t('ceoGreeting.ceoInfo.nationality')}<br />
        {t('ceoGreeting.ceoInfo.languages')}
      </p>
    </div>
  );
};

const CEOMessage = ({ isVisible }) => {
  const { t } = useTranslation();
  
  return (
    <div
      className={`lg:w-2/3 mx-auto transform transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <div className="space-y-8 text-gray-800 leading-relaxed">
        <p className="text-lg text-left">
          {t('ceoGreeting.ceoMessage.part1')}
        </p>

        <p className="text-lg text-left">
          {t('ceoGreeting.ceoMessage.part2')}
        </p>

        <p className="text-lg text-left">
          {t('ceoGreeting.ceoMessage.part3')}
        </p>

        <div className="text-center pt-8 mt-8 border-t-2 border-brand-navy/20">
          <p 
            className="text-xl font-bold text-brand-navy leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('ceoGreeting.ceoMessage.part4') }}
          />
        </div>
      </div>
    </div>
  );
};

const CeoGreeting = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ceoSection = document.getElementById("ceo-section");
      if (ceoSection) {
        const rect = ceoSection.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <InfoTitle
        backgroundImage="https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title={t('ceoGreeting.infoTitle.title')}
        description={t('ceoGreeting.infoTitle.description')}
        highlightText={t('ceoGreeting.infoTitle.highlightText')}
      />
      <section
        id="ceo-section"
        className="relative w-full bg-cover bg-center bg-no-repeat py-2 lg:py-36 md:py-20 px-8 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-md" />
        <BackgroundText 
          text="CEO MESSAGE" 
          top="top-0" 
          className="translate-y-0 text-gray-600/30 z-0 " 
          />
         
        <div className="relative z-10 max-w-7xl mx-auto mt-10">
          

          <div className="backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start ">
        
            <CEOInfo />
            <CEOMessage isVisible={isVisible} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CeoGreeting;

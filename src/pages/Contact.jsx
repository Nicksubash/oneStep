import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/shared/Footer";
import SelectionCard from "../components/shared/SelectionCard";
import ContactModal from "../components/shared/ContactModal";
import { BuildingOffice2Icon, UserIcon } from '@heroicons/react/24/solid';
import InfoTitle from "../components/shared/InfoTitle";
import BackgroundText from "../components/shared/BackgroundText";
import AccessContactSection from "../components/shared/AccessContactSection";

export default function Contact() {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState(null);
  
  const closeModal = () => setSelectedType(null);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen relative">
      <Navbar />
      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1638262052640-82e94d64664a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title={t('contact.infoTitle.title')}
        description={t('contact.infoTitle.description')}
        highlightText={t('contact.infoTitle.highlightText')}
      />
      
      {/* Page Intro Section */}
      <div className="max-w-4xl mx-auto px-4 mt-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
          {t('contact.pageIntro.title')}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed ">
          {t('contact.pageIntro.description')}
        </p>
        <p className="text-sm text-brand-primary leading-relaxed mb-6">
          {t('contact.pageIntro.remark')}
        </p>
      </div>
      {/* Selection Cards Section with Background Text */}
      <div className="relative flex flex-col items-center justify-center py-20 px-4 text-center overflow-hidden">
        {/* Background Text positioned behind the cards */}
        <BackgroundText 
          text="CONTACT US" 
          top="top-1/4" 
          className="-translate-y-1/2 text-gray-200/30 z-0" 
        />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8">
          <SelectionCard
            onClick={() => setSelectedType("company")}
            icon={<BuildingOffice2Icon className="h-10 w-10 text-white"/>}
            title={t('contact.selectionCards.company.title')}
            description={t('contact.selectionCards.company.description')}
          />
          <SelectionCard
            onClick={() => setSelectedType("student")}
            icon={<UserIcon className="h-10 w-10 text-white"/>}
            title={t('contact.selectionCards.student.title')}
            description={t('contact.selectionCards.student.description')}
          />
        </div>
      </div>

      {/* Contact Information and Map Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 relative">
        {/* Background Text for Access Section */}
        <BackgroundText 
          text="ACCESS" 
          top="top-0" 
          className="text-blue-100/30 z-0" 
        />
        
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
      </div>

      {/* Modal Component */}
      <ContactModal 
        selectedType={selectedType} 
        onClose={closeModal} 
      />
      
      <Footer />
    </div>
  );
}
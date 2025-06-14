import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';
import CompanyContactForm from '../components/shared/CompanyContactForm';

export default function CompanyContact() {
  return (
    <>
      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=1600&h=600&fit=crop&crop=center"
        title="お問い合わせフォーム"
        description="Contact Form for Companies"
        highlightText="「信頼できるビジネスパートナーをお探しの企業様へ」"
      />

      <div className="max-w-3xl mx-auto px-6 py-20">
        <CompanyContactForm />
      </div>

      <Footer />
    </>
  );
}

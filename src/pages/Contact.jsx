import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/shared/Footer";
import SelectionCard from "../components/shared/SelectionCard";
import ContactModal from "../components/shared/ContactModal";
import { BuildingOffice2Icon, UserIcon } from '@heroicons/react/24/solid';
import InfoTitle from "../components/shared/InfoTitle";
import BackgroundText from "../components/shared/BackgroundText";

export default function Contact() {
  const [selectedType, setSelectedType] = useState(null);
  
  const closeModal = () => setSelectedType(null);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen relative">
      <Navbar />
      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1638262052640-82e94d64664a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="お問い合わせ"
        description="ご用件に応じて、お問い合わせ窓口をお選びください。"
        highlightText="担当者が迅速に対応させていただきます。"
      />
      
      {/* Page Intro Section */}
      <div className="max-w-4xl mx-auto px-4 mt-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
          お気軽にお問い合わせください
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          One Step株式会社は、求職者の皆様と企業様をつなぐ橋渡しを行っています。<br className="hidden sm:inline" />
          下記のオプションから、あなたの立場に合わせてお問い合わせください。
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
            title="企業ご担当者様"
            description="有料職業紹・採用に関するご相談はこちら"
          />
          <SelectionCard
            onClick={() => setSelectedType("student")}
            icon={<UserIcon className="h-10 w-10 text-white"/>}
            title="お仕事をお探しの方"
            description="お仕事の紹介・キャリア相談はこちら"
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
        
        <section className="bg-white-30 p-8 md:p-12 rounded-2xl shadow-lg relative z-10">
          <h2 className="text-4xl font-bold text-brand-primary text-center mb-12">アクセス・お問い合わせ</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-brand-navyBright mb-4">お問い合わせ</h3>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:052-829-1674" className="text-lg text-brand-navy hover:underline">052-829-1674</a>
                  </p>
                  <p className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9V4h12v5M6 14h12M6 10h12m-9 4v2m4-2v2m-7 3h10a2 2 0 002-2v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                    <a href="tel:052-829-1674" className="text-lg text-brand-navy hover:underline">052-829-1684</a>
                    <span className="text-sm text-gray-500 ml-1">(FAX)</span>
                  </p>
                  <p className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:onestep.recruit.japan@gmail.com" className="text-lg text-brand-navy hover:underline">info@onestep-group.co.jp</a>
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-brand-navyBright mb-4">アクセス</h3>
                <p className="text-brand-navy">
                  愛知県名古屋市南区観音町5-25 観音ビル3c<br />
                  <span className="text-sm text-brand-navy">※地下鉄桜通線「桜本町駅」から徒歩5分</span>
                </p>
              </div>
            </div>
            <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.1234567890123!2d136.12345678901234!3d35.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA3JzI0LjQiTiAxMzbCsDA3JzI0LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
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
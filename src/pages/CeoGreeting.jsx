import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/shared/Footer";
import InfoTitle from "../components/shared/InfoTitle";
import CEOImage from ".././image/ceo.jpg";

const CeoGreeting = () => {
  const [isVisible, setIsVisible] = useState(false);
  const photoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully visible
      }
    );

    if (photoRef.current) {
      observer.observe(photoRef.current);
    }

    return () => {
      if (photoRef.current) {
        observer.unobserve(photoRef.current);
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=600&fit=crop&crop=center"
        title="私たちの想い"
        description={`一人ひとりの挑戦が、未来を創る力になる。`}
        highlightText="CEOメッセージ"
      />

      <div className="max-w-5xl mx-auto p-4">
        {/* CEO Message Split Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
          {/* Left: Text */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">💬 CEOメッセージ（Sudip Regmi）</h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              「私自身もかつて日本での"最初の一歩"に苦労しました。<br />
              だからこそ、あなたの一歩に寄り添いたい。<br />
              安心して働ける未来を、私たちと一緒に切り拓きましょう。」
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              私たちOne Stepは、単なる雇用マッチングではなく、
              <span className="font-medium">"人生の支援者"</span>であることを目指しています。
              信頼と誠意をもって、一人ひとりに寄り添うことが、私たちの信念です。
            </p>
          </div>

          {/* Right: CEO Photo with Animation */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <div
              ref={photoRef}
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? 'opacity-100 transform translate-y-0 scale-100'
                  : 'opacity-0 transform translate-y-8 scale-95'
              }`}
            >
              <div className="relative group">
                <img
                  src={CEOImage}
                  alt="CEO Sudip Regmi"
                  className="w-64 h-100 object-cover rounded-xl  mx-auto lg:mx-0 transition-all duration-500 group-hover:shadow-lg group-hover:scale-105"
                />
              </div>
              <div className={`mt-4 transition-all duration-700 delay-300 ${
                isVisible
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-4'
              }`}>
                <p className="text-base font-semibold text-gray-900">代表取締役</p>
                <p className="text-lg font-bold text-gray-800">レグミ・スディプ</p>
                <p className="text-sm text-gray-500">Chief Executive Officer (CEO)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CeoGreeting;
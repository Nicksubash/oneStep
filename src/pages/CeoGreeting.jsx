import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/shared/Footer";
import CEOImage from "../image/ceo.png";
import InfoTitle from "../components/shared/InfoTitle";
import BackgroundText from "../components/shared/BackgroundText";

const CEOInfo = () => (
  <div className="flex-shrink-0 lg:w-1/3 text-center">
    <div className="relative overflow-hidden">
      <img
        src={CEOImage}
        alt="CEO Sudip Regmi"
        className="w-72 h-auto mx-auto transition-transform duration-700 hover:scale-105 object-cover grayscale hover:grayscale-0"
      />
    </div>
    <h2 className="text-xl font-bold text-brand-navy mb-2">代表取締役</h2>
    <p className="text-2xl font-bold text-brand-navy mb-3">レグミ・スディプ</p>
    <p className="text-sm text-gray-700">
      🇯🇵 日本国籍（ネパール出身）<br />
      🗣️ 日本語・英語・ネパール語・ヒンディー語
    </p>
  </div>
);

const CEOMessage = ({ isVisible }) => (
  <div
    className={`lg:w-2/3 mx-auto transform transition-all duration-1000 ease-out ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
    }`}
  >
    <div className="space-y-8 text-gray-800 leading-relaxed">
      <p className="text-lg text-left">
        私はかつて、外国人として日本に来日し、<span className="font-semibold text-brand-navy">言語の壁や文化の違い、仕事探しにおけるさまざまな困難</span>を経験してまいりました。
        <br />
        日本語の習得、就職活動、そして職場での適応——それらすべてが簡単な道のりではありませんでしたが、
        <span className="font-semibold text-brand-navy">その一つひとつを乗り越えたことで、今の自分があります。</span>
      </p>

      <p className="text-lg text-left">
        だからこそ、これから日本で働こうとする方々の<span className="font-semibold text-brand-navy">不安や期待に、誰よりも共感し、寄り添う</span>ことができると自負しています。
      </p>

      <p className="text-lg text-left">
        また、企業の皆さまにとっても、外国人採用にあたっては<span className="font-semibold text-brand-navy">言語や文化、制度への理解不足</span>など、
        さまざまな不安や課題があるかと思います。
        <br />
        私たち <span className="font-bold text-brand-navy text-xl">One Step株式会社</span> は、
        そうした<span className="italic text-gray-700 font-medium">"見えない壁"や"すれ違い"</span>を丁寧に埋め、
        <span className="font-semibold text-brand-navy">信頼と安心のあるマッチング</span>を実現することを使命としています。
      </p>

      <p className="text-lg text-left">
        すでに日本社会に順応している立場として、私は単なる人材紹介にとどまらず、
        新卒者や初めて日本で働く方々に対しても、
        <br />
        <span className="font-semibold text-brand-navy">「就職後の定着」や「長期的な活躍」までを見据えた、きめ細やかな支援</span>を提供してまいります。
      </p>

      <div className="text-center pt-8 mt-8 border-t-2 border-brand-navy/20">
        <p className="text-xl font-bold text-brand-navy leading-relaxed">
          皆さま一人ひとりの<span className="text-red-600 text-2xl font-extrabold">"大切な一歩"</span>を、心を込めて応援いたします。
        </p>
      </div>
    </div>
  </div>
);

const CeoGreeting = () => {
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
        title="代表メッセージ"
        description="One Step株式会社は、国際人材と日本企業を結ぶ架け橋。言語教育と生活サポートを通じて、外国人が安心して働き、暮らせる未来を創ります。"
        highlightText="一人ひとりの'一歩'を、心から応援します。"
      />
      <section
        id="ceo-section"
        className="relative w-full bg-cover bg-center bg-no-repeat py-2 lg:py-36 md:py-20 px-8 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
        <BackgroundText 
          text="CEO MESSAGE" 
          top="top-0" 
          className="translate-y-0 text-gray-200/30 z-0 " 
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

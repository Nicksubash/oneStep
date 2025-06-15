import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/shared/Footer";
import CEOImage from "../image/ceo.png";
import InfoTitle from "../components/shared/InfoTitle";
import BackgroundText from "../components/shared/BackgroundText";

const CeoGreeting = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const ceoSection = document.getElementById("ceo-section");
      if (ceoSection) {
        const rect = ceoSection.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInViewport);
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
        description="One Step株式会社は、国際人材と日本企業を結ぶ架け橋。\n言語教育と生活サポートを通じて、外国人が安心して働き、暮らせる未来を創ります。"
        highlightText="一人ひとりの'一歩'を、心から応援します。"
      />

<section
  id="ceo-section"
  className="relative w-full bg-cover bg-center bg-no-repeat py-16 lg:py-24 px-6 overflow-hidden"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

  {/* Background Text */}
  <BackgroundText text="CEO MESSAGE" />

  <div className="relative z-10 max-w-7xl mx-auto">
    {/* Unified container for image + message */}
    <div className="backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

      {/* CEO Image + info */}
      <div className="flex-shrink-0 lg:w-1/3 text-center">
        <div className="relative overflow-hidden ">
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

      {/* CEO Message */}
      <div
        className={`lg:w-2/3 transform transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
          💬 代表メッセージ
        </h3>

        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p>
            私は、かつて外国人として日本に来て、学校での学びや仕事探し、就職後の適応など、
            多くの困難と努力を通じて成長してきました。だからこそ、今まさに「これから日本で働きたい」と願う方々の気持ちが、誰よりもわかります。
          </p>
          <p>
            求人者（企業）にとっても、外国人の雇用にあたっての不安や疑問はたくさんあると思います。
            その"すきま"を丁寧に埋め、双方にとって安心できる出会いを生み出すことが、私たちOne Stepの使命です。
          </p>

          <h4 className="text-lg font-semibold text-gray-900 mt-8 mb-3">🎯 私たちの取り組み</h4>
          <p>
            日本の社会・文化にすでに適応している立場として、新卒の方や、日本で新たな生活を始める外国人の方々にも、
            「単なる仕事の紹介」だけでなく、「その後の定着や活躍」までを見据えた総合的な支援を行ってまいります。
          </p>

          <h4 className="text-lg font-semibold text-gray-900 mt-8 mb-3">🎓 経歴・バックグラウンド</h4>
          <p className="text-gray-700">
            14年前にネパールから来日。日本語学校・専門学校を経て、愛知文教大学を卒業。
            その後、日本企業での就業を通じて日本社会・ビジネスマナー・文化を深く理解。
            現在は日本国籍を取得し、日本と外国人の"間"をつなぐ立場として、求職者と企業の双方を支援しています。
          </p>

          <div className="text-center pt-6 border-t border-gray-200">
            <p className="text-lg font-medium text-brand-navy ">
              一人ひとりの"一歩"を、心から応援します。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </>
  );
};

export default CeoGreeting;
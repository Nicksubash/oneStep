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
    className={`lg:w-2/3 transform transition-all duration-1000 ease-out ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`}
  >
    <div className="space-y-6 text-gray-800 leading-relaxed">
      <h4 className="text-lg font-semibold text-gray-900 mt-8 mb-3">🎓【学歴・経歴】</h4>
      <p>
        14年前にネパールより来日。日本語学校・専門学校を経て、愛知文教大学を卒業。
        <br />
        その後、日本企業での就業経験を通じて、日本社会やビジネスマナー、文化を深く理解。
        <br />
        現在は日本国籍を取得し、「日本と外国人をつなぐ架け橋」となることを目指し、求職者と企業双方の支援に尽力している。
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mt-8 mb-3">💬【代表メッセージ】</h4>
      <p>
        私はかつて、外国人として日本に来日し、言語の壁や文化の違い、仕事探しにおけるさまざまな困難を経験してまいりました。
        <br />
        日本語の習得、就職活動、そして職場での適応——それらすべてが簡単な道のりではありませんでしたが、
        その一つひとつを乗り越えたことで、今の自分があります。
      </p>
      <p>
        だからこそ、これから日本で働こうとする方々の不安や期待に、誰よりも共感し、寄り添うことができると自負しています。
      </p>
      <p>
        また、企業の皆さまにとっても、外国人採用にあたっては言語や文化、制度への理解不足など、
        さまざまな不安や課題があるかと思います。
        <br />
        私たちOne Step株式会社は、そうした“見えない壁”や“すれ違い”を丁寧に埋め、
        信頼と安心のあるマッチングを実現することを使命としています。
      </p>
      <p>
        すでに日本社会に順応している立場として、私は単なる人材紹介にとどまらず、
        新卒者や初めて日本で働く方々に対しても、
        <br />
        「就職後の定着」や「長期的な活躍」までを見据えた、きめ細やかな支援を提供してまいります。
      </p>

      <div className="text-center pt-6 border-t border-gray-200">
        <p className="text-lg font-medium text-brand-navy">
          皆さま一人ひとりの“大切な一歩”を、心を込めて応援いたします。
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
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
        <BackgroundText text="CEO MESSAGE" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
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

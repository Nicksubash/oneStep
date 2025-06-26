import React from 'react';

export default function TeamMemberCard({ image, nameJp, nameEn, titleJp, aboutJp, index = 0 }) {
  const isEven = index % 2 === 0;

  // Format the about text with proper highlighting for key points
  const formatAboutText = (text) => {
    if (index === 1) { // Sailendra's card - second member
      return (
        <div className="space-y-4">
          <p>
            <span className="font-semibold text-brand-navy">14年前に来日</span>し、日本語学校・専門学校を経て、愛知文教大学を卒業しました。その後、企業に就職し、日本の社会や文化に深く触れる中で、日本への愛着が強まり、ついには<span className="font-semibold text-brand-navy">日本国籍を取得</span>しました。
          </p>
          <p>
            <span className="font-semibold text-brand-navy">2023年からは自身のビジネスを開始</span>し、企業での就労や起業の経験を通じて、「人材不足」や「外国人の就職の難しさ」といった課題を肌で感じました。
          </p>
          <p>
            そうした課題に対して、自分が<span className="italic text-gray-700 font-medium">"橋渡し"の存在</span>になれたら――という想いから、<span className="font-bold text-brand-navy">「One Step株式会社」の設立</span>に至りました。
          </p>
          <p className="pt-2 border-t border-gray-200">
            <span className="font-semibold text-brand-navy">日本語・ネパール語・英語・ヒンディー語の4か国語を操り</span>、多様な人材と企業をつなぐグローバルなサポートを提供します。
          </p>
        </div>
      );
    } else {
      // For the first member (Rishi), apply similar formatting
      return (
        <div className="space-y-4">
          <p>
            私は<span className="font-semibold text-brand-navy">ネパール出身</span>で、現在は日本の<span className="font-semibold text-brand-navy">北海道大学にて博士課程</span>に在籍し、野生動物保全および肉食動物の生態に関する研究を行っています。
          </p>
          <p>
            これまで<span className="font-semibold text-brand-navy">10年以上にわたって、野外調査、国際共同研究、学術交流</span>に従事しており、その経験から得たグローバルな視点を、人材育成や異文化間の連携に活かしています。
          </p>
          <p>
            <span className="font-bold text-brand-navy">One Step株式会社の共同創業者 兼 グローバルコラボレーションディレクター</span>として、海外からの優秀な人材と、日本国内の信頼できる企業との橋渡しを担っています。
          </p>
          <p className="pt-2 border-t border-gray-200">
            私たちは単に人材を紹介するのではなく、<span className="italic text-gray-700 font-medium">国境や文化を超えた「信頼と成長のつながり」</span>を築くことを使命としています。
          </p>
        </div>
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div
        className={`flex flex-col md:flex-row ${
          isEven ? 'md:flex-row' : 'md:flex-row-reverse'
        } items-start md:gap-16 gap-8`}
      >
        {/* Profile Image */}
        <div className="w-full md:w-80 md:h-80 flex-shrink-0 mx-auto md:mx-0">
          <div className="w-full h-full overflow-hidden rounded-xl shadow-md">
            <img
              src={image}
              alt={nameJp}
              className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Name */}
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-2 text-left">
            {nameJp}
          </h2>

          {/* English Name */}
          <p className="text-lg md:text-xl text-brand-navyBright mb-4 font-light text-left">
            {nameEn}
          </p>

          {/* Title */}
          <h3 className="text-base md:text-lg text-brand-navy mb-8 font-medium text-left">
            {titleJp}
          </h3>

          {/* Profile Section */}
          <div className="text-left">
            <h4 className="text-blue-600 font-bold text-lg mb-6 tracking-wide">
              PROFILE
            </h4>
            <div className="text-gray-800 leading-relaxed text-base md:text-lg max-w-3xl">
              {formatAboutText(aboutJp)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
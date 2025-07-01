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
          <p>私は<span className="font-semibold text-brand-navy">ネパール出身</span>で、14年前に来日し、日本語学校・専門学校を経て、
          <span className="font-semibold text-brand-navy">愛知文教大学を卒業</span>いたしました。
          </p>
          <p>
            その後、日本企業での勤務を通じて、
            <span className="font-semibold text-brand-navy">日本の社会・文化・ビジネスマナー</span>を深く学びました。
            現在は日本国籍を取得し、日本での生活基盤を築いております。
            </p>
            <p>
              <span className="font-bold text-brand-navy">One Step株式会社の代表取締役</span>として、
              外国人の就職支援と、企業の採用活動をサポートしております。私自身の経験を活かし、言語や文化の違いによる不安や課題に丁寧に寄り添いながら支援を行っています。
            </p>
          <p className="pt-2 border-t border-gray-200">
            私たちは単なる人材紹介にとどまらず、
            <span className="italic text-gray-700 font-medium">
              「信頼に基づく出会い」と「長期的な活躍」を見据えたサポート
            </span>を大切にしています。
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
            <div className="text-gray-800 leading-relaxed text-base md:text-lg max-w-3xl">
              {formatAboutText(aboutJp)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
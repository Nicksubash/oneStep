import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';
import TeamGrid from '../components/TeamMembers/TeamGrid';
import RishiImage from '../image/rishi.png';
import Member2 from '../image/sailendra.png';

const Teams = () => {
  const teamMembers = [
    {
      id: 1,
      image: RishiImage,
      nameJp: "リシ バラル",
      nameEn: "Rishi Baral",
      titleJp: "共同創業者 兼 グローバルコラボレーションディレクター",
      aboutJp: `私はネパール出身で、現在は日本の北海道大学にて博士課程に在籍し、野生動物保全および肉食動物の生態に関する研究を行っています。
      これまで10年以上にわたって、野外調査、国際共同研究、学術交流に従事しており、その経験から得たグローバルな視点を、人材育成や異文化間の連携に活かしています。
      One Step株式会社の共同創業者 兼 グローバルコラボレーションディレクターとして、海外からの優秀な人材と、日本国内の信頼できる企業との橋渡しを担っています。
      私たちは単に人材を紹介するのではなく、国境や文化を超えた「信頼と成長のつながり」を築くことを使命としています。`
    },
    {
      id: 2,
      image: Member2,
      nameJp: "サイレンドラ・ラナバト",
      nameEn: "Sailendra Ranabhat",
      titleJp: "取締役 / Director", 
      aboutJp: `14年前に来日し、日本語学校・専門学校を経て、愛知文教大学を卒業しました。その後、企業に就職し、日本の社会や文化に深く触れる中で、日本への愛着が強まり、ついには日本国籍を取得しました。
      2023年からは自身のビジネスを開始し、企業での就労や起業の経験を通じて、「人材不足」や「外国人の就職の難しさ」といった課題を肌で感じました。
      そうした課題に対して、自分が“橋渡し”の存在になれたら――という想いから、「One Step株式会社」の設立に至りました。

      日本語・ネパール語・英語・ヒンディー語の4か国語を操り、多様な人材と企業をつなぐグローバルなサポートを提供します。`
    }
  ];

  return (
    <>
      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=1600&h=600&fit=crop&crop=center"
        title="私たちのチーム"
        description="Meet Our Team"
        highlightText="  私たちは外国籍のメンバーで構成されたチームですが、長年にわたり日本に暮らし、日々の生活や仕事を通して日本の文化や価値観を深く理解し、尊重しています。中には日本国籍を取得したメンバーもおり、日本社会への貢献と調和を大切にしています。
    One Step株式会社は、単なる「外国人による企業」ではなく、「日本を理解し、日本とともに成長するパートナー」として、日本企業の皆さまに信頼していただける存在でありたいと考えています。"
      />
      

      <div className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <TeamGrid members={teamMembers} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Teams;
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';
import TeamGrid from '../components/TeamMembers/TeamGrid';
import RishiImage from '../image/rishi.png';

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
      image: RishiImage,
      nameJp: "サイレンドラ・ラナバト",
      nameEn: "Sailendra Ranabhat", 
      titleJp: "人事戦略ディレクター",
      aboutJp: `東京大学経済学部卒業後、大手人材会社にて10年間、国際人材の採用支援に従事してきました。特にアジア圏からの優秀な人材の日本企業への定着支援において豊富な経験を持ちます。
      人事戦略ディレクターとして、企業の組織文化と海外人材のマッチングを重視し、単なる配置ではなく、長期的なキャリア形成を見据えたサポートを提供しています。
      異文化コミュニケーションの専門知識を活かし、企業と人材の架け橋となることを使命としています。`
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      nameJp: "佐藤 健太郎",
      nameEn: "Kentaro Sato",
      titleJp: "テクニカルリクルートメント・マネージャー", 
      aboutJp: `慶應義塾大学理工学部情報工学科卒業。外資系IT企業でソフトウェアエンジニアとして5年間の実務経験を積んだ後、人材業界に転身しました。
      技術職出身の強みを活かし、エンジニア採用の専門家として活動しています。
      AI、データサイエンス、クラウドコンピューティングなど、最新技術分野における人材ニーズを的確に把握し、技術職の採用において高い成功率を誇ります。
      技術者の視点から、スキルマッチングの精度向上に取り組んでいます。`
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
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';
import TeamGrid from '../components/TeamMembers/TeamGrid';
import Member1 from '../image/ceoTeams.png';
import Member2 from '../image/sailendra.png';

const Teams = () => {
  const teamMembers = [
    {
      id: 1,
      image: Member1,
      nameJp: "レグミ・スディプ",
      nameEn: "Regmi Sudip",
      titleJp: "取締役代表",
      aboutJp: `14年前にネパールより来日し、日本語学校・専門学校を経て愛知文教大学を卒業しました。
      その後、日本企業での勤務を通じて、日本社会やビジネスマナー、文化を深く理解しました。
      現在は日本国籍を取得し、「日本と外国人をつなぐ架け橋」となることを使命に、求職者と企業の双方を支援しています。
      私自身もかつて外国人として日本に来日し、言語の壁や文化の違い、仕事探しにおいて多くの困難を経験しました。
      そうした経験を乗り越えてきたからこそ、日本で働こうとする皆さまの不安や期待に寄り添い、心からサポートできると自負しています。
      また、外国人採用における課題を抱える企業の皆さまに対しても、言語や文化、制度の違いによる“すれ違い”を丁寧に埋め、信頼あるマッチングを提供いたします。
      私は単なる有料職業紹介にとどまらず、就職後の定着や長期的な活躍を見据えたサポートを大切にし、一人ひとりの“大切な一歩”を心を込めて応援しています。`
    },    
    {
      id: 2,
      image: Member2,
      nameJp: "ラナバト・サイレンドラ",
      nameEn: "Ranabhat Sailendra",
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
        highlightText="私たちは外国籍のメンバーで構成されたチームですが、長年にわたり日本に暮らし、日々の生活や仕事を通して日本の文化や価値観を深く理解し、尊重しています。中には日本国籍を取得したメンバーもおり、日本社会への貢献と調和を大切にしています。
        One Step株式会社は、単なる「外国人による企業」ではなく、「日本を理解し、日本とともに成長するパートナー」として、日本企業の皆さまに信頼していただける存在でありたいと考えています。"
        highlightAlign='left'
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
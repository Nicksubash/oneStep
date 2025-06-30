import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';
import CompanyCTA from '../components/shared/CompanyCTA';
import AnimatedSection from '../components/shared/AnimatedSection';
import AnimatedFlowSection from '../components/shared/AnimatedFlowSection';
import StrengthsGrid from '../components/shared/StrengthsGrid';
import { CheckCircleIcon, UserGroupIcon, GlobeAltIcon, PuzzlePieceIcon } from '@heroicons/react/24/solid';
import BackgroundText from '../components/shared/BackgroundText';

export default function Service() {
  const strengths = [
    {
      icon: <UserGroupIcon className="h-12 w-12 text-white" />,
      title: '多様な人材ネットワーク',
      description: '国籍を問わない豊富な人材ネットワークを活かし、貴社のニーズに最適な人材をご紹介します。'
    },
    {
      icon: <GlobeAltIcon className="h-12 w-12 text-white" />,
      title: 'グローバル基準のサポート',
      description: '日本文化やビジネスマナーに精通した外国人スタッフが多数在籍。異文化コミュニケーションも円滑です。'
    },
    {
      icon: <PuzzlePieceIcon className="h-12 w-12 text-white" />,
      title: '柔軟なソリューション',
      description: '正社員、契約社員、専門職のご紹介まで、採用課題に合わせた柔軟なプランをご提供します。'
    }
  ];

  const jobTypes = ['製造業・物流業', '事務・CS', 'IT・エンジニア', '販売・接客', '通訳・翻訳', '介護・医療'];

  const flowSteps = ["お問い合わせ", "ヒアリング・ご提案", "ご契約・人選", "就業開始"];
  const flowDescriptions = [
    "Webフォームまたはお電話にて、お気軽にご相談ください。",
    "担当者が業務内容やご要望を伺い、最適な人材とご紹介方法をご提案します。",
    "ご契約後、ご希望にマッチした候補者を厳選しご紹介します。",
    "内定・就業後も定期的なフォローを実施し、継続的なサポートを行います。"
  ];

  return (
    <>
      <Helmet>
        <title>有料職業紹介サービス | One Step株式会社</title>
        <meta
          name="description"
          content="One Step株式会社は、有料職業紹介を通じて、優秀な外国人材と日本企業をつなぐ信頼のパートナーです。"
        />
        <meta
          name="keywords"
          content="有料職業紹介, 外国人材紹介, グローバル人材, 日本就職, 人材紹介サービス, 国際採用支援"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-domain.com/service" />
        <html lang="ja" />
      </Helmet>

      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=600&fit=crop&crop=center"
        title="有料職業紹介サービス"
        description="Paid Employment Placement Service"
        highlightText="「人」と「人」をつなぐ有料サービス"
      />

      <div className="relative flex flex-col items-center justify-center py-20 px-4 text-center overflow-hidden">
        
        
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto space-y-24 text-gray-800 leading-relaxed">
             <BackgroundText 
             text="SERVICE" 
             top="top-0" 
             className="-translate-y-1/2 text-gray-300/30 z-0" />
            <AnimatedSection>
              <section className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection delay={200}>
                  <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="ビジネスミーティング"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </AnimatedSection>
              
                <AnimatedSection delay={400}>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      <span className="text-brand-primary">有料職業紹介</span>とは？
                    </h2>
                    <p className="text-gray-700">
                      有料職業紹介とは、求職者と求人企業の間を仲介し、最適なマッチングを実現するサービスです。
                      One Stepでは、日本で働きたい外国人材と、グローバル人材を求める企業様をつなぐ橋渡し役として、
                      信頼と実績をもとに高品質な紹介を行っています。
                    </p>
                  </div>
                </AnimatedSection>
              </section>
            </AnimatedSection>

            <StrengthsGrid strengths={strengths} />

            <AnimatedFlowSection
              title="ご紹介の流れ"
              steps={flowSteps}
              descriptions={flowDescriptions}
              colorScheme="indigo"
            />

            <AnimatedSection>
              <section className="grid md:grid-cols-2 gap-16 items-start">
                <AnimatedSection delay={200}>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">こんな<span className="text-indigo-600">課題</span>に対応します</h2>
                    <ul className="space-y-4">
                      {[
                        "即戦力となる外国人材を採用したい",
                        "グローバルな視点を持つ人材が欲しい",
                        "専門スキルを持った候補者が見つからない",
                        "採用活動にかかるコストを抑えたい",
                        "長期的に働ける信頼できる人材が必要"
                      ].map((item, index) => (
                        <AnimatedSection key={item} delay={400 + index * 100}>
                          <li className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        </AnimatedSection>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={400}>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">対応<span className="text-indigo-600">職種・業種</span>例</h2>
                    <div className="flex flex-wrap gap-3">
                      {jobTypes.map((type, index) => (
                        <AnimatedSection key={type} delay={600 + index * 100}>
                          <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-semibold shadow-sm hover:bg-indigo-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                            {type}
                          </span>
                        </AnimatedSection>
                      ))}
                    </div>
                    <AnimatedSection delay={800}>
                      <div className="mt-8 w-full h-60 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                        <img
                          src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="多様な職場"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </AnimatedSection>
                  </div>
                </AnimatedSection>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <CompanyCTA showTag={true} />
            </AnimatedSection>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
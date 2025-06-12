import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';
import CompanyCTA from '../components/shared/CompanyCTA';
import AnimatedSection from '../components/shared/AnimatedSection';
import AnimatedFlowSection from '../components/shared/AnimatedFlowSection';
import StrengthsGrid from '../components/shared/StrengthsGrid';
import {CheckCircleIcon,UserGroupIcon,GlobeAltIcon,PuzzlePieceIcon} from '@heroicons/react/24/solid';

export default function Service() {
  const strengths = [
    {
      icon: <UserGroupIcon className="h-12 w-12 text-indigo-500" />,
      title: '多様な人材ネットワーク',
      description: '国籍を問わない豊富な人材ネットワークを活かし、貴社のニーズに最適な人材を迅速にご提案します。'
    },
    {
      icon: <GlobeAltIcon className="h-12 w-12 text-indigo-500" />,
      title: 'グローバル基準のサポート',
      description: '日本文化やビジネスマナーに精通した外国人スタッフが多数在籍。異文化コミュニケーションも円滑です。'
    },
    {
      icon: <PuzzlePieceIcon className="h-12 w-12 text-indigo-500" />,
      title: '柔軟なソリューション',
      description: '短期派遣から紹介予定派遣、専門職の確保まで、採用課題に合わせた柔軟なプランをご提供します。'
    }
  ];

  const jobTypes = ['製造業・物流業', '事務・CS', 'IT・エンジニア', '販売・接客', '通訳・翻訳', '介護・医療'];

  // Flow data
  const flowSteps = ["お問い合わせ", "ヒアリング・ご提案", "ご契約・人選", "就業開始"];
  const flowDescriptions = [
    "Webフォームまたはお電話にて、お気軽にご相談ください。",
    "担当者が業務内容やご要望を伺い、最適なプランをご提案します。",
    "ご契約後、豊富な人材の中からスキル・条件に合うスタッフを選出します。",
    "就業後も当社がスタッフをしっかりサポート。安心してご活用いただけます。"
  ];

  return (
    <>
      <Helmet>
        <title>人材派遣・派遣サービス | One Step株式会社</title>
        <meta
          name="description"
          content="One Step株式会社は、多国籍な人材ネットワークを活かし、企業様に最適な人材を迅速にご提供します。外国人スタッフの活用にも強みを持ち、信頼できる人材パートナーとして日本企業をサポートします。"
        />
        <meta
          name="keywords"
          content="人材派遣, 派遣サービス, 外国人材, 人材紹介, 企業採用支援, 日本文化に理解のある外国人, グローバル人材, 短期人材, 技術人材, 派遣社員"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-domain.com/staffing" />
        <html lang="ja" />
      </Helmet>

      <Navbar />
      
      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=600&fit=crop&crop=center"
        title="人材派遣・派遣サービス"
        description="Staffing & Dispatch Services"
        highlightText="「人材の力で企業の成長を支える」"
      />

      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-24 text-gray-800 leading-relaxed">
          {/* 人材派遣とは */}
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
                    <span className="text-indigo-600">人材派遣</span>とは？
                  </h2>
                  <p className="text-gray-700">
                    人材派遣とは、当社（One Step）が雇用するスタッフを貴社に派遣し、貴社の指揮命令のもとで業務を行うサービスです。
                    採用活動や労務管理のコスト・手間を削減しつつ、必要な時に必要なスキルを持つ人材を迅速に確保できます。
                    短期間の業務から長期のプロジェクトまで、貴社のニーズに柔軟に対応いたします。
                  </p>
                </div>
              </AnimatedSection>
            </section>
          </AnimatedSection>
          
          {/* 当社の強み */}
          <StrengthsGrid strengths={strengths} />
        
          {/* ご利用の流れ - Using the reusable component */}
          <AnimatedFlowSection
            title="ご利用開始までの流れ"
            steps={flowSteps}
            descriptions={flowDescriptions}
            colorScheme="indigo"
          />

          {/* 課題と職種 */}
          <AnimatedSection>
            <section className="grid md:grid-cols-2 gap-16 items-start">
              <AnimatedSection delay={200}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">こんな<span className="text-indigo-600">課題</span>に対応できます</h2>
                  <ul className="space-y-4">
                    {["急な人手不足への対応", "繁忙期のみの短期スタッフの確保", "専門スキルを持つ人材の活用", "採用・労務コストの削減", "産休・育休の代替要員確保"].map((item, index) => (
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">対応<span className="text-indigo-600">業種・職種</span>例</h2>
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

          {/* CTA */}
          <AnimatedSection delay={200}>
          <CompanyCTA showTag={true} />
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </>
  );
}
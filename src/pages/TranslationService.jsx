import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';
import AnimatedSection from '../components/shared/AnimatedSection';
import AnimatedFlowSection from '../components/shared/AnimatedFlowSection';
import StrengthsGrid from '../components/shared/StrengthsGrid';
import { CheckBadgeIcon, ClockIcon, DocumentTextIcon, LockClosedIcon, CheckCircleIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import CompanyCTA from '../components/shared/CompanyCTA';

export default function TranslationService() {
  const strengths = [
    {
      icon: <CheckBadgeIcon className="h-12 w-12 text-white" />,
      title: '専門分野 x ネイティブ品質',
      description: '各分野の専門知識を持つ翻訳者とネイティブスピーカーがチームを組み、正確で自然な翻訳を実現します。'
    },
    {
      icon: <ClockIcon className="h-12 w-12 text-white" />,
      title: '迅速・柔軟な対応',
      description: 'お急ぎの案件にも柔軟に対応。お客様のビジネススケジュールに合わせたスピーディーな納品が可能です。'
    },
    {
      icon: <DocumentTextIcon className="h-12 w-12 text-white" />,
      title: '多様なドキュメント形式',
      description: '契約書や技術マニュアルから、Webサイト、マーケティング資料まで、あらゆる形式のドキュメントに対応します。'
    },
    {
      icon: <LockClosedIcon className="h-12 w-12 text-white" />,
      title: '徹底した機密保持',
      description: 'お客様からお預かりした情報は最高レベルのセキュリティで管理。秘密保持契約（NDA）の締結も可能です。'
    }
  ];

  // Data for supported fields and languages
  const fields = ['IT・テクノロジー', '法律・契約書', '医療・医薬', '金融・IR', 'マーケティング', '技術マニュアル', 'Webサイト'];
  const languages = ['英語', '中国語(簡体/繁体)', '韓国語', 'スペイン語', 'ドイツ語', 'フランス語', 'ベトナム語', 'その他多数'];

  // Translation service flow data
  const translationSteps = [
    "お問い合わせ・お見積り",
    "ご発注・原稿お預かり", 
    "翻訳・校正・チェック",
    "納品"
  ];
  
  const translationDescriptions = [
    "Webフォームよりご連絡ください。最短当日中にお見積りを提示します。",
    "正式にご発注後、翻訳対象のドキュメントや資料をお送りいただきます。",
    "専門翻訳者が翻訳し、別のネイティブ担当者が品質を厳しくチェックします。",
    "ご指定の形式で翻訳データをご納品。アフターフォローも万全です。"
  ];

  return (
    <>
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative">
        <InfoTitle
          backgroundImage="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1600&h=600&fit=crop&crop=center"
          title="翻訳・ドキュメントサービス"
          description="Translation & Documentation Services"
          highlightText="言葉の壁を越え、ビジネスを世界へ。"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-24 text-gray-800 leading-relaxed">

          {/* --- SECTION 1: The Problem & Our Solution --- */}
          <AnimatedSection>
            <section className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection delay={200}>
                <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="グローバルビジネス"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={400}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    このような<span className="text-blue-600">翻訳の課題</span>はありませんか？
                  </h2>
                  <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>機械翻訳では品質が低く、ビジネスで使えない。</li>
                    <li>専門用語が多く、正確な翻訳ができる会社が見つからない。</li>
                    <li>多言語に展開したいが、時間もリソースもない。</li>
                  </ul>
                  <p className="mt-4 text-gray-700">
                    One Stepは、貴社のグローバル展開を加速させるプロフェッショナルな翻訳パートナーです。
                  </p>
                </div>
              </AnimatedSection>
            </section>
          </AnimatedSection>

          {/* --- SECTION 2: OUR FEATURES --- */}
          <StrengthsGrid strengths={strengths} /> 
          {/* --- SECTION 4: SERVICE FLOW - Using the reusable component --- */}
          <AnimatedFlowSection
            title="ご利用の流れ"
            steps={translationSteps}
            descriptions={translationDescriptions}
            colorScheme="indigo"
          />          

          {/* --- SECTION 3: Supported Fields & Languages --- */}
          <AnimatedSection>
            <section className="grid md:grid-cols-2 gap-16 items-start">
              <AnimatedSection delay={200}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">対応<span className="text-blue-600">分野</span></h2>
                  <ul className="space-y-4">
                    {fields.map((item, index) => (
                      <AnimatedSection key={item} delay={400 + index * 100}>
                        <li className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                          <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-700 text-lg">{item}</span>
                        </li>
                      </AnimatedSection>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={400}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">対応<span className="text-blue-600">言語</span></h2>
                  <div className="flex flex-wrap gap-3">
                    {languages.map((lang, index) => (
                      <AnimatedSection key={lang} delay={600 + index * 100}>
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold shadow-sm hover:bg-blue-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                          {lang}
                        </span>
                      </AnimatedSection>
                    ))}
                  </div>
                  <AnimatedSection delay={800}>
                    <div className="mt-8 w-full h-60 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                      <img
                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="多言語対応"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </AnimatedSection>
                </div>
              </AnimatedSection>
            </section>
          </AnimatedSection>
        </div>

        {/* --- ENHANCED CTA SECTION --- */}
        <CompanyCTA showTag={true}
         title="無料お見積り・ご相談はこちら"
         description={`翻訳したいドキュメントの概要や言語、納期などをお知らせください。\n専門のコーディネーターが最適なプランをご提案します。`}
         buttonText="無料お見積りを依頼する"
         buttonLink="/contact"
         />
        </div>

      <Footer />
    </>
  );
}
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';
import AnimatedFlowSection from '../components/shared/AnimatedFlowSection';
import StrengthsGrid from '../components/shared/StrengthsGrid';
import { HeartIcon, ArrowTrendingUpIcon, UsersIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';

import FAQSection from '../components/shared/FAQItems';
import CompanyCTA from '../components/shared/CompanyCTA';

export default function RecruitmentPage() {
  const strengths = [
    {
      icon: <HeartIcon className="h-16 w-16 text-blue-500" />,
      title: '誠実な対応力',
      description: '応募者一人ひとりに真摯に向き合う姿勢を大切にしています。',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <ArrowTrendingUpIcon className="h-16 w-16 text-indigo-500" />,
      title: '成長意欲',
      description: '変化に柔軟に対応し、常に学ぶ姿勢を持つ人材を歓迎します。',
      color: 'from-indigo-500 to-blue-400',
    },
    {
      icon: <UsersIcon className="h-16 w-16 text-teal-500" />,
      title: '人と繋がる力',
      description: '人と人、企業と人をつなぐ情熱を持った方を求めています。',
      color: 'from-teal-500 to-green-400',
    },
  ];

  const steps = ['書類選考', '一次面接', '二次面接', '内定'];
  const descriptions = [
    '履歴書と職務経歴書を確認し、書類選考を行います。',
    '担当者との面接を通じて、スキルや志望動機を伺います。',
    '最終面接では、企業理念への理解と熱意を確認します。',
    '内定のご連絡をし、入社に向けた手続きを進めます。',
  ];

  const faqs = [
    {
      question: '応募に必要な資格はありますか？',
      answer: '基本的なPCスキルとビジネスレベルの日本語能力が必要です。',
    },
    {
      question: '外国籍でも応募できますか？',
      answer: 'はい、在留資格をお持ちであれば応募可能です。',
    },
    {
      question: '未経験でも大丈夫ですか？',
      answer: '人物重視の選考を行っておりますので、未経験でも歓迎です。',
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&h=600&fit=crop&crop=center"
        title="採用情報"
        description="RECRUITMENT"
        highlightText="私たちと一緒に未来を創りませんか？"
      />

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        <StrengthsGrid strengths={strengths} />
        <AnimatedFlowSection title="選考フロー" steps={steps} descriptions={descriptions} colorScheme="blue" />
        <FAQSection faqs={faqs} />
        
        <CompanyCTA
            showTag={true}
            tagText="お仕事をお探しの方へ / For Job Seekers"
            title="エントリーをお待ちしています"
            description="私たちのビジョンに共感してくださる方のご応募を心よりお待ちしています。"
            buttonText='応募フォームへ'
            buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSdh6uGf2hrGfCRTZUuTFYR6abVvsrEHH77TrBDEsXg2IPDSLA/viewform"
          />
      </div>

      <Footer />
    </div>
  );
}

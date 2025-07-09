import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';
import AnimatedFlowSection from '../components/shared/AnimatedFlowSection';
import StrengthsGrid from '../components/shared/StrengthsGrid';
import CompanyCTA from '../components/shared/CompanyCTA';
import { HeartIcon, ArrowTrendingUpIcon, UsersIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import RishiImage from "../image/rishi.png"
import BackgroundText from '../components/shared/BackgroundText';
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1, ...options });
    const el = elementRef.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);
  return [elementRef, isVisible];
};

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};


export default function RecruitmentPage() {
  const strengths = [
    { icon: <HeartIcon className="h-16 w-16 text-white" />, title: '誠実な対応力', description: '応募者一人ひとりに真摯に向き合う姿勢を大切にしています。', color: 'from-blue-500 to-cyan-500' },
    { icon: <ArrowTrendingUpIcon className="h-16 w-16 text-white" />, title: '成長意欲', description: '変化に柔軟に対応し、常に学ぶ姿勢を持つ人材を歓迎します。', color: 'from-indigo-500 to-blue-400' },
    { icon: <UsersIcon className="h-16 w-16 text-white" />, title: '人と繋がる力', description: '人と人、企業と人をつなぐ情熱を持った方を求めています。', color: 'from-teal-500 to-green-400' },
  ];
  const steps = ['書類選考', '一次面接', '二次面接', '内定'];
  const descriptions = ['履歴書と職務経歴書を確認し、書類選考を行います。','担当者との面接を通じて、スキルや志望動機を伺います。','最終面接では、企業理念への理解と熱意を確認します。','内定のご連絡をし、入社に向けた手続きを進めます。'];
  const faqs = [
    { question: '応募に必要な資格はありますか？', answer: '基本的なPCスキルとビジネスレベルの日本語能力が必要です。' },
    { question: '外国籍でも応募できますか？', answer: 'はい、在留資格をお持ちであれば応募可能です。' },
    { question: '未経験でも大丈夫ですか？', answer: '人物重視の選考を行っておりますので、未経験でも歓迎です。' },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=&h=600&fit=crop&crop=center"
        title="採用情報"
        description="RECRUITMENT"
        highlightText="私たちと一緒に未来を創りませんか？"
      />

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-brand-navy text-center mb-6">
            <span className="inline-block border-b-4 border-brand-primary pb-1">求める人物像</span>
          </h2>
          <p className="text-center max-w-3xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed mb-12">
            One Step株式会社では、<br/>
            <span className="font-semibold text-brand-navy">誠実で前向き</span>に取り組み、
            <span className="font-semibold text-brand-navy">仲間との協調</span>を大切にできる方を歓迎しています。<br />
            日本特有の<span className="font-semibold text-brand-navy">礼儀</span>や<span className="font-semibold text-brand-navy">思いやり</span>を重んじながら、
            <span className="font-semibold text-brand-navy">自ら考え行動できる方</span>と共に成長していきたいと考えています。
          </p>
          <StrengthsGrid strengths={strengths} />
        </AnimatedSection>
        {/* --- RE-INTEGRATED: Job Listings Section --- */}
        <AnimatedSection delay={400}>
          <section>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">募集要項</h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md">
              <BackgroundText text={"Recruitment"}/>
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <th className="bg-gray-50 p-4 font-semibold w-1/3 md:w-1/4">職種</th>
                    <td className="p-4">キャリアコンサルタント (人材コーディネーター)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="bg-gray-50 p-4 font-semibold">仕事内容</th>
                    <td className="p-4">求職者とのキャリアカウンセリング、求人紹介、企業への人材提案、面接対策、入社後フォローアップなど</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="bg-gray-50 p-4 font-semibold">給与</th>
                    <td className="p-4">月給 25万円 〜 40万円 (経験・能力を考慮の上、決定)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="bg-gray-50 p-4 font-semibold">勤務地</th>
                    <td className="p-4">愛知県名古屋市南区観音町5-25 観音ビル3c</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </AnimatedSection>
        
        <AnimatedFlowSection title="選考フロー" steps={steps} descriptions={descriptions} colorScheme="indigo" />

               
        {/* --- RE-INTEGRATED: Employee Interview Section --- */}
        <AnimatedSection delay={200}>
            <section className="bg-blue-50 p-8 md:p-12 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">社員インタビュー</h2>
            <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                <img
                    src={RishiImage}
                    alt="社員 田中 沙織" 
                    className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white"
                />
                </div>
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <h3 className="font-bold text-blue-800">Q. この仕事のやりがいは何ですか？</h3>
                        <p className="text-gray-700">担当した求職者の方が無事に内定を獲得し、「本当にありがとう！」と笑顔で報告してくれた時が一番嬉しい瞬間です。人の人生の重要なターニングポイントに立ち会える、責任とやりがいの大きい仕事です。</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-blue-800">Q. 応募者へのメッセージをお願いします。</h3>
                        <p className="text-gray-700">One Stepは、多様性を受け入れ、個人の挑戦を応援してくれる会社です。誰かのために本気になれる方、ぜひ私たちと一緒に、多くの「未来への一歩」を創り出していきましょう！</p>
                    </div>
                </div>
            </div>
            </section>
        </AnimatedSection>

        {/* --- Contact Information and Map Section --- */}
        <AnimatedSection delay={300}>
          <section className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">アクセス・お問い合わせ</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">お問い合わせ</h3>
                  <div className="space-y-3">
                    <p className="flex items-center text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-lg">052-123-4567</span>
                    </p>
                    <p className="flex items-center text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-lg">info@onestep.co.jp</span>
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">アクセス</h3>
                  <p className="text-gray-700">
                    愛知県名古屋市南区観音町5-25 観音ビル3c<br />
                    <span className="text-sm text-gray-500">※地下鉄桜通線「桜本町駅」から徒歩5分</span>
                  </p>
                </div>
              </div>
              <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.1234567890123!2d136.12345678901234!3d35.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA3JzI0LjQiTiAxMzbCsDA3JzI0LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* --- ENHANCED: Dedicated CTA Section --- */}
        <CompanyCTA
          showTag={true}
          tagText="cta.recruitment.applicants.tagText"
          title="cta.recruitment.applicants.title"
          description="cta.recruitment.applicants.description"
          buttonText="cta.recruitment.applicants.buttonText"
          buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSdh6uGf2hrGfCRTZUuTFYR6abVvsrEHH77TrBDEsXg2IPDSLA/viewform"
        />
      </div>

      <Footer />
    </div>
  );
}
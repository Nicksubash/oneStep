import React from 'react';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';

export default function Philosophy() {
  return (
    <>
      <Navbar/>

      <InfoTitle
       backgroundImage="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1600&h=600&fit=crop&crop=center"
        title="企業理念"
        description={`Philosophy`}
        highlightText="「その一歩が、未来を変える。」"
      />

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        
        {/* CEO Message Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl font-bold">
              S
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">私たちの想い</h2>
              <blockquote className="text-lg leading-relaxed italic">
                「私自身もかつて、日本での"最初の一歩"に迷い、悩んだ一人です。だからこそ、今、日本で頑張ろうとする皆さんの背中を、誰よりも強く押してあげたい。あなたの"一歩"が未来を変えると信じて、私たちは寄り添い続けます。」
              </blockquote>
              <p className="text-xl font-semibold mt-4 text-blue-100">
                — レグミ・スディプ（代表取締役）
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">使命（Mission）</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl font-bold text-blue-600">人と企業を、一歩前へ導く。</p>
              <p className="text-gray-600 leading-relaxed">
                日本では今、労働力不足が深刻化する一方で、国内外に多くの優秀な人材が活躍の場を求めています。
                One Stepは、有料職業紹介事業を通じて、
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">企業様には <strong className="text-gray-800">信頼できる即戦力人材</strong> を</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">求職者の皆様には <strong className="text-gray-800">安心して働ける職場と環境</strong> を</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">提供することを使命としています。</p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">ビジョン（Vision）</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl font-bold text-indigo-600">多様な人材が、個性と能力を活かして活躍できる社会を創る。</p>
              <p className="text-gray-600 leading-relaxed">
                国籍や文化を越え、「人」としての価値が尊重される社会。
                One Stepは、そんな未来を目指し、"人"を中心にした価値創造を追求してまいります。
              </p>
            </div>
          </div>
        </section>

        {/* Promises Section */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">私たちの約束</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">誠実に。丁寧に。寄り添って。</h3>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">一人ひとりの「人生」に向き合い、信頼と安心を提供します。</h3>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">一社一社の「課題」に向き合い、持続可能な人材定着を実現します。</h3>
            </div>
          </div>
        </section>

        {/* Slogan Section */}
        <section className="text-center bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">スローガン</h2>
          
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 mb-8">
            <p className="text-3xl md:text-4xl font-bold text-white">
              「その一歩が、未来を変える。」
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              私たちが大切にしているのは、"一歩"の力です。小さな一歩かもしれません。でもその一歩が、企業の未来を変え、人の人生を豊かにし、社会全体を動かす大きな原動力になるのです。
            </p>
            <p className="text-xl font-semibold text-gray-800">
              One Step株式会社は、その一歩を共に歩むパートナーとして、皆さまと未来へ進んでまいります。
            </p>
          </div>
        </section>

      </div>
      
      <Footer/>
    </>
  );
}
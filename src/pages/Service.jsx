import React from 'react';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';

export default function Service() {
  return (
    <>
      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=1600&h=600&fit=crop&crop=center"
        title="私たちのサービス"
        description="Service Overview"
        highlightText="「最適なマッチングで、未来をひらく。」"
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* What is Paid Employment Placement */}
        <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">💼 有料職業紹介とは？</h2>
          <p className="text-gray-700 leading-relaxed">
            厚生労働省認可のもと、企業と求職者の間に立ち、最適な人材マッチングを行う正式なサービスです。
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            👥 <strong>求職者は完全無料。</strong> 企業側が紹介手数料を支払う仕組みです。
          </p>
        </section>

        {/* Target Audience */}
        <section className="bg-blue-50 rounded-2xl p-8 shadow-inner border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">🌐 主な対象者</h2>
          <p className="text-gray-700 mb-6">
            One Step株式会社では、日本に住んでいるさまざまな求職者の方をサポートしています。
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>日本の専門学校や大学を卒業した外国人の方</li>
            <li>日本で働いていて転職を考えている外国人の方</li>
            <li>日本に住んでいる留学生の方</li>
            <li>日本人の新卒の方や転職を希望されている方</li>
          </ul>

          <p className="text-gray-700 mt-6">
            就職が初めての方も、これまでの経験を活かしたい方も、安心してご相談ください。
          </p>
          <p className="text-gray-700 mt-2">
            一人ひとりに合った働き方や職場をご紹介できるよう、しっかりサポートします。
          </p>
        </section>

        {/* CTA */}
        <section className="text-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            📌 今すぐ相談する
          </a>
        </section>
        
      </div>

      <Footer />
    </>
  );
}

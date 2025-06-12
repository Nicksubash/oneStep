import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';

export default function Philosophy() {
  return (
    <>
      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1600&h=600&fit=crop&crop=center"
        title="企業理念"
        description="Philosophy"
        highlightText="「その一歩が、未来を変える。」"
      />

      <main className="max-w-4xl mx-auto px-4 py-16 space-y-16 text-gray-800">

        {/* CEO Message */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">私たちの想い</h2>
          <blockquote className="text-lg leading-relaxed border-l-4 border-blue-500 pl-4 italic">
            「私自身もかつて、日本での&quot;最初の一歩&quot;に迷い、悩んだ一人です。だからこそ、今、日本で頑張ろうとする皆さんの背中を、誰よりも強く押してあげたい。あなたの&quot;一歩&quot;が未来を変えると信じて、私たちは寄り添い続けます。」
          </blockquote>
          <p className="mt-4 font-semibold">— レグミ・スディプ（代表取締役）</p>
        </section>

        {/* Mission */}
        <section>
          <h2 className="text-xl font-bold mb-2">使命（Mission）</h2>
          <p className="text-blue-600 font-semibold mb-4">人と企業を、一歩前へ導く。</p>
          <p className="mb-2">
            日本では今、労働力不足が深刻化する一方で、国内外に多くの優秀な人材が活躍の場を求めています。One Stepは、有料職業紹介事業を通じて、
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>企業様には <strong>信頼できる即戦力人材</strong> を</li>
            <li>求職者の皆様には <strong>安心して働ける職場と環境</strong> を</li>
          </ul>
          <p className="mt-2">提供することを使命としています。</p>
        </section>

        {/* Vision */}
        <section>
          <h2 className="text-xl font-bold mb-2">ビジョン（Vision）</h2>
          <p className="text-indigo-600 font-semibold mb-4">多様な人材が、個性と能力を活かして活躍できる社会を創る。</p>
          <p>
            国籍や文化を越え、「人」としての価値が尊重される社会。
            One Stepは、そんな未来を目指し、&quot;人&quot;を中心にした価値創造を追求してまいります。
          </p>
        </section>

        {/* Promises */}
        <section>
          <h2 className="text-xl font-bold mb-6 text-center">私たちの約束</h2>
          <ul className="space-y-4 text-center">
            <li>誠実に。丁寧に。寄り添って。</li>
            <li>一人ひとりの「人生」に向き合い、信頼と安心を提供します。</li>
            <li>一社一社の「課題」に向き合い、持続可能な人材定着を実現します。</li>
          </ul>
        </section>

        {/* Slogan */}
        <section className="text-center space-y-6">
          <h2 className="text-xl font-bold">スローガン</h2>
          <p className="text-2xl text-blue-700 font-semibold">「その一歩が、未来を変える。」</p>
          <p>
            私たちが大切にしているのは、&quot;一歩&quot;の力です。小さな一歩かもしれません。でもその一歩が、企業の未来を変え、人の人生を豊かにし、社会全体を動かす大きな原動力になるのです。
          </p>
          <p className="font-semibold">
            One Step株式会社は、その一歩を共に歩むパートナーとして、皆さまと未来へ進んでまいります。
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}

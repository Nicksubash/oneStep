import React from 'react';

export default function CompanyCTA() {
  return (
    <section className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl py-16 px-6 shadow-lg">
      <h2 className="text-3xl font-bold mb-4">まずはお気軽にご相談ください</h2>
      <p className="text-indigo-100 max-w-2xl mx-auto mb-8 text-base md:text-lg">
        貴社の事業成長を加速させる最適な人材ソリューションをご提案いたします。<br />
        人材に関するお悩みは、One Stepにお任せください。
      </p>

      <a
        href="/company-contact"
        className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
      >
        ご相談・お問い合わせはこちら →
      </a>
    </section>
  );
}

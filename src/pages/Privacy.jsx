import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/shared/Footer";
import InfoTitle from "../components/shared/InfoTitle";
import BackgroundText from "../components/shared/BackgroundText";

export default function Privacy() {
  return (
    <>
      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=600&fit=crop&crop=center"
        title="個人情報保護基本方針"
        description={`One Step株式会社は、個人情報の保護に最大限の注意を払い、
ご本人の信頼に応える企業であることを誓います。`}
        highlightText="プライバシーの尊重。それが、信頼のはじまり。"
      />

      <div className="relative max-w-4xl mx-auto px-4 py-10">
        <BackgroundText text="PRIVACY" top="top-2" />

        <h2 className="relative z-10 text-3xl font-bold mb-6">基本方針</h2>
        <p className="relative z-10 mb-6 leading-loose">
        株式会社 OneStepは、個人情報がプライバシーを構成する重要な情報であると深く認識し、
          すべての個人情報に関して、個人の人格尊重の理念の下に慎重に取り扱わなくてはならないと考えます。
          当社は、お客様、お取引様を始めとするすべての方々（以下、「ご本人」と総称します）から信頼され、愛され、自らも誇れる企業となるために、
          以下の基本方針を定め、個人情報保護に努めてまいります。
        </p>

        <h3 className="relative z-10 text-2xl font-semibold mb-3">1．個人情報の利用目的について</h3>
        <p className="mb-6">
          当社は、個人情報をご提供いただく場合、個人情報をご提供いただく際に明示した目的の範囲内で利用いたします。
        </p>

        <h3 className="relative z-10 text-2xl font-semibold mb-3">2．個人情報の第三者への開示について</h3>
        <p className="mb-2">当社は、次の場合を除き、個人情報をいかなる第三者にも開示いたしません。</p>
        <ol className="list-decimal pl-6 space-y-1 mb-6">
          <li>ご本人の同意がある場合</li>
          <li>ご本人からのお問合せ等の内容から、当社の関連会社や代理店等から回答または対応することが適切と当社が判断した場合</li>
          <li>ご本人に明示した収集目的の実施のために、事前に機密保持契約を締結した業務委託会社や協力企業に対して開示する必要がある場合</li>
          <li>商品のご購入や有料サービスのご利用等で、その代金決済のため金融機関等に個人情報を開示する必要がある場合</li>
          <li>ご本人個人を識別できない状態（統計的資料等）で開示する場合</li>
          <li>法令または指針・ガイドライン等により、第三者への開示が認められている場合</li>
        </ol>
        <p className="mb-6">
          また、当社が保有する個人情報を第三者に提供または処理等を委託する場合には、提供先または委託先の選定に十分配慮するとともに、
          当社における取り扱いと同様に適切で確実な保護措置を講じるよう、必要な監督等に努めます。
        </p>

        <h3 className="relative z-10 text-2xl font-semibold mb-3">3．個人情報の管理について</h3>
        <p className="mb-6">
          当社は、ご本人の個人情報を適切に管理し、不当なアクセスや個人情報の紛失、破壊、改ざん、漏洩等に対する予防措置および安全対策を講じます。
          また、個人情報の保護と適切な取り扱いに関する社内教育を継続して実施してまいります。
        </p>

        <h3 className="relative z-10 text-2xl font-semibold mb-3">4．個人情報に関するお問い合わせについて</h3>
        <p className="mb-6">
          当社は、ご本人がご自身の個人情報の照会・修正・削除などを希望される場合には、当社の所定の手続きに基づき速やかに対応いたします。
        </p>

        <h3 className="relative z-10 text-2xl font-semibold mb-3">5．法令・規範の遵守と見直しについて</h3>
        <p className="mb-6">
          当社は個人情報に関して適用される法令・規範を遵守し、個人情報保護の取り組みの継続的な改善・向上に努めます。
        </p>

        <div className="text-right text-sm text-gray-500 mt-10">
        株式会社 OneStep<br />
        代表取締役　レグミ　スディプ
        </div>
      </div>

      <Footer />
    </>
  );
}

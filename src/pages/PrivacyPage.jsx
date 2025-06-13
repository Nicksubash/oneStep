import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';

export default function PrivacyPage() {
  const sectionTitleStyle = "text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4";
  const bodyTextStyle = "text-gray-800 leading-loose"; 

  return (
    <>
      <Navbar />

      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* --- Page Title --- */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              プライバシーポリシー
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              個人情報保護方針
            </p>
          </div>

          {/* --- Main Content Area --- */}
          <div className="space-y-10">

            {/* Introduction */}
            <p className={bodyTextStyle}>
              One Step株式会社は、当社が提供するサービスにおいて取得する個人情報の重要性を認識し、以下のとおり個人情報保護方針を定め、適切な管理・保護に努めます。
            </p>

            {/* Section 1 */}
            <div>
              <h2 className={sectionTitleStyle}>1. 個人情報の取得について</h2>
              <p className={bodyTextStyle}>
                当社は、適正かつ公正な手段により、利用目的を明確にした上で、必要な範囲で個人情報を取得いたします。
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className={sectionTitleStyle}>2. 個人情報の利用目的</h2>
              <p className={`${bodyTextStyle} mb-4`}>
                当社は、取得した個人情報を以下の目的のために利用いたします。
              </p>
              <ul className={`list-disc list-inside space-y-2 pl-4 ${bodyTextStyle}`}>
                <li>有料職業紹介サービスの提供</li>
                <li>応募者との連絡、面談、仕事紹介に関する業務</li>
                <li>企業とのマッチング業務</li>
                <li>各種お知らせやサービスのご案内</li>
                <li>法令に基づく対応</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className={sectionTitleStyle}>3. 個人情報の第三者提供について</h2>
              <p className={`${bodyTextStyle} mb-4`}>
                当社は、以下の場合を除き、取得した個人情報を第三者に提供することはありません。
              </p>
              <ul className={`list-disc list-inside space-y-2 pl-4 ${bodyTextStyle}`}>
                <li>本人の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className={sectionTitleStyle}>4. 個人情報の管理</h2>
              <p className={bodyTextStyle}>
                当社は、個人情報の漏えい、紛失、改ざんおよび不正アクセスなどを防止するために、必要かつ適切な安全管理措置を講じます。
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className={sectionTitleStyle}>5. 個人情報の開示・訂正・削除等について</h2>
              <p className={bodyTextStyle}>
                ご本人から自己の個人情報について開示、訂正、追加、削除、利用停止のご請求があった場合には、適切に対応いたします。
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className={sectionTitleStyle}>6. 法令遵守と見直し</h2>
              <p className={bodyTextStyle}>
                当社は、個人情報保護に関する法令およびその他の規範を遵守し、本ポリシーの内容を適宜見直し、改善に努めます。
              </p>
            </div>

            {/* Section 7 - Contact */}
            <div>
              <h2 className={sectionTitleStyle}>7. お問い合わせ窓口</h2>
              <div className="mt-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className={`${bodyTextStyle} mb-4`}>
                  個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
                </p>
                <div className="space-y-1 text-gray-900">
                  <p><strong>One Step株式会社</strong></p>
                  <p>住所：〒457-0828 愛知県名古屋市南区観音町5-25 観音ビル3c</p>
                  <p>電話番号：052-829-1674</p>
                  <p>メール：info@onestep.co.jp</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
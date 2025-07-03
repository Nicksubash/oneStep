import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/shared/Footer";
import InfoTitle from "../components/shared/InfoTitle";
import BackgroundText from "../components/shared/BackgroundText";

export default function CompanyInfo() {
  return (
    <>
      <Navbar />

      {/* Hero Title Section */}
      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=600&fit=crop&crop=center"
        title="会社概要"
        description={`One Step株式会社は、国際人材と日本企業を結ぶ架け橋。\n言語教育と生活サポートを通じて、外国人が安心して働き、暮らせる未来を創ります。`}
        highlightText="その一歩が、世界を変えるキャリアのはじまりに。"
      />

      <div className="relative max-w-4xl mx-auto p-4">
        {/* Background Text for Company Section */}
        <BackgroundText text="COMPANY" top="top-0" />

        {/* 会社概要 */}
        <h2 className="relative z-10 text-4xl font-bold bg-gradient-to-r from-blue via-blue-100 to-white bg-clip-text mb-4 mt-5 text-brand-primary">
          会社概要 <br />
          <span className="text-xl">Company Profile</span>
        </h2>

        <table className="relative z-10 w-full text-left border border-gray-300 mb-10 mt-10">
          <tbody>
            <tr className="border-b">
              <th className="p-2 bg-gray-100 w-1/4">会社名</th>
              <td className="p-2">One Step株式会社（One Step Co., Ltd.）</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">設立</th>
              <td className="p-2">2025年03月28日</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">所在地</th>
              <td className="p-2">〒457-0845　愛知県名古屋市南区観音町観音ビル</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">代表者</th>
              <td className="p-2">代表取締役　レグミ　スディプ</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">連絡先</th>
              <td className="p-2">📞 052-829-1674　｜　FAX番号：052-829-1684</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">メール先</th>
              <td className="p-2">📧 info@onestep-group.co.jp</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">事業内容</th>
              <td className="p-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>有料職業紹介事業（許可番号：２３-ユ-３０３０９６）</li>
                  <li>外国人向け就職・転職支援</li>
                  <li>留学生の就職サポート</li>
                  <li>対応言語：日本語・英語・ネパール語</li>
                </ul>
              </td>
            </tr>
            {/* <tr className="border-b">
              <th className="p-2 bg-gray-100">取引銀行</th>
              <td className="p-2">三菱UFJ銀行、〇〇信用金庫ほか</td>
            </tr> */}
            <tr className="border-b">
              <th className="p-2 bg-gray-100">許可・登録</th>
              <td className="p-2">
                有料職業紹介事業許可（厚生労働大臣 許可番号：２３-ユ-３０３０９６）｜
                その他関連業登録準備中
              </td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">ミッション</th>
              <td className="p-2">
                <span className="text-brand-primary">「その一歩が、未来を変える」</span>外国人と企業の架け橋となり、日本社会に信頼される人材流通を実現します。
              </td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">ビジョン</th>
              <td className="p-2">
                多様な人材が活躍できる社会を目指し、“人”を中心にした価値創造を追求します。
              </td>
            </tr>
            <tr>
              <th className="p-2 bg-gray-100">スローガン</th>
              <td className="p-2">
               「その<span className="text-brand-primary">一歩</span>が、未来を変える」
              </td>
            </tr>
          </tbody>
        </table>

        {/* アクセス */}
        <div className="relative mb-4">
          <BackgroundText text="ACCESS" top="top-0" />
          <h2 className="relative z-10 text-xl font-semibold mb-4">アクセス</h2>
          <div className="relative z-10">
            <h3 className="font-semibold">One Step株式会社</h3>
            <p>〒457-0845 愛知県名古屋市南区観音町観音ビル</p>
            <p>名鉄常滑線「道徳駅」から徒歩5分</p>
          </div>
        </div>

        <div className="relative z-10 w-full h-96">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.248255927196!2d136.90448897594996!3d35.100511361655705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037bd490091749%3A0x4fa31faf33348089!2z44CSNDU3LTA4NDUgQWljaGksIE5hZ295YSwgTWluYW1pIFdhcmQsIEthbm5vbmNoxY0sIDUtY2jFjW1l4oiSMjUg6Kaz6Z-z44OT44OrIDNj!5e0!3m2!1sen!2sjp!4v1749386315753!5m2!1sen!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
}

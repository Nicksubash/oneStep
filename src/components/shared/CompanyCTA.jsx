import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CompanyCTA() {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-12 text-center shadow-sm">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        当社の採用支援サービスはご理解頂けましたでしょうか？
      </h2>
      <p className="text-gray-700 mb-6">
        少しでもご不明な点がございましたら<br />
        何なりとお問い合わせください。
      </p>

      <button
        onClick={() => navigate('/contact')}
        className="bg-blue-600 hover:bg-blue-700 transition text-white font-bold px-6 py-3 rounded-full text-sm md:text-base shadow-md"
      >
        お問い合わせフォームへ
      </button>
    </div>
  );
}

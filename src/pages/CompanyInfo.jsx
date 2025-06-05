import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Building, Users, Globe, Award, Target, Eye, Heart } from 'lucide-react';

const CompanyInfo = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: 'overview', label: '会社概要', icon: Building },
    { id: 'mission', label: 'ミッション', icon: Target },
    { id: 'vision', label: 'ビジョン', icon: Eye },
    { id: 'services', label: '事業内容', icon: Users }
  ];

  const companyInfo = [
    { icon: Building, label: '会社名', value: 'One Step株式会社（One Step Co., Ltd.）' },
    { icon: Award, label: '設立', value: '2024年4月1日' },
    { icon: MapPin, label: '所在地', value: '〒457-0845 愛知県名古屋市南区観音町観音ビル' },
    { icon: Users, label: '代表者', value: '代表取締役 レグミ スディプ' },
    { icon: Phone, label: '電話', value: '052-XXXX-XXXX' },
    { icon: Mail, label: 'メール', value: 'info@onestep.co.jp' }
  ];

  const services = [
    '有料職業紹介事業（許可番号：〇〇-ユ-〇〇〇〇）',
    '外国人向け就職・転職支援',
    '留学生の就職サポート'
  ];

  const languages = ['日本語', '英語', 'ネパール語'];
  const banks = ['三菱UFJ銀行', '〇〇信用金庫ほか'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div 
            className={`text-center transform transition-all duration-1000 ${
              isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            id="hero"
            data-animate
          >
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 rounded-3xl shadow-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <span className="text-white font-bold text-3xl">OS</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              One Step株式会社
            </h1>
            
            <div className="text-xl md:text-2xl text-blue-200 mb-8 font-light">
              「その一歩が、未来を変える」
            </div>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              外国人と企業の架け橋となり、日本社会に信頼される人材流通を実現します
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-indigo-600 hover:border-indigo-300'
                  }`}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Company Overview */}
        {activeTab === 'overview' && (
          <div 
            className={`transform transition-all duration-700 ${
              isVisible.overview ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            id="overview"
            data-animate
          >
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {companyInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-gray-900 mb-2">{item.label}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Languages */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center mb-4">
                  <Globe className="text-indigo-600 mr-3" size={24} />
                  <h3 className="font-bold text-gray-900">対応言語</h3>
                </div>
                <div className="space-y-2">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{lang}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Banks */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <div className="flex items-center mb-4">
                  <Building className="text-purple-600 mr-3" size={24} />
                  <h3 className="font-bold text-gray-900">取引銀行</h3>
                </div>
                <div className="space-y-2">
                  {banks.map((bank, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{bank}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* License */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-center mb-4">
                  <Award className="text-green-600 mr-3" size={24} />
                  <h3 className="font-bold text-gray-900">許可・登録</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  有料職業紹介事業許可<br />
                  （厚生労働大臣 許可番号：〇〇-ユ-〇〇〇〇）
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Mission */}
        {activeTab === 'mission' && (
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
                <Target className="mx-auto mb-6 text-white/80" size={48} />
                <h2 className="text-3xl font-bold mb-6">ミッション</h2>
                <p className="text-xl leading-relaxed mb-4">
                  「その一歩が、未来を変える」
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  外国人と企業の架け橋となり、日本社会に信頼される人材流通を実現します。
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Vision */}
        {activeTab === 'vision' && (
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
                <Eye className="mx-auto mb-6 text-white/80" size={48} />
                <h2 className="text-3xl font-bold mb-6">ビジョン</h2>
                <p className="text-xl leading-relaxed">
                  多様な人材が活躍できる社会を目指し、"人"を中心にした価値創造を追求します。
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Services */}
        {activeTab === 'services' && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              事業内容
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">{service}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Heart className="mx-auto mb-6 text-pink-400" size={48} />
          <h2 className="text-3xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-xl text-gray-300 mb-8">
            あなたの「その一歩」を一緒に踏み出しませんか？
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
            今すぐお問い合わせ
          </button>
        </div>
      </section>
    </div>
  );
};

export default CompanyInfo;
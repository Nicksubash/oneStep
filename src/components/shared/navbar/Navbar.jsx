import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [megaMenuTimeout, setMegaMenuTimeout] = useState(null);
  const [currentPage, setCurrentPage] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active link based on current URL
  useEffect(() => {
    const currentPath = window.location.pathname;
    const navLinks = [
      { name: "Home", href: "/" },
      { name: "会社案内", href: "/about" },
      { name: "事業内容", href: "/services" },
      { name: "お問い合わせ", href: "/contact" },
      { name: "個人情報保護方針", href: "/privacy" },
      { name: "関連国の情報", href: "/info" },
    ];

    const currentLink = navLinks.find((link) => link.href === currentPath);
    if (currentLink) {
      setActiveLink(currentLink.name);
    }
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "会社案内", 
      href: "/about",
      megaMenu: {
        sections: [
          {
            title: "会社情報",
            icon: "🏢",
            href: "/company",
            description: "組織概要と沿革",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=center"
          },
          {
            title: "代表挨拶",
            icon: "📰",
            href: "/greeting",
            description: "社長からの温かい言葉",
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop&crop=center"
          },
          {
            title: "企業理念",
            icon: "💎",
            href: "/philosophy",
            description: "私たちの価値観と使命",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center"
          },
          {
            title: "よくある質問",
            icon: "❓",
            href: "/about/faq",
            description: "お客様からのご質問",
            image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop&crop=center"
          }
        ]
      }
    },
    {
      name: "事業内容",
      href: "/services",
      megaMenu: {
        sections: [
          { 
            title: "Recruitment & Staffing", 
            icon: "👥",
            href: "/services#recruitment", 
            description: "人材紹介と派遣サービス",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center" 
          },
          { 
            title: "English Language Courses", 
            icon: "🇬🇧",
            href: "/services#english", 
            description: "ビジネス英語コース",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&crop=center" 
          },
          { 
            title: "Import & Export", 
            icon: "📦",
            href: "/services#import", 
            description: "国際貿易ソリューション",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center" 
          },
          { 
            title: "Translation & Documentation", 
            icon: "📝",
            href: "/services#translation", 
            description: "多言語ドキュメントサービス",
            image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=400&h=300&fit=crop&crop=center" 
          },
          { 
            title: "Student Recruitment & Consulting", 
            icon: "🎓",
            href: "/services#student", 
            description: "留学サポートプログラム",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop&crop=center" 
          },
          { 
            title: "Japanese Language Preparation", 
            icon: "🇯🇵",
            href: "/services#jlpt", 
            description: "JLPT試験対策コース",
            image: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=400&h=300&fit=crop&crop=center" 
          }
        ]
      }
    },
    { name: "個人情報保護方針", href: "/privacy" },
    { name: "関連国の情報", href: "/info" },
    { name: "お問い合わせ", href: "/contact" }
  ];

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const handlePageChange = (menuName, direction) => {
    setCurrentPage(prev => {
      const current = prev[menuName] || 0;
      const maxItems = 4;
      const menu = navLinks.find(link => link.name === menuName);
      const totalItems = menu?.megaMenu?.sections?.length || 0;
      const totalPages = Math.ceil(totalItems / maxItems);
      
      let newPage = current;
      if (direction === 'next' && current < totalPages - 1) {
        newPage = current + 1;
      } else if (direction === 'prev' && current > 0) {
        newPage = current - 1;
      }
      
      return { ...prev, [menuName]: newPage };
    });
  };

  const getVisibleItems = (sections, menuName) => {
    const maxItems = 4;
    const page = currentPage[menuName] || 0;
    const startIndex = page * maxItems;
    const endIndex = startIndex + maxItems;
    return sections.slice(startIndex, endIndex);
  };

  const getTotalPages = (totalItems) => {
    return Math.ceil(totalItems / 4);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[9999] transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-xl border-b border-gray-200/50"
            : "bg-white shadow-lg border-b border-gray-100"
        }`}
      >
        {/* Top Section - Logo & Utilities */}
        <div className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo Section */}
              <div className="flex items-center group">
                <a href="/" className="flex items-center space-x-4">
                  {/* Logo Image */}
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg border border-gray-200 transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1">
                      <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                        OS
                      </div>
                    </div>
                    {/* effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-md transition-all duration-300"></div>
                  </div>

                  {/* Logo Text */}
                  <div className="leading-tight">
                    <h1 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent tracking-wide">
                      株式会社 OneStep
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5 tracking-wide">
                      Innovation & Excellence
                    </p>
                  </div>
                </a>
              </div>

              {/* Right Section - Languages & Contact */}
              <div className="hidden md:flex items-center space-x-6">
                {/* Language Switcher */}
                <div className="flex items-center bg-gray-50 rounded-full p-1">
                  <button className="px-3 py-1.5 text-sm font-medium bg-white text-indigo-600 rounded-full shadow-sm transition-all duration-200 hover:shadow-md">
                    🇯🇵 JP
                  </button>
                  <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                    🇺🇸 EN
                  </button>
                </div>

                {/* Search */}
                <button className="p-2.5 bg-gray-50 hover:bg-indigo-50 rounded-xl transition-all duration-200 group">
                  <svg
                    className="w-5 h-5 text-gray-600 group-hover:text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>

                {/* Contact Button */}
                <a
                  href="/contact"
                  className="relative px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
                >
                  <span className="relative z-10">お問い合わせ</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  {isMobileMenuOpen ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="hidden md:block bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-center space-x-1">
              {navLinks.map((link, index) => (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => {
                    if (link.megaMenu) {
                      if (megaMenuTimeout) {
                        clearTimeout(megaMenuTimeout);
                      }
                      setActiveMegaMenu(link.name);
                    }
                  }}
                  onMouseLeave={() => {
                    if (link.megaMenu) {
                      const timeout = setTimeout(() => {
                        setActiveMegaMenu(null);
                      }, 100);
                      setMegaMenuTimeout(timeout);
                    }
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.name)}
                    className={`relative px-6 py-4 text-sm font-medium transition-all duration-300 flex items-center ${
                      activeLink === link.name
                        ? "text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg"
                        : "text-gray-300 hover:text-white hover:bg-slate-700"
                    }`}
                    style={{
                      clipPath:
                        index === 0
                          ? "polygon(0 0, calc(100% - 15px) 0, 100% 100%, 0 100%)"
                          : index === navLinks.length - 1
                          ? "polygon(15px 0, 100% 0, 100% 100%, 0 100%)"
                          : "polygon(15px 0, calc(100% - 15px) 0, 100% 100%, 0 100%)",
                    }}
                  >
                    <span className="relative z-10">{link.name}</span>
                  </a>

                  {/* Hover buffer for mega menu */}
                  {link.megaMenu && (
                    <div className="absolute top-full left-0 right-0 h-4 bg-transparent pointer-events-none"></div>
                  )}

                  {/* Horizontal Scrollable Mega Menu */}
                  {link.megaMenu && activeMegaMenu === link.name && (
                    <div 
                      className="fixed left-0 right-0 mx-auto top-[8.5rem] w-screen max-w-screen-2xl bg-white shadow-2xl rounded-b-2xl z-50 border border-gray-100"
                      onMouseEnter={() => {
                        if (megaMenuTimeout) {
                          clearTimeout(megaMenuTimeout);
                        }
                        setActiveMegaMenu(link.name);
                      }}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => {
                          setActiveMegaMenu(null);
                        }, 100);
                        setMegaMenuTimeout(timeout);
                      }}
                    >
                      <div className="max-w-7xl mx-auto p-8">
                        {/* Navigation Controls */}
                        {link.megaMenu.sections.length > 4 && (
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-600">
                                {((currentPage[link.name] || 0) * 4) + 1}-{Math.min(((currentPage[link.name] || 0) + 1) * 4, link.megaMenu.sections.length)} of {link.megaMenu.sections.length} items
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => handlePageChange(link.name, 'prev')}
                                disabled={(currentPage[link.name] || 0) === 0}
                                className={`p-2 rounded-lg border transition-all duration-200 ${
                                  (currentPage[link.name] || 0) === 0 
                                    ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
                                    : 'border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300'
                                }`}
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                              </button>
                              
                              <div className="flex items-center space-x-1">
                                {Array.from({ length: getTotalPages(link.megaMenu.sections.length) }).map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setCurrentPage(prev => ({ ...prev, [link.name]: index }))}
                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                      (currentPage[link.name] || 0) === index 
                                        ? 'bg-indigo-600' 
                                        : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                  />
                                ))}
                              </div>

                              <button
                                onClick={() => handlePageChange(link.name, 'next')}
                                disabled={(currentPage[link.name] || 0) >= getTotalPages(link.megaMenu.sections.length) - 1}
                                className={`p-2 rounded-lg border transition-all duration-200 ${
                                  (currentPage[link.name] || 0) >= getTotalPages(link.megaMenu.sections.length) - 1
                                    ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
                                    : 'border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300'
                                }`}
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Items Grid */}
                        <div className="grid grid-cols-4 gap-6">
                          {getVisibleItems(link.megaMenu.sections, link.name).map((section, sectionIndex) => (
                            <a
                              key={sectionIndex}
                              href={section.href}
                              className="group/card relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                              {/* Background Image */}
                              <div className="relative h-40 overflow-hidden">
                                <div 
                                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover/card:scale-110"
                                  style={{ 
                                    backgroundImage: `url(${section.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                
                                {/* Icon Overlay */}
                                <div className="absolute top-4 left-4">
                                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl">
                                    {section.icon}
                                  </div>
                                </div>
                              </div>
                              
                              {/* Content */}
                              <div className="p-4">
                                <h3 className="font-semibold text-gray-900 mb-2 group-hover/card:text-indigo-600 transition-colors duration-200">
                                  {section.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {section.description}
                                </p>
                              </div>
                              
                              {/* Hover Arrow */}
                              <div className="absolute bottom-4 right-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-200">
                                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer element to prevent content from being hidden */}
      <div className="h-20 md:h-32"></div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  メニュー
                </h3>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      handleLinkClick(link.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      activeLink === link.name
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">言語 / Language</span>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-indigo-600 text-white text-xs rounded-full">
                      🇯🇵 JP
                    </button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      🇺🇸 EN
                    </button>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl shadow-lg text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </>
  );
};

export default Navbar;
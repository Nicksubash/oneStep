import React, { useState, useEffect } from "react";
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import SearchButton from './SearchButton';
import ContactButton from './ContactButton';
import MobileMenuButton from './MobileMenuButton';
import DesktopNavigation from './Navigation/DesktopNavigation';
import MobileMenu from './Navigation/MobileMenu';

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
      if (typeof direction === 'number') {
        newPage = direction;
      } else if (direction === 'next' && current < totalPages - 1) {
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

  const handleMegaMenuEnter = (link) => {
    if (link.megaMenu) {
      if (megaMenuTimeout) {
        clearTimeout(megaMenuTimeout);
      }
      setActiveMegaMenu(link.name);
    }
  };

  const handleMegaMenuLeave = (link) => {
    if (link.megaMenu) {
      const timeout = setTimeout(() => {
        setActiveMegaMenu(null);
      }, 100);
      setMegaMenuTimeout(timeout);
    }
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
              <Logo />

              {/* Right Section - Languages & Contact */}
              <div className="hidden md:flex items-center space-x-6">
                <LanguageSwitcher />
                <SearchButton />
                <ContactButton />
              </div>

              <MobileMenuButton 
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <DesktopNavigation
          navLinks={navLinks}
          activeLink={activeLink}
          activeMegaMenu={activeMegaMenu}
          currentPage={currentPage}
          megaMenuTimeout={megaMenuTimeout}
          onLinkClick={handleLinkClick}
          onPageChange={handlePageChange}
          onMegaMenuEnter={handleMegaMenuEnter}
          onMegaMenuLeave={handleMegaMenuLeave}
          setActiveMegaMenu={setActiveMegaMenu}
          setMegaMenuTimeout={setMegaMenuTimeout}
          getVisibleItems={getVisibleItems}
          getTotalPages={getTotalPages}
        />
      </header>

      {/* Spacer element to prevent content from being hidden */}
      <div className="h-20 md:h-32"></div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        navLinks={navLinks}
        activeLink={activeLink}
        onLinkClick={handleLinkClick}
        onClose={() => setIsMobileMenuOpen(false)}
      />

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
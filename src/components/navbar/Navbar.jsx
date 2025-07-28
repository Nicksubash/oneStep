import React, { useState, useEffect } from "react";
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import SearchButton from './SearchButton';
import MobileMenuButton from './MobileMenuButton';
import DesktopNavigation from './Navigation/DesktopNavigation';
import MobileMenu from './Navigation/MobileMenu';
import Button from "../shared/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [megaMenuTimeout, setMegaMenuTimeout] = useState(null);
  const [currentPage, setCurrentPage] = useState({});

  const navLinks = [
    { name: "ホーム",
      subtitle:"Home", 
      href: "/", },
    {
      name: "会社案内",
      subtitle: "Company",
      href: "/company",

      megaMenu: {
        sections: [
          {
            title: "Company Information",
            subtitle: "会社情報",
            icon: "\ud83c\udfe2",
            href: "/company",
            description: "組織概要と沿革",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=center"
          },
          {
            title: "CEO Message",
            subtitle: "代表挨拶",
            icon: "\ud83d\udcf0",
            href: "/greeting",
            description: "社長からの温かい言葉",
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop&crop=center"
          },
          {
            title: "Corporate Philosophy",
            subtitle: "企業理念",
            icon: "\ud83d\udcab",
            href: "/philosophy",
            description: "私たちの価値観と使命",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center"
          },
          {
            title: "FAQ",
            subtitle: "よくある質問",
            icon: "❓",
            href: "/faq",
            description: "お客様からのご質問",
            image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop&crop=center"
          }
        ]
      }
    },
    {
      name: "事業内容",
      subtitle: "Services",
      href: "/services",
      megaMenu: {
        sections: [
          {
            title: "Recruitment & Staffing",
            icon: "\ud83d\udc65",
            href: "/services#recruitment",
            description: "職業紹介サービス",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center"
          },
          {
            title: "Student Recruitment Support",
            icon: "\ud83c\udf93",
            href: "/students",
            description: "留学サポートプログラム",
            image: "https://images.unsplash.com/photo-1698047681432-006d2449c631?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            title: "Translation & Documentation",
            icon: "\ud83d\uddd8\ufe0f",
            href: "/translation",
            description: "多言語ドキュメントサービス",
            image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=400&h=300&fit=crop&crop=center"
          },
          // {
          //   title: "Import & Export",
          //   subtitle: "輸出入",
          //   icon: "\ud83d\udce6",
          //   href: "/import",
          //   description: "国際貿易ソリューション",
          //   image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center"
          // }
        ]
      }
    },
    { name: "メンバー紹介",subtitle: "Our Teams", href: "/teams" },
    { name: "最新情報", subtitle: "News",href: "/news" },
    { name: "お問い合わせ", subtitle: "Contact Us",href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentPath = window.location.pathname;
  
    const businessPages = ["/students", "/translation", "/import", ];
    const aboutPages = ["/company", "/greeting", "/philosophy", "/faq"];
    const contactPage= ["/contact", "/recruitment"];
  
    const currentLink = navLinks.find((link) => {
      if (link.href === currentPath) return true;
  
      if (link.href === "/services" && businessPages.includes(currentPath)) return true;
  
      if (link.href === "/company" && aboutPages.includes(currentPath)) return true;
  
      if (link.href ==="/contact" && contactPage.includes(currentPath)) return true;
      return false;
    });
  
    if (currentLink) {
      setActiveLink(currentLink.name);
    }
  }, []);
  

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
        <div className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Logo />

              <div className="hidden md:flex items-center space-x-6">
                <LanguageSwitcher />
                {/* <SearchButton /> */}
                <Button />
              </div>

              <MobileMenuButton 
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </div>

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

      <div className="h-20 md:h-32"></div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        navLinks={navLinks}
        activeLink={activeLink}
        onLinkClick={handleLinkClick}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <style>{`
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
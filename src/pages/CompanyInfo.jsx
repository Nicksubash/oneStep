import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/shared/Footer";
import InfoTitle from "../components/shared/InfoTitle";
import BackgroundText from "../components/shared/BackgroundText";
import CEOImage from "../image/ceo1.png";

export default function CompanyInfo() {
  const { t } = useTranslation();

  const hubCards = [
    {
      title: t('ceoGreeting.infoTitle.title'),
      subtitle: t('ceoGreeting.ceoMessage.part1'),
      href: "/greeting",
      image: CEOImage,
      position: "bg-top"
    },
    {
      title: t('philosophy.infoTitle.title'),
      subtitle: t('philosophy.mission.subtitle'),
      href: "/philosophy",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
    },
    {
      title: t('teams.infoTitle.title'),
      subtitle: t('teams.infoTitle.highlightText'),
      href: "/teams",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
    },
    {
      title: t('faq.infoTitle.title'),
      subtitle: t('faq.infoTitle.highlightText'),
      href: "/faq",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop&crop=center"
    }
  ];



  return (
    <>
      <Navbar />


      {/* Hero Title Section */}
      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=600&fit=crop&crop=center"
        title={t("companyInfo.hero.title")}
        description={t("companyInfo.hero.description")}
        highlightText={t("companyInfo.hero.highlightText")}
      />

      {/* Explore More Section */}
      <section className="relative">
        {/* <BackgroundText text="EXPLORE" top="top-0" />
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl font-bold mb-4">{t('companyhub.moreAboutUs') || 'More About Us'}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('companyhub.description') || 'Learn more about our vision, leadership, and the people behind our success.'}
          </p>
        </div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 pt-10 px-5">
          {hubCards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-cover ${card.position || 'bg-center'} transition-transform duration-700 group-hover:scale-110`}
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-6 flex-grow">
                  {card.subtitle}
                </p>
                <div className="flex items-center text-brand-primary font-bold text-sm mt-auto">
                  {t('common.readMore') || 'View Details'}
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="relative max-w-6xl mx-auto p-4 space-y-32 py-20">


        {/* 会社概要 */}
        <section id="profile">
          <BackgroundText text="COMPANY" top="top-0" />
          <h2 className="relative z-10 text-4xl font-bold bg-gradient-to-r from-blue via-blue-100 to-white bg-clip-text mb-4 mt-5 text-brand-primary">
            {t("companyInfo.profile.title")}
            <br />
            <span className="text-xl">{t("companyInfo.profile.subtitle")}</span>
          </h2>

          <table className="relative z-10 w-full text-left border border-gray-300 mb-10 mt-10">
            <tbody>
              <tr className="border-b">
                <th className="p-4 bg-gray-100 w-1/4">{t("companyInfo.table.companyName")}</th>
                <td className="p-4">{t("companyInfo.table.companyNameValue")}</td>
              </tr>
              <tr className="border-b">
                <th className="p-4 bg-gray-100">{t("companyInfo.table.representative")}</th>
                <td className="p-4">{t("companyInfo.table.representativeValue")}</td>
              </tr>
              <tr className="border-b">
                <th className="p-4 bg-gray-100">{t("companyInfo.table.location")}</th>
                <td className="p-4">{t("companyInfo.table.locationValue")}</td>
              </tr>
              <tr className="border-b">
                <th className="p-4 bg-gray-100">{t("companyInfo.table.established")}</th>
                <td className="p-4">{t("companyInfo.table.establishedValue")}</td>
              </tr>
              <tr className="border-b">
                <th className="p-4 bg-gray-100">{t("companyInfo.table.capital")}</th>
                <td className="p-4">{t("companyInfo.table.capitalValue")}</td>
              </tr>
              <tr className="border-b">
                <th className="p-4 bg-gray-100">{t("companyInfo.table.contact")}</th>
                <td className="p-4">{t("companyInfo.table.contactValue")}</td>
              </tr>
              <tr className="border-b">
                <th className="p-4 bg-gray-100">{t("companyInfo.table.email")}</th>
                <td className="p-4">{t("companyInfo.table.emailValue")}</td>
              </tr>
              <tr className="border-b">
                <th className="p-4 bg-gray-100">{t("companyInfo.table.business")}</th>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>{t("companyInfo.table.business1")}</li>
                    <li>{t("companyInfo.table.business2")}</li>
                    <li>{t("companyInfo.table.business3")}</li>
                    <li>{t("companyInfo.table.business4")}</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b">
                <th className="p-4 bg-gray-100">{t("companyInfo.table.license")}</th>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>{t("companyInfo.table.license1")}</li>
                    <li>{t("companyInfo.table.license2")}</li>
                    <li>{t("companyInfo.table.license3")}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          {/* アクセス */}
          <div className="relative mb-4 mt-20">
            <BackgroundText text="ACCESS" top="top-0" />
            <h2 className="relative z-10 text-xl font-semibold mb-4">{t("companyInfo.access.title")}</h2>
            <div className="relative z-10 mb-8">
              <h3 className="font-semibold">{t("companyInfo.access.companyName")}</h3>
              <p>{t("companyInfo.access.address")}</p>
              <p>{t("companyInfo.access.station1")}</p>
              <p>{t("companyInfo.access.station2")}</p>
            </div>
            <div className="relative z-10 w-full h-96 rounded-xl overflow-hidden shadow-lg">
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
        </section>

      </div>

      <Footer />
    </>
  );
}

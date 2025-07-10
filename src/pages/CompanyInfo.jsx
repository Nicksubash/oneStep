import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/shared/Footer";
import InfoTitle from "../components/shared/InfoTitle";
import BackgroundText from "../components/shared/BackgroundText";

export default function CompanyInfo() {
  const { t } = useTranslation();
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

      <div className="relative max-w-4xl mx-auto p-4">
        {/* Background Text for Company Section */}
        <BackgroundText text="COMPANY" top="top-0" />

        {/* 会社概要 */}
        <h2 className="relative z-10 text-4xl font-bold bg-gradient-to-r from-blue via-blue-100 to-white bg-clip-text mb-4 mt-5 text-brand-primary">
          {t("companyInfo.profile.title")}
          <br />
          <span className="text-xl">{t("companyInfo.profile.subtitle")}</span>
        </h2>

        <table className="relative z-10 w-full text-left border border-gray-300 mb-10 mt-10">
          <tbody>
            <tr className="border-b">
              <th className="p-2 bg-gray-100 w-1/4">{t("companyInfo.table.companyName")}</th>
              <td className="p-2">{t("companyInfo.table.companyNameValue")}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">{t("companyInfo.table.established")}</th>
              <td className="p-2">{t("companyInfo.table.establishedValue")}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">{t("companyInfo.table.location")}</th>
              <td className="p-2">{t("companyInfo.table.locationValue")}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">{t("companyInfo.table.representative")}</th>
              <td className="p-2">{t("companyInfo.table.representativeValue")}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">{t("companyInfo.table.contact")}</th>
              <td className="p-2">{t("companyInfo.table.contactValue")}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">{t("companyInfo.table.email")}</th>
              <td className="p-2">{t("companyInfo.table.emailValue")}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">{t("companyInfo.table.business")}</th>
              <td className="p-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>{t("companyInfo.table.business1")}</li>
                  <li>{t("companyInfo.table.business2")}</li>
                  <li>{t("companyInfo.table.business3")}</li>
                  <li>{t("companyInfo.table.business4")}</li>
                </ul>
              </td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">{t("companyInfo.table.license")}</th>
              <td className="p-2">{t("companyInfo.table.licenseValue")}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">{t("companyInfo.table.mission")}</th>
              <td className="p-2">
                <span className="text-brand-primary">{t("companyInfo.table.missionHighlight")}</span>{t("companyInfo.table.missionText")}
              </td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100">{t("companyInfo.table.vision")}</th>
              <td className="p-2">{t("companyInfo.table.visionValue")}</td>
            </tr>
            <tr>
              <th className="p-2 bg-gray-100">{t("companyInfo.table.slogan")}</th>
              <td className="p-2">{t("companyInfo.table.sloganValue")}</td>
            </tr>
          </tbody>
        </table>

        {/* アクセス */}
        <div className="relative mb-4">
          <BackgroundText text="ACCESS" top="top-0" />
          <h2 className="relative z-10 text-xl font-semibold mb-4">{t("companyInfo.access.title")}</h2>
          <div className="relative z-10">
            <h3 className="font-semibold">{t("companyInfo.access.companyName")}</h3>
            <p>{t("companyInfo.access.address")}</p>
            <p>{t("companyInfo.access.station1")}</p>
            <p>{t("companyInfo.access.station2")}</p>
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

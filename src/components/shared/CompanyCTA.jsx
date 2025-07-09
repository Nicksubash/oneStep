import React from "react";
import { useTranslation } from "react-i18next";

export default function CompanyCTA({
  showTag = true,
  tagText = "companyCTA.tagText",
  title = "companyCTA.title",
  description = "companyCTA.description",
  buttonText = "companyCTA.buttonText",
  buttonLink = "/company-contact",
}) {
  const { t } = useTranslation();
  // Check if the link is external (starts with http or https)
  const isExternalLink = buttonLink.startsWith('http');

  return (
    <div className="relative max-w-4xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
      {/* Background wall */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-light to-white rounded-lg  opacity-30 pointer-events-none" />

      {/* Ropes and dots */}
      <div className="absolute -top-8 left-1/4 w-3 h-3 bg-brand-navy rounded-full shadow-md" />
      <div className="absolute -top-8 right-1/4 w-3 h-3 bg-brand-navy rounded-full shadow-md" />

      <div className="absolute -top-8 left-1/4 origin-bottom">
        <div
          className="w-1 bg-gradient-to-b from-white to-amber-900"
          style={{
            height: "60px",
            transform: "rotate(-15deg)",
            transformOrigin: "top center",
          }}
        />
      </div>
      <div className="absolute -top-8 right-1/4 origin-bottom">
        <div
          className="w-1 bg-gradient-to-b from-white to-amber-900"
          style={{
            height: "120px",
            transform: "rotate(15deg)",
            transformOrigin: "top center",
          }}
        />
      </div>

      {/* Main board */}
      <section className="relative bg-gradient-to-br from-brand-light to-white border-2 border-brand-primary rounded-xl p-6 md:p-10 shadow-xl">
        {/* Corner holes */}
        <div className="absolute -top-2 left-8 w-4 h-4 bg-gray-300 rounded-full border-2 border-gray-400 shadow-inner" />
        <div className="absolute -top-2 right-8 w-4 h-4 bg-gray-300 rounded-full border-2 border-gray-400 shadow-inner" />
        <div className="absolute -top-1 left-10 w-1 h-2 bg-gray-400 rounded-full" />
        <div className="absolute -top-1 right-10 w-1 h-2 bg-gray-400 rounded-full" />

        {/* Optional red tag */}
        {showTag && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg border border-red-400 transform rotate-0 whitespace-nowrap">
            {t(tagText)}
          </div>
        )}

        {/* Content */}
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-brand-navy mb-6">
            {t(title)}
          </h2>
          <p className="text-gray-700 text-left max-w-2xl mx-auto mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
            {t(description).split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <div className="text-center">
            <a
              href={buttonLink}
              target={isExternalLink ? "_blank" : undefined}
              rel={isExternalLink ? "noopener noreferrer" : undefined}
              className="relative inline-block text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden group"
            >
              <span className="relative z-10">{t(buttonText)}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-navy z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            </a>
          </div>
        </div>

        {/* Overlay texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-10 rounded-xl pointer-events-none" />
        <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black opacity-10 rounded-full blur-sm" />
      </section>
    </div>
  );
}

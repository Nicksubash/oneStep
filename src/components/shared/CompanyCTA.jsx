import React from "react";

export default function CompanyCTA({
  showTag = true,
  tagText = "企業様向け / For Companies",
  title = "まずはお気軽にご相談ください",
  description = "貴社の事業成長を加速させる最適な人材ソリューションをご提案いたします。人材に関するお悩みは、One Stepにお任せください。",
  buttonText = "ご相談・お問い合わせはこちら →",
  buttonLink = "/company-contact",
}) {
  return (
    <div className="relative max-w-4xl mx-auto my-16 px-4">
      {/* Wall background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-inner opacity-30"></div>
      {/* Rope attachment dots */}
      <div className="absolute -top-8 left-1/4 w-3 h-3 bg-gray-600 rounded-full shadow-md"></div>
      <div className="absolute -top-8 right-1/4 w-3 h-3 bg-gray-600 rounded-full shadow-md"></div>
      {/* Left rope */}
      <div className="absolute -top-8 left-1/4 origin-bottom">
        <div
          className="w-1 bg-gradient-to-b from-white to-amber-900 shadow-sm"
          style={{
            height: "60px",
            transform: "rotate(-15deg)",
            transformOrigin: "top center",
          }}
        ></div>
      </div>
      {/* Right rope */}
      <div className="absolute -top-8 right-1/4 origin-bottom">
        <div
          className="w-1 bg-gradient-to-b from-white to-amber-900 shadow-sm"
          style={{
            height: "120px",
            transform: "rotate(15deg)",
            transformOrigin: "top center",
          }}
        ></div>
      </div>

      {/* Hanging board */}
      <section
        className="relative bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-xl p-8 shadow-2xl mx-auto"
        style={{
          transform: "rotate(-1deg)",
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 193, 7, 0.3)",
        }}
      >
        {/* Corner holes and chains */}
        <div className="absolute -top-2 left-8 w-4 h-4 bg-gray-300 rounded-full border-2 border-gray-400 shadow-inner"></div>
        <div className="absolute -top-2 right-8 w-4 h-4 bg-gray-300 rounded-full border-2 border-gray-400 shadow-inner"></div>
        <div className="absolute -top-1 left-10 w-1 h-2 bg-gray-400 rounded-full"></div>
        <div className="absolute -top-1 right-10 w-1 h-2 bg-gray-400 rounded-full"></div>

        {/* Optional red tag */}
        {showTag && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg border-2 border-red-400 transform rotate-1">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-400 rounded-full"></div>
            {tagText}
          </div>
        )}

        {/* Dynamic content */}
        <div style={{ transform: "rotate(1deg)" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 drop-shadow-sm">
            {title}
          </h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
            {description.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <div className="text-center">
            <a
              href={buttonLink}
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-700 hover:indigo-red-700 hover:to-purple-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-lg hover:shadow-xl"
            >
              {buttonText}
            </a>
          </div>
        </div>

        {/* Texture and shadow */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-10 rounded-xl pointer-events-none"></div>
        <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black opacity-10 rounded-full blur-sm"></div>
      </section>

      {/* Decorative side sticks */}
      <div className="absolute top-16 -left-2 w-1 h-8 bg-amber-900 opacity-30 transform rotate-12 rounded-full"></div>
      <div className="absolute top-16 -right-2 w-1 h-8 bg-amber-900 opacity-30 transform -rotate-12 rounded-full"></div>
    </div>
  );
}

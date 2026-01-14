import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { services } from "../Hero/ServiceData";
import { useFloatingPositions } from "../CustomHooks/useFloatingPositions";

/* ----------------------------------
   Internal Item Component
----------------------------------- */

const FloatingServiceItem = ({
  service,
  position,
  isActive,
  onEnter,
  onLeave,
  index,
  isVisible,
}) => {
  const { t } = useTranslation();
  if (!position) return null;

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`absolute cursor-pointer ${isActive ? "z-[100]" : "z-[1]"}`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `translate(-50%, -50%) scale(${isActive ? 1.3 : 1})`,
        willChange: "transform",
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.5s ease-out ${index * 150}ms, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`,
      }}
    >
      <div
        className={`relative transition-all duration-500 ease-out ${
          isActive
            ? "w-96 h-56 p-6 rounded-2xl"
            : "w-40 h-40 p-0 rounded-full"
        }`}
      >
        {/* Glow Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} shadow-2xl border border-white/30 ${
            isActive
              ? "rounded-2xl opacity-90"
              : "rounded-full opacity-80"
          }`}
        />

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white text-center">
          {/* Title */}
          <h3
            className={`font-bold transition-all duration-500 ${
              isActive ? "text-xl mb-2" : "text-sm px-4"
            }`}
          >
            {t(service.title)}
          </h3>

          {isActive ? (
            <div className="flex flex-col h-full w-full">
              {/* Scrollable content */}
              <div className="relative flex-1 max-h-32 overflow-y-auto px-2 pr-3 scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-white/10">
                <p className="text-sm text-white/90 mb-2">
                  {t(service.description)}
                </p>

                {service.points && (
                  <ul className="text-xs text-white/80 list-disc list-inside text-left">
                    {service.points.map((p, i) => (
                      <li key={i}>{t(p)}</li>
                    ))}
                  </ul>
                )}

                {/* Fade out */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 to-transparent" />
                </div>

              {/* CTA fixed at bottom */}
              {service.href && (
                <Link
                  to={service.href}
                  className="mt-2 self-center px-3 py-1.5 rounded-full bg-white text-black text-[11px] font-medium hover:bg-emerald-400 transition"
                >
                  View more →
                </Link>
              )}
            </div>
          ) : (
            <>
              {/* Hidden placeholders for smooth animation */}
              <p className="opacity-0 h-0 overflow-hidden text-sm">
                {t(service.description)}
              </p>
              {service.points && (
                <ul className="opacity-0 h-0 overflow-hidden">
                  {service.points.map((p, i) => (
                    <li key={i}>{t(p)}</li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>

        {/* Shine */}
        {isActive && (
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] animate-shine" />
          </div>
        )}
      </div>
    </div>
  );
};

/* ----------------------------------
   Public Component
----------------------------------- */

const FloatingServices = ({ height = 600, className = "" }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);

  const positions = useFloatingPositions(services.length);

  // Staggered fade-in
  useEffect(() => {
    if (!positions.length) return;

    let mounted = true;
    setVisibleItems([]);

    const timers = services.map((_, index) =>
      setTimeout(() => {
        if (mounted) {
          setVisibleItems((prev) => [...prev, index]);
        }
      }, index * 150)
    );

    return () => {
      mounted = false;
      timers.forEach(clearTimeout);
    };
  }, [positions.length]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ height }}>
      {services.map((service, index) => (
        <FloatingServiceItem
          key={index}
          service={service}
          position={positions[index]}
          isActive={hoveredIndex === index}
          onEnter={() => setHoveredIndex(index)}
          onLeave={() => setHoveredIndex(null)}
          index={index}
          isVisible={visibleItems.includes(index)}
        />
      ))}
    </div>
  );
};

export default FloatingServices;

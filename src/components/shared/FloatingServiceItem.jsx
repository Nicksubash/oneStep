import { Link } from 'react-router-dom';

const FloatingServiceItem = ({
  service,
  position,
  isHovered,
  onHover,
  onLeave,
}) => {
  if (!position) return null;

  return (
    <Link
      to={service.href || "#"}
      className={`absolute transition-all duration-500 ease-out cursor-pointer group ${isHovered ? 'z-50' : 'z-10'}`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.5)' : 'scale(1)'}`,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={`
        relative transition-all duration-500 ease-out
        ${isHovered ? 'w-96 h-56 p-6' : 'w-40 h-40 p-0'}
      `}>
        <div className={`
          absolute inset-0 bg-gradient-to-br ${service.gradient}
          ${isHovered ? 'rounded-2xl opacity-90' : 'rounded-full opacity-80'}
          transition-all duration-500 shadow-2xl border-2 border-white/30
        `}>
          <div className={`
            absolute inset-0 bg-gradient-to-br ${service.gradient}
            ${isHovered ? 'rounded-2xl blur-xl opacity-50' : 'rounded-full blur-lg opacity-30'}
            transition-all duration-500 -z-10
          `}></div>
        </div>

        <div className="relative z-10 h-full">
          {/* Text in circle */}
          <div className={`
            flex items-center justify-center text-white font-medium w-full h-full
            transition-all duration-500
            ${isHovered ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
          `}>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center leading-tight px-1 whitespace-pre-line">
            {service.titleLines ? service.titleLines.join('\n') : service.title}

            </span>
          </div>

          {/* Content */}
          <div className={`
            absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4
            transition-all duration-500
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}
          `}>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-sm text-white/90 leading-relaxed">{service.description}</p>
          </div>
        </div>

        {isHovered && (
          <>
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-white/60 rounded-full animate-bounce" />
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-white/40 rounded-full animate-bounce" />
            <div className="absolute top-1/2 -right-4 w-2 h-2 bg-white/50 rounded-full animate-bounce" />
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] animate-shine" />
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default FloatingServiceItem;
import { motion } from "framer-motion";
import { useLanguagePersistence } from "../CustomHooks/useLanguagePersistence";

const LanguageSwitcher = () => {
  const { changeLanguage, currentLanguage } = useLanguagePersistence();

  const isJa = currentLanguage === "ja";

  return (
    <div className="relative flex items-center w-[110px] h-9 bg-gray-100 rounded-full p-1">
      {/* Sliding indicator */}
      <motion.div
        className="absolute top-1 left-1 w-[50px] h-7 bg-white rounded-full shadow-sm"
        animate={{ x: isJa ? 0 : 52 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* JP */}
      <button
        onClick={() => changeLanguage("ja")}
        className={`relative z-10 w-[50px] h-7 text-sm font-medium flex items-center justify-center rounded-full transition-colors ${
          isJa ? "text-indigo-600" : "text-gray-500 hover:text-indigo-600"
        }`}
        aria-label="日本語"
      >
        🇯🇵 JP
      </button>

      {/* EN */}
      <button
        onClick={() => changeLanguage("en")}
        className={`relative z-10 w-[50px] h-7 text-sm font-medium flex items-center justify-center rounded-full transition-colors ${
          !isJa ? "text-indigo-600" : "text-gray-500 hover:text-indigo-600"
        }`}
        aria-label="English"
      >
        🇺🇸 EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
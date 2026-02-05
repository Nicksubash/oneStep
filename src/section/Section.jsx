import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const AccessSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Title (same style as News & Notices) */}
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-red-600 pb-2">
            {t("companyInfo.access.title")}
          </h2>

          {/* Address / Access Info */}
          <div className="mb-6 space-y-1 text-gray-700">
            <h3 className="font-semibold text-lg">
              {t("companyInfo.access.companyName")}
            </h3>
            <p>{t("companyInfo.access.address")}</p>
            <p>{t("companyInfo.access.station1")}</p>
            <p>{t("companyInfo.access.station2")}</p>
          </div>

          {/* Map */}
          <div className="w-full h-96 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.248255927196!2d136.90448897594996!3d35.100511361655705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037bd490091749%3A0x4fa31faf33348089!2z44CSNDU3LTA4NDUgQWljaGksIE5hZ295YSwgTWluYW1pIFdhcmQsIEthbm5vbmNoxY0sIDUtY2jFjW1l4oiSMjUg6Kaz6Z-z44OT44OrIDNj!5e0!3m2!1sen!2sjp!4v1749386315753!5m2!1sen!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};


export default AccessSection;
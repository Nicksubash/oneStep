import React from 'react';
import { useTranslation } from 'react-i18next';

const AccessContactSection = ({
  title,
  address,
  phone,
  email,
  fax,
  note,
  mapSrc,
  contactLabel = 'recruitment.contactSection.contact',
  accessLabel = 'recruitment.contactSection.access',
}) => {
  const { t } = useTranslation();
  return (
    <section className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
      <h2 className="text-4xl font-bold text-brand-primary text-center mb-12">{title}</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-brand-primary  mb-4">{t(contactLabel)}</h3>
            <div className="space-y-3">
              {phone && (
                <p className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-lg text-brand-navy">{phone}</span>
                </p>
              )}
              {fax && (
                <p className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9V4h12v5M6 14h12M6 10h12m-9 4v2m4-2v2m-7 3h10a2 2 0 002-2v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg text-brand-navy">{fax}</span>
                  <span className="text-sm text-brand-navy ml-1">(FAX)</span>
                </p>
              )}
              {email && (
                <p className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg text-brand-navy">{email}</span>
                </p>
              )}
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-brand-primary mb-4">{t(accessLabel)}</h3>
            <p className="text-brand-navy">
              {address}<br />
              {note && (
                Array.isArray(note) ? (
                  note.map((line, index) => (
                    <span key={index} className="text-sm text-gray-500 block">
                      {line}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-gray-500">{note}</span>
                )
              )}
            </p>
          </div>
        </div>
        {mapSrc && (
          <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default AccessContactSection; 
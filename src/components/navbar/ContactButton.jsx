import React from 'react';

const ContactButton = ({ href = "/contact", children = "お問い合わせ" }) => {
  return (
    <a
      href={href}
      className="relative px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </a>
  );
};

export default ContactButton;
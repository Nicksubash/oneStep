import React, { useState, useEffect } from 'react';
import { EMAILJS_CONFIG, initializeEmailJS, sendEmail } from '../../config/emailjs';

const CompanyContactForm = () => {
  const [form, setForm] = useState({
    company: '',
    department: '',
    nameKanji: '',
    nameFurigana: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); 

  // Initialize EmailJS
  useEffect(() => {
    initializeEmailJS();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear status when user starts typing again
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: `${form.nameKanji} (${form.nameFurigana})`,
        from_email: form.email,
        company: form.company,
        department: form.department,
        message: form.message,
        to_name: "One Step株式会社",
        reply_to: form.email,
      };

      const result = await sendEmail(
        EMAILJS_CONFIG.TEMPLATES.COMPANY_CONTACT,
        templateParams
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setForm({
        company: '',
        department: '',
        nameKanji: '',
        nameFurigana: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <p className="text-gray-700 mb-3 text-sm sm:text-base">
          <strong>※「*」は必須項目です / * indicates required fields</strong>
        </p>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  お問い合わせが正常に送信されました！ / Your inquiry has been sent successfully!
                </p>
                <p className="text-sm text-green-700 mt-1">
                  3営業日以内にご返信いたします。 / We will respond within 3 business days.
                </p>
              </div>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-800">
                  送信に失敗しました。 / Failed to send message.
                </p>
                <p className="text-sm text-red-700 mt-1">
                  しばらく時間をおいて再度お試しください。 / Please try again later.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Company / Organization Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            会社・組織名 / Company / Organization Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="company"
            required
            value={form.company}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            部署名・部門名 / Department
          </label>
          <input
            type="text"
            name="department"
            value={form.department}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        {/* Name in Kanji */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            氏名（漢字） / Name in Kanji <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nameKanji"
            required
            value={form.nameKanji}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        {/* Name in Furigana */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            氏名（ふりがな） / Name in Furigana <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nameFurigana"
            required
            value={form.nameFurigana}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            メールアドレス / Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="example@domain.com"
          />
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            ※メールアドレスの形式で入力してください / Please enter a valid email format.
          </p>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            お問い合わせ内容 / Message
          </label>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="お問い合わせ内容をご記入ください / Please enter your inquiry"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
        <button 
          type="submit"
          disabled={isSubmitting}
          className={`group font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-md transition-all duration-300 text-sm sm:text-base relative overflow-hidden ${
          isSubmitting
          ? 'bg-brand-navy cursor-not-allowed'
          : 'bg-gradient-to-r from-brand-primary to-brand-navy text-white'
          }`
         }>
          <span className="relative z-10 text-white">
            {isSubmitting ? '送信中... / Sending...' : '送信 / Submit'}
            </span>
            {!isSubmitting && (
              <div className="absolute inset-0 bg-gradient-to-l from-brand-primary to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"></div>
              )}
        </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyContactForm;
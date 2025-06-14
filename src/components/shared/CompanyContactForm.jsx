import React, { useState } from 'react';

const CompanyContactForm = () => {
  const [form, setForm] = useState({
    company: '',
    department: '',
    nameKanji: '',
    nameFurigana: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // TODO: Handle form submission (API, email, Formspree, etc.)
    alert('フォームが送信されました！ / Form submitted successfully!');
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <p className="text-gray-700 mb-3 text-sm sm:text-base">
          <strong>※「*」は必須項目です / * indicates required fields</strong>
        </p>

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
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="お問い合わせ内容をご記入ください / Please enter your inquiry"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-md transition-colors duration-200 text-sm sm:text-base"
          >
            送信 / Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyContactForm;
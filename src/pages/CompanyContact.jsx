import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/shared/Footer';
import InfoTitle from '../components/shared/InfoTitle';

export default function CompanyContact() {
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
  };

  return (
    <>
      <Navbar />

      <InfoTitle
        backgroundImage="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=1600&h=600&fit=crop&crop=center"
        title="お問い合わせフォーム"
        description="Contact Form for Companies"
        highlightText="「信頼できるビジネスパートナーをお探しの企業様へ」"
      />

      <div className="max-w-3xl mx-auto px-6 py-20">
        <form onSubmit={handleSubmit} className="space-y-8">
          <p className="text-gray-700 mb-6">
            <strong>※「*」は必須項目です / * indicates required fields</strong>
          </p>

          {/* Company / Organization Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              会社・組織名 / Company / Organization Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              required
              value={form.company}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              部署名・部門名 / Department
            </label>
            <input
              type="text"
              name="department"
              value={form.department}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Name in Kanji */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              氏名（漢字） / Name in Kanji <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nameKanji"
              required
              value={form.nameKanji}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Name in Furigana */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              氏名（ふりがな） / Name in Furigana <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nameFurigana"
              required
              value={form.nameFurigana}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              メールアドレス / Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="example@domain.com"
            />
            <p className="text-sm text-gray-500 mt-1">
              ※メールアドレスの形式で入力してください / Please enter a valid email format.
            </p>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              お問い合わせ内容 / Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="お問い合わせ内容をご記入ください / Please enter your inquiry"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
            >
              送信 / Submit
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

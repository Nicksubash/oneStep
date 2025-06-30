import React, { useState, useEffect } from "react";
import { EMAILJS_CONFIG, initializeEmailJS, sendEmail } from '../../config/emailjs';

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    birthDate: "",
    nationality: "",
    visaType: "",
    japaneseLevel: "",
    desiredJob: "",
    educationExperience: "",
    contact: "",
    selfIntro: "",
    majorField: "",
    consultation: "",
    resume: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  // Initialize EmailJS
  useEffect(() => {
    initializeEmailJS();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
    // Clear status when user starts typing again
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        gender: formData.gender,
        birth_date: formData.birthDate,
        nationality: formData.nationality,
        visa_type: formData.visaType,
        japanese_level: formData.japaneseLevel,
        desired_job: formData.desiredJob,
        education_experience: formData.educationExperience,
        contact: formData.contact,
        self_intro: formData.selfIntro,
        major_field: formData.majorField,
        consultation: formData.consultation,
        to_name: "One Step株式会社",
        reply_to: formData.email,
      };

      const result = await sendEmail(
        EMAILJS_CONFIG.TEMPLATES.JOB_APPLICATION,
        templateParams
      );

      console.log('Job application sent successfully:', result);
      setSubmitStatus('success');
      setFormData({
        fullName: "",
        email: "",
        gender: "",
        birthDate: "",
        nationality: "",
        visaType: "",
        japaneseLevel: "",
        desiredJob: "",
        educationExperience: "",
        contact: "",
        selfIntro: "",
        majorField: "",
        consultation: "",
        resume: null,
      });
    } catch (error) {
      console.error('Job application send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="origami-fold bg-white rounded-2xl p-8 japanese-shadow max-w-4xl mx-auto space-y-6"
    >
      <h2 className="md:text-3xl text-2xl font-bold text-center mb-6 text-brand-primary brush-stroke">
        🌸 就職相談申し込みフォーム / 求人応募フォーム
      </h2>
      <p className="text-gray-600 text-center mb-6">
        💡 今すぐ日本の求人に応募しましょう。<br/>記入は日本語または英語でOKです。個人情報は厳重に管理します。
      </p>

      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-md p-6 mb-4 text-center">
            <div className="flex flex-col items-center space-y-2">
              <svg
               className="h-8 w-8 text-green-500"
               viewBox="0 0 20 20"
               fill="currentColor">
              <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"/>
              </svg>
              <p className="text-lg font-semibold text-green-800">
              お問い合わせありがとうございます
              </p>
            </div>
            <p className="text-sm  text-green-800 mt-4">
              応募が正常に送信されました！(Your application has been sent successfully!)
            </p>
            <p className="text-sm text-green-700 mt-1">3営業日以内にご連絡いたします。(We will contact you within 3 business days.)
            </p>
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
                送信に失敗しました。 / Failed to send application.
              </p>
              <p className="text-sm text-red-700 mt-1">
                しばらく時間をおいて再度お試しください。 / Please try again later.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Full Name */}
        <InputField
          label="氏名 / Full Name *"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="田中太郎"
          required
          disabled={isSubmitting}
        />

        {/* Email */}
        <InputField
          label="メールアドレス / Email *"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@email.com"
          required
          disabled={isSubmitting}
        />

        {/* Gender */}
        <SelectField
          label="性別 / Gender *"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          options={[
            { value: "", label: "選択してください / Please select", disabled: true },
            { value: "male", label: "男性 / Male" },
            { value: "female", label: "女性 / Female" },
            { value: "other", label: "その他 / Other" },
          ]}
        />

        {/* Birth Date */}
        <InputField
          label="生年月日 / Date of Birth *"
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />

        {/* Nationality */}
        <InputField
          label="国籍 / Nationality *"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          placeholder="例: ネパール / Japan / Vietnam"
          required
          disabled={isSubmitting}
        />

        {/* Visa Type */}
        <SelectField
          label="在留資格 / Visa Type *"
          name="visaType"
          value={formData.visaType}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          options={[
            { value: "", label: "選択してください / Please select" },
            { value: "留学生", label: "留学生 / Student Visa" },
            { value: "技能実習", label: "技能実習 / Skilled Labor" },
            { value: "企業内転勤", label: "企業内転勤 / Intra-company Transferee" },
            { value: "専門職", label: "専門職 / Specialist Visa" },
          ]}
        />

        {/* Japanese Level */}
        <SelectField
          label="日本語能力（N1〜N5など）*"
          name="japaneseLevel"
          value={formData.japaneseLevel}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          options={[
            { value: "", label: "選択してください / Please select" },
            { value: "N1", label: "N1" },
            { value: "N2", label: "N2" },
            { value: "N3", label: "N3" },
            { value: "N4", label: "N4" },
            { value: "N5", label: "N5" },
          ]}
        />

        {/* Desired Job */}
        <InputField
          label="希望職種 / Desired Job *"
          name="desiredJob"
          value={formData.desiredJob}
          onChange={handleChange}
          placeholder="エンジニア, 介護, 販売など"
          required
          disabled={isSubmitting}
        />

        {/* Contact */}
        <InputField
          label="電話番号 *"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="080-1234-5678"
          required
          disabled={isSubmitting}
        />

        {/* Major Field */}
        <InputField
          label="専攻分野 / Major Field"
          name="majorField"
          value={formData.majorField}
          onChange={handleChange}
          placeholder="コンピューターサイエンス"
          disabled={isSubmitting}
        />
      </div>

      {/* Education & Experience */}
      <TextAreaField
        label="学歴・職歴 / Education & Experience *"
        name="educationExperience"
        value={formData.educationExperience}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        placeholder="学歴・職歴を詳しく記入してください"
      />

      {/* Self Introduction */}
      <TextAreaField
        label="自己PR / Self Introduction *"
        name="selfIntro"
        value={formData.selfIntro}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        placeholder="自己PRを記入してください"
      />

      {/* Consultation */}
      <TextAreaField
        label="ご相談内容 / Consultation Content"
        name="consultation"
        value={formData.consultation}
        onChange={handleChange}
        disabled={isSubmitting}
        placeholder="就職についてのご質問やご相談をお聞かせください"
      />

      {/* Resume Upload */}
      {/* <div>
        <label className="block mb-2 font-semibold text-gray-700">
          履歴書アップロード（PDF推奨）*
        </label>
        <input
          type="file"
          name="resume"
          accept="application/pdf"
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
      </div> */}

      {/* Submit Button */}
      <div className="text-center mt-6">
        <button
        type="submit"
        disabled={isSubmitting}
        className={`font-semibold px-6 sm:px-8 py-3 rounded-full shadow-md transition-all duration-300 text-white text-base sm:text-lg
          ${
            isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-brand-primary to-brand-navy hover:from-brand-navy hover:to-brand-primary'
          }`}>
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                送信中... / Sending...
              </div>) : ('📨 相談を申し込む / 送信する')}
        </button>
      </div>
    </form>
  );
}

// Reusable Input Component
function InputField({ label, name, type = "text", value, onChange, placeholder, required = false, disabled = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
    </div>
  );
}

// Reusable Select Component
function SelectField({ label, name, value, onChange, options = [], required = false, disabled = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
      >
        {options.map(({ value, label, disabled: optionDisabled = false }) => (
          <option key={value} value={value} disabled={optionDisabled}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

// Reusable TextArea Component
function TextAreaField({ label, name, value, onChange, placeholder, required = false, disabled = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
    </div>
  );
}
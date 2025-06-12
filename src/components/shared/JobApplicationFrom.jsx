import React, { useState } from "react";

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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("応募が送信されました。3営業日以内にご連絡いたします。");
    // add submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="origami-fold bg-white rounded-2xl p-8 japanese-shadow max-w-4xl mx-auto space-y-6"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 brush-stroke">
        🌸 就職相談申し込みフォーム / 求人応募フォーム
      </h2>
      <p className="text-gray-600 text-center mb-6">
        💡 今すぐ日本の求人に応募しましょう。記入は日本語または英語でOKです。個人情報は厳重に管理します。
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Full Name */}
        <InputField
          label="氏名 / Full Name *"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="田中太郎"
          required
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
        />

        {/* Gender */}
        <SelectField
          label="性別 / Gender *"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
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
        />

        {/* Nationality */}
        <InputField
          label="国籍 / Nationality *"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          placeholder="例: ネパール / Japan / Vietnam"
          required
        />

        {/* Visa Type */}
        <SelectField
          label="在留資格 / Visa Type *"
          name="visaType"
          value={formData.visaType}
          onChange={handleChange}
          required
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
        />

        {/* Contact */}
        <InputField
          label="電話番号 *"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="080-1234-5678"
          required
        />

        {/* Major Field */}
        <InputField
          label="専攻分野 / Major Field"
          name="majorField"
          value={formData.majorField}
          onChange={handleChange}
          placeholder="コンピューターサイエンス"
        />
      </div>

      {/* Education & Experience */}
      <TextAreaField
        label="学歴・職歴 / Education & Experience *"
        name="educationExperience"
        value={formData.educationExperience}
        onChange={handleChange}
        required
        placeholder="学歴・職歴を詳しく記入してください"
      />

      {/* Self Introduction */}
      <TextAreaField
        label="自己PR / Self Introduction *"
        name="selfIntro"
        value={formData.selfIntro}
        onChange={handleChange}
        required
        placeholder="自己PRを記入してください"
      />

      {/* Consultation */}
      <TextAreaField
        label="ご相談内容 / Consultation Content"
        name="consultation"
        value={formData.consultation}
        onChange={handleChange}
        placeholder="就職についてのご質問やご相談をお聞かせください"
      />

      {/* Resume Upload */}
      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          履歴書アップロード（PDF推奨）*
        </label>
        <input
          type="file"
          name="resume"
          accept="application/pdf"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
        />
      </div>

      {/* Submit Button */}
      <div className="text-center mt-6">
        <button
          type="submit"
          className="zen-border bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-indigo-700 hover:to-purple-800 transition-all transform hover:scale-105 japanese-shadow"
        >
          📨 相談を申し込む / 送信する
        </button>
      </div>
    </form>
  );
}

// Reusable Input Component
function InputField({ label, name, type = "text", value, onChange, placeholder, required = false }) {
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
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
      />
    </div>
  );
}

// Reusable Select Component
function SelectField({ label, name, value, onChange, options = [], required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
      >
        {options.map(({ value, label, disabled = false }) => (
          <option key={value} value={value} disabled={disabled}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

// Reusable TextArea Component
function TextAreaField({ label, name, value, onChange, placeholder, required = false }) {
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
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
      />
    </div>
  );
}

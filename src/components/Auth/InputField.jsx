// src/components/Auth/InputField.jsx
import React from 'react';

const InputField = ({ id, label, type, value, onChange, required }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="auth-input"
      />
    </div>
  );
};

export default InputField;
// src/components/Auth/AuthLayout.jsx
import React from 'react';
import './../../styles/auth.css';

const AuthLayout = ({ children, title }) => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="logo-section">
            <header/>
          <h1>YourLogo</h1>
        </div>
        <h2 className="auth-title">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
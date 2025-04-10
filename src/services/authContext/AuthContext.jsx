import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // login() just stores the token and fetches user info
  const login = async (token) => {
    localStorage.setItem('token', token);
    try {
      const res = await fetch('http://localhost:8080/auth/current-user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else {
        logout(); // token invalid or expired
      }
    } catch (err) {
      logout();
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // on app load, check if token exists and try to log in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      login(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

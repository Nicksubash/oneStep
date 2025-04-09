// src/services/AuthService.jsx
import axios from "axios";

const API_URL = "http://localhost:8080/auth/login";

class AuthService {
  async login(username, password) {
    const response = await axios.post(API_URL, {
      username,
      password,
    });

    if (response.data.token) {
      localStorage.setItem("userToken", response.data.token);
    }

    return response.data;
  }

  logout() {
    localStorage.removeItem("userToken");
  }

  getToken() {
    return localStorage.getItem("userToken");
  }
}

export default new AuthService();

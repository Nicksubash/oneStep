import axios from 'axios';

const API_URL = 'http://localhost:8080/auth/login'; 

class AuthService {
  // Login method
  login(username, password) {
    return axios
      .post(API_URL, { username, password })
      .then((response) => {
        // Save the JWT token to localStorage or sessionStorage
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  // Logout method
  logout() {
    localStorage.removeItem('user');
  }

  // Get current user (from localStorage)
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  // Check if the user is logged in
  isAuthenticated() {
    const user = this.getCurrentUser();
    return user && user.token ? true : false;
  }
}

export default new AuthService();

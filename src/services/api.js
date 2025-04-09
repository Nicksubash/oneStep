import axios from "axios";
import AuthService from  "./AuthService"

const api = axios.create({
    baseURL : "http://localhost:8080/",
});

api.interceptors.request.use((config) =>{
    const token = AuthService.getToken();
    if(token){
        config.headers.Authorization= `Bearer ${token}`;
    }
    return config;
});

export default api;
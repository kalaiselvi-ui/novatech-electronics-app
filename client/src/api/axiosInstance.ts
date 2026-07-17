import axios from "axios";

// 1. Create instance with default base URL and headers
export const API = axios.create({
  baseURL: "http://localhost:4000/api", // Adjust port/path if needed
  withCredentials: true, // 👈 Required if your backend uses HTTP-Only Cookies
});

// 2. Add Request Interceptor to automatically attach JWT token
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // or pull from Zustand store state
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

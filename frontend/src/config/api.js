import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api/auth/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.request.use(
  (config) => {
    // Apne token ka naam check karlein (jaise 'token' ya 'jwt')
    const token = localStorage.getItem('token'); 
    
    if (token) {
      // Backend agar Bearer token expect kar raha hai:
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api
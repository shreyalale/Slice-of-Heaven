
// import axios from 'axios';

// const api = axios.create({
//     baseURL: 'http://localhost:8080/api'
// });

// // Add token to all requests
// api.interceptors.request.use(config => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

// // Handle token expiration
// api.interceptors.response.use(
//     response => response,
//     error => {
//         if (error.response && error.response.status === 401) {
//             alert('Session expired. Please log in again.');
//             localStorage.clear();
//             window.location.href = '/login';
//         } else if (error.response && error.response.status === 403) {
//             alert('Access denied. You may not have permission to view this data.');
//         } else {
//             console.error('API error:', error);
//         }
//         return Promise.reject(error);
//     }
// );

// export default api;

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
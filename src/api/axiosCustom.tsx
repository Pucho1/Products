import axios from 'axios';
// import Cookies from 'js-cookie';

const axs = axios.create({
  // baseURL: import.meta.env.VITE_EXTERNAL_APP_ax,
  baseURL: 'https://dummyjson.com/',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
}); // export this and use it in all your components

// export const addToken = (token: string) => {
//   ax.defaults.headers.Authorization = `Bearer ${token}`;
// };

// export const removeBearerToken = () => {
//   delete ax.defaults.headers.Authorization;
// };

// export const routes = {
//   login: '/security/get/token',
//   me: 'rest/get/config',
//   access: `/rest/user/header/es/get/header`,
// };

export default axs;

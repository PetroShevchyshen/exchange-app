import axios from "axios";

const axiosConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
};

export const instance = axios.create(axiosConfig);

instance.interceptors.request.use(
  (req) => req,
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default instance;

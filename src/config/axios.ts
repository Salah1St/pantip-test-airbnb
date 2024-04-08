import { getAccessToken, removeAccessToken } from "@/utils/localStroage";
import originAxios from "axios";
export const innerAxios = originAxios.create({
  baseURL: process.env.INNER_API_URL,
  timeout: 10000,
});
export const axios = originAxios.create({
  baseURL: process.env.API_URL,
  timeout: 1000,
});

axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err),
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error);

    switch (error?.response?.data?.ref) {
      case "TokenExpiredError":
        removeAccessToken();
        window.location.replace("/");
        return Promise.reject(error);
      case "JsonWebTokenError":
        console.log(error);
        removeAccessToken();
        window.location.replace("/");
        break;
      case "NotFoundData":
        removeAccessToken();
        window.location.replace("/");
        break;
      default:
        break;
    }
    return Promise.reject(error);
  },
);
export default axios;

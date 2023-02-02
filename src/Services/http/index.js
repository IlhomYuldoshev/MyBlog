import axios from "axios";

// export const API_URL = "http://localhost:1202/api";
export const API_URL = "https://myblogbackend-production.up.railway.app/api";

const client = axios.create({
  baseURL: API_URL,
  headers: {'Content-Type': 'application/json'},
  withCredentials: true
});

client.interceptors.request.use(config => {
  if (!config.headers) {
    config.headers = {};
  }

  config.headers.Authorization = `Bearer ${window.localStorage.getItem("token")}`;
  return config;
})

client.interceptors.response.use(config => {
  return config;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;

    try {
      const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
      localStorage.setItem("token", response.data.accessToken);
      return await client.request(originalRequest);
    } catch (err) {
      console.log("User is not authorized!", err)
    }
  }
  throw error;
})

export default client;

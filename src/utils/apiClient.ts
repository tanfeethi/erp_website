import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://newma3refabackend.tanfeethi.tanfeethi.com.sa",
});

apiClient.interceptors.request.use((config) => {
  const lang = localStorage.getItem("lang");
  if (lang) {
    config.headers["lang"] = lang;
  }
  return config;
});

export default apiClient;

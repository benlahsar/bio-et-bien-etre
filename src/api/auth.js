import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  withXSRFToken: true,
  withCredentials: true,
});

export const getCSRFToken = () => {
  return api.get("/sanctum/csrf-cookie");
};

export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "https://ecom-project-production-30fc.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // optional but good
});

export default api;

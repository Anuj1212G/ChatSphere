import axios from "axios";

const BASE_URL ="https://chatsphere-s6h3.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});

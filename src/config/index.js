import { adminBaseUrl, userBaseUrl } from "./baseUrl";
import axios from "axios";

export const adminAxiosInstance = axios.create({
  baseURL: adminBaseUrl,
});

export const userAxiosInstance = axios.create({
  baseURL: userBaseUrl,
});

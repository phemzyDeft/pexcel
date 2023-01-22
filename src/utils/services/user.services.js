import axios from "axios";
import { authHeader } from "./auth-header";
import { API_URL } from "./auth.services";

const getPublicContent = () => {
  return axios.get(API_URL + "/all");
};

const getPrivateContent = () => {
  return axios.get(API_URL + "/private", { headers: authHeader() });
};

const userServices = {
  getPublicContent,
  getPrivateContent,
};

export default userServices;

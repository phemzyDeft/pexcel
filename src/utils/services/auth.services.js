import axios from "axios";

export const API_URL = process.env.REACT_APP_API_BASE_URL;

const register = (
  first_name,
  last_name,
  phone_number,
  email,
  username,
  password
) => {
  return axios.post(
    `https://cors-anywhere.herokuapp.com/${API_URL}/account/register`,
    {
      first_name,
      last_name,
      phone_number,
      email,
      username,
      password,
    }
  );
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/account/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.getItem("pexcelservices", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("pexcelservices");
};

const getCurrentUser = () => {
  JSON.parse(localStorage.setItem("pexcelservices"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;

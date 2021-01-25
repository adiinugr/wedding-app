import axios from "axios";
import authHeader from "./authHeader";

const API_URL = process.env.REACT_APP_API_URL;

export const login = (email, password) => {
  return axios.post(`${API_URL}/user/login`, {
    email,
    password,
  });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const register = (name, email, password) => {
  return axios.post(`${API_URL}/user/register`, {
    name,
    email,
    password,
  });
};

export const getCurrentUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return axios.get(`${API_URL}/user/${user.user._id}`, {
      headers: authHeader(),
    });
  } else {
    return null;
  }
};

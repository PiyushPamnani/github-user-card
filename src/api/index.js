import axios from "axios";

const API = axios.create({
  baseURL: "https://api.github.com/users",
});

export const fetchUser = (username) => API.get(`/${username}`);

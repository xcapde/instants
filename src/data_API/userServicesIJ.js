import axios from "axios";
const baseURL = "http://localhost:8080";
export const userServicesIJ = {
  getAllUsers() {
    const users = axios.get(baseURL + "/users").then((res) => {
      return res.data;
    });
    return users;
  },

};
import axios from "axios";
const baseURL = "http://localhost:8080";
export const commentServicesIJ = {
  getAllComments() {
    const comments = axios.get(baseURL + "/comments").then((res) => {
      return res.data;
    });
    return comments;
  },

  postComment(data) {
    const postComment = axios.post(baseURL + `/comments`, data).then((res) => {
      return res.data;
    });
    return postComment;
  },

};
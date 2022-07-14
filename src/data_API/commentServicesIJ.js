import axios from "axios";
const baseURL = "http://localhost:8080";
export const commentServicesIJ = {
  getCommentsByInstantId(id) {
    const comments = axios.get(baseURL + "/instants" + {id} + "/comments").then((res) => {
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
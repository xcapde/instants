import axios from "axios";
const baseURL = "http://localhost:8080";
export const commentServicesIJ = {

  getCommentsByInstantId(instantId) {
    const comments = axios.get(baseURL + "/instants/" + instantId + "/comments").then(res => res.data);
    return comments;
  },

  postComment(data) {
    const postComment = axios.post(baseURL + `/comments`, data).then(res => {
      return res.data;
    });
    return postComment;
  },

};
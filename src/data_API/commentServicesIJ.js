import axios from "axios";
const baseURL = "http://localhost:8080";
export const commentServicesIJ = {

  getCommentsByInstantId(instantId) {
    const comments = axios.get(baseURL + "/instants/" + instantId + "/comments").then(res => {
      console.log(instantId, res.data)

      return res.data});
    return comments;
  },

  postComment(data, instantId) {
    const postComment = axios.post(baseURL + `/comments`, {data, instantId}).then(res => {
      console.log(data, instantId, res)
      return res.data;
    });
    return postComment;
  },

};
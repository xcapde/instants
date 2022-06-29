import axios from "axios";
const baseURL = "https://62b9c3f641bf319d2284f421.mockapi.io";
export const instantServices = {
  getAllInstants() {
    const instants = axios.get(baseURL + "/instants").then((res) => {
      return res.data;
    });
    return instants;
  },

  deleteAInstant(id) {
    const deletedInstant = axios.delete(baseURL + `/instants/`+id).then((res) => {
      return res.data;
    });
    return deletedInstant;
  },

  postInstant(data) {
    const postInstant = axios.post(baseURL + `/instants`, data).then((res) => {
      return res.data;
    });
    return postInstant;
  },

  putInstant(id, data) {
    const updatedInstant = axios.put(baseURL + `/instants/${id}`, data).then((res) => {
        return res.data;
      });
    return updatedInstant;
  },

  getInstantById(id) {
    const instantById = axios.get(baseURL + `/instants/`+id).then(res => {
      return res.data;
    });
    return instantById;
  },

  getInstantsBySearch(text) {
    const instantsBySearch = axios.get(baseURL + `/instants/`).then(res => {  
      
      let searchResult = []

      // console.log(text)
      // console.log(res.data)

        for(let instant of res.data){
          if (instant.title.includes(text) || instant.description.includes(text)){
            searchResult.push(instant)
          }
          console.log(searchResult)
          
        } return searchResult;      
    });

    return instantsBySearch;
  },


};
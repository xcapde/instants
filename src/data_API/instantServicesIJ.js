import axios from "axios";
const baseURL = "http://localhost:8080";
export const instantServicesIJ = {
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

  getInstantsBySearch(value) {
    // const instantsBySearch = axios.get(baseURL + `/instants?search=${search}`).then(res => {  
    const instantsBySearch = axios.get(baseURL + `/instants`).then(res => {  

      if(res){
        let searchResult = [] 

        for(let instant of res.data){    

          if (instant.title.toLowerCase().includes(value) || instant.description.toLowerCase().includes(value)){
            searchResult.push(instant)
          }
        } return searchResult;        
      }           
    });

    return instantsBySearch;
  },


};
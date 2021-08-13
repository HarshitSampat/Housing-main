
import axios from 'axios'

//Services for property 
const PROPERTY_API_BASE_URL = "http://localhost:3001/api/interior"; 


class InteriorService{
      
   // get  Property
 getInterior(id) {
      return axios.get(PROPERTY_API_BASE_URL + '/:id' +id)
      
    }
    // get all data
    getAllInterior()
    {
        return axios.get(PROPERTY_API_BASE_URL + '/')
    }

   // to add property 
   addInterior(data) {
      console.log(data);
      return axios.post(PROPERTY_API_BASE_URL + '/', data)
  }
  
  deleteInterior(id) {
    return axios.delete(PROPERTY_API_BASE_URL+'/'+id)
  }

}

    
   
    export default new InteriorService();
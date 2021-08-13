
import axios from 'axios'

//Services for property 
const PROPERTY_API_BASE_URL = "http://localhost:3001/api/packersAndMovers"; 


class PAMService{
      
   // get  Property
 getPackersAndMovers(id) {
      return axios.get(PROPERTY_API_BASE_URL + '/${id}' +id)
      
   }
getallPackersAndMovers()
  {
   return axios.get(PROPERTY_API_BASE_URL + '/')
   }


   // to add packersAndmovers
   addPackersAndmoversData(data) {
      console.log(data);
      return axios.post(PROPERTY_API_BASE_URL + '/', data)
      
    }
    
    deletedataOfPAm(id) {
        return axios.delete(PROPERTY_API_BASE_URL+`/${id}`)
     }
    }
   
    export default new PAMService();
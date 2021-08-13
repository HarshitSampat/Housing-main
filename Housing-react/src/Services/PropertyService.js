
import axios from 'axios'

//Services for property 
const PROPERTY_API_BASE_URL = "http://localhost:3001/api"; 


class PropertyService{
      
   // get  Property
 getProperty(id) {
      return axios.get(PROPERTY_API_BASE_URL + '/property/' +id)
      
   }
getallProperty()
  {
   return axios.get(PROPERTY_API_BASE_URL + '/property/')
   }
   getPropertyByUserId(User) {
      return axios.get(PROPERTY_API_BASE_URL + '/property/User/' +User)
   }

   // to add property 
   addProperty() {
      return axios.post(PROPERTY_API_BASE_URL + '/')
   }
    }
   
    export default new PropertyService();
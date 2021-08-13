
import axios from 'axios'

//Services for property 
const PROPERTY_API_BASE_URL = "http://localhost:3001/api/propertyManagement"; 


class PropertyMangementService{
      
   // get  Property
    getPropetyManagementDetailsByI(id) {
      return axios.get(PROPERTY_API_BASE_URL + '/:id' +id)
   }
getPropertyManagement()
  {
   return axios.get(PROPERTY_API_BASE_URL + '/')
   }


   // to add PropertyMangement
   addPropeertyManagement(data) {
      console.log(data);
      return axios.post(PROPERTY_API_BASE_URL + '/', data)
      
    }
    
    deletedataOfPropertyMangeMEnt(id) {
        return axios.delete(PROPERTY_API_BASE_URL+'/'+id)
     }
    }
   
    export default new PropertyMangementService();

import axios from 'axios'

//Services for property 
const PROPERTY_API_BASE_URL = "http://localhost:3001/api/user"; 


class UserService{

    // get all User
    getallUser() { 
        
      return axios.get(PROPERTY_API_BASE_URL + '/')
    }
      
//    // get  User
  getUser(id) {
    return axios.get(PROPERTY_API_BASE_URL + '/' + id)
  }
   
    login()
    {
   return axios.post(PROPERTY_API_BASE_URL + '/login/')
    }


   // to add property 
   register() {
      return axios.post(PROPERTY_API_BASE_URL + '/register')
  }
  

  deleteUser(id)
  {
    return axios.delete(PROPERTY_API_BASE_URL+`/${id}`)
   }
}
    
   
    export default new UserService();
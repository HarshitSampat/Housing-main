import React, { useEffect} from 'react'
import Footer from '../components/Footer'
import axios from 'axios'


function RentalFurnitureInitiate() {

    useEffect(() => {
        async function fetchdata() {
            const res = await axios.get("http://localhost:3001/api/interior")
            console.log(res);
        }
        fetchdata();
    }
        
    )

        
    return (
        <>  
        
        <Footer/>
        </>
    )
}

export default RentalFurnitureInitiate      

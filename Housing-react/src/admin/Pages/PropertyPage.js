import React, { useState,useEffect} from 'react'
import Navbar from '../Components/AdminNavbar'
import MovingController from '../Components/MovingController'
import PropertyService from '../../Services/PropertyService'

function PropertyPage() {
    const [property, setProperty] = useState([])
    const deleteProperty = async () => {
        
    }

    useEffect(() => {
        PropertyService.getallProperty().then(res=> setProperty(res.data)).catch(err=>console.log(err))
    }, [])
    return (
        <div>
            <Navbar />
            <MovingController/>
            <div className=" container mt-5">

                <h3 className="text-center mb-5">Information of listed Property for this Site is just at your below</h3>
            <table className="table table-striped">
            <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Rent/Buy</th>
            <th scope="col">Property</th>
            <th scope="col">Bhk</th>
            <th scope="col">Furnished_Type</th>
            <th scope="col">City</th>
            <th scope="col">Reemove Property</th>
            <th scope="col">Property Image</th>
            </tr>
            </thead>
                <tbody>
                    {property.map(item => {
                        return (
                            <>
                                
                            <tr>
                                <th scope="row">{ item._id}</th>
                                <td>{item.Rent_Buy}</td>
                                <td>{item.Property_Type}</td>
                                <td>{item.Bhk}</td>
                                <td>{item.furnished_Type}</td>
                                <td>{item.City}</td>
                                <td><button onClick={() => deleteProperty(item._id)} className="bg-info border-circle text-dark">Delete</button></td>
                                <td><img width="40px" height="40px" style={{borderRadius:"50%"}} src={item.Image} alt="property"/></td>
                                    </tr>
                                    
                                </>
                            )})}
                            </tbody>
                        </table>
                    </div>
                </div>
    )
}

export default PropertyPage

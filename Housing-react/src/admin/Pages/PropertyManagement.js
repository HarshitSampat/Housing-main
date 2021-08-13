import React, { useState,useEffect} from 'react'
import Navbar from '../Components/AdminNavbar'
import MovingController from '../Components/MovingController'
import PropertyManagementServices from '../../Services/PropertyMangementService'
import UserService from '../../Services/UserServices'

function PropertyManagement() {
    const [propertyManagement, setPropertyManagement] = useState([])
    console.log(propertyManagement);

    const deletePropertyManagementRequest = async (id) => {
        PropertyManagementServices.deletedataOfPropertyMangeMEnt(id).then(res => console.log(res.data))
        window.location.reload()
    }

    useEffect(() => {
        PropertyManagementServices.getPropertyManagement().then(res => setPropertyManagement(res.data)).catch(err => console.log(err))
        
        const Userdata = UserService.getallUser().then(res=>console.log(res)).catch(err=>console.log(err))
    }, [])
    return (
        <div>
            <Navbar />
            <MovingController/>
            <div className=" container mt-5">

                <h3 className="text-center mb-5">Property Management Inquries for this Site are just at your below</h3>
            <table className="table table-striped">
            <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Property's City</th>
            <th scope="col">House Configuration</th>
            <th scope="col">Expected Rent</th>
                            
            </tr>
            </thead>
                <tbody>
                        {propertyManagement.map(item => {
                            return (
                                <tr>
                                <th scope="row">{item._id}</th>
                                
                                <td>{item.Property_City}</td>
                                <td>{item.House_Configuration}</td>
                                <td>{item.ExpectedRent}</td>
                                <td>{item.createdAt}</td>
                                <td><button onClick={() => deletePropertyManagementRequest(item._id)} className="bg-info border-circle text-dark">Delete</button></td>
                                </tr>
                            )})}
                            </tbody>
                        </table>
                    </div>
                </div>
    )
}

export default PropertyManagement

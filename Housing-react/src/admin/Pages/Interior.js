import React, { useState,useEffect} from 'react'
import Navbar from '../Components/AdminNavbar'
import MovingController from '../Components/MovingController'
import InteriorService from '../../Services/InteriorServices'
import UserService from '../../Services/UserServices'

function Interior() {
    const [interior, setInterior] = useState([])
    console.log(interior);
    
    const deleteInterior = async (id) => {
        await InteriorService.deleteInterior(id)
        window.location.reload()
    }

    useEffect(() => {
       const Interiorservice =  InteriorService.getAllInterior().then(res => setInterior(res.data)).catch(err => console.log(err))
        console.log(Interiorservice);
        // const Userdata = UserService.getallUser().then(res=>console.log(res.data)).catch(err=>console.log(err))
    }, [])
    return (
        <>
        <div>
            <Navbar/>
            <MovingController/>
            <div className=" container mt-5">

                <h3 className="text-center mb-5">Inquires for interiors are just at your below</h3>
            <table className="table table-striped">
            <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Budget</th>
            <th scope="col">Scope Of Work</th>
            <th scope="col">Type OF Apartment</th>
            <th scope="col">PossesionTimeLine</th>
            <th scope="col">Delete</th>
            <th scope="col">Pin Code</th>
            </tr>
            </thead>
                <tbody>
                        {interior.map(item => {
                            return (
                                <tr>
                                <th scope="row">{item._id}</th>
                                <td>{item.Budget}</td>
                                <td>{item.Scope_Of_Work}</td>
                                <td>{item.Type_Of_Appartment}</td>
                                <td>{item.PosesetionTimeLine}</td>
                                <td><button onClick={() => deleteInterior(item._id)} className="bg-info border-circle text-dark">Delete</button></td>
                                <td>{item.pinCode}</td>
                                </tr>
                            )})}
                            </tbody>
                        </table>
                    </div>
            </div>
        </>
    )
}

export default Interior

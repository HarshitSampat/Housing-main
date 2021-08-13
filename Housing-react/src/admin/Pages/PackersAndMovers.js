import React, { useState,useEffect} from 'react'
import Navbar from '../Components/AdminNavbar'
import MovingController from '../Components/MovingController'
import PackersAndMoversService from '../../Services/packersAndMoversService'
import UserService from '../../Services/UserServices'
import packersAndMoversService from '../../Services/packersAndMoversService'

function PackersAndMovers() {
    const [packers, setPackersAndMovers] = useState([])
    console.log(packers);

    const getContact = (id) => {
        UserService.getUser(id).then(res => { console.log(res.data.name); return res.data.name })
        
    
    }
    const deletePackersAndMovers = async (id) => {
        console.log(id);
        packersAndMoversService.deletedataOfPAm(id).then(res =>console.log(res))
        window.location.reload()
    }

    useEffect(() => {
        PackersAndMoversService.getallPackersAndMovers().then(res => setPackersAndMovers(res.data)).catch(err => console.log(err))
        
        const Userdata = UserService.getallUser().then(res=>console.log(res)).catch(err=>console.log(err))
    }, [])
    return (
        <div>
            <Navbar />
            <MovingController/>
            <div className=" container mt-5">

                <h3 className="text-center mb-5">Packers and Movers inquires for this Sites are just at your below</h3>
            <table className="table table-striped">
            <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">ReloacteFrom</th>
            <th scope="col">ReloacteTO</th>
            <th scope="col">Datae Of Movement</th>
            <th scope="col">Created At</th>
            <th scope="col">Delete</th>
            <th scope="col">Last Update</th>
            <th scope="col">Contact User</th>
            </tr>
            </thead>
                <tbody>
                        {packers.map(item => {
                            return (
                                <tr>
                                <th scope="row">{item._id}</th>
                                
                                <td>{item.ReloacteFrom}</td>
                                <td>{item.ReloacteTO}</td>
                                <td>{item.TentativeDateOfMovement}</td>
                                <td>{item.createdAt}</td>
                                <td><button onClick={() => deletePackersAndMovers(item._id)} className="bg-info border-circle text-dark">Delete</button></td>
                                <td>{item.updatedAt}</td>
                                <td>{console.log(()=> getContact(item.User))}</td>
                                </tr>
                            )})}
                            </tbody>
                        </table>
                    </div>
                </div>
    )
}

export default PackersAndMovers

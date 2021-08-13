import React, { useEffect,useState } from 'react'
import Navbar from '../Components/AdminNavbar'
import UserServices from '../../Services/UserServices'          
import MovingController from '../Components/MovingController'

function User() {
    
    const [userData, setUserData] = useState([])
    useEffect(() => {
        UserServices.getallUser().then(res =>  setUserData(res.data),).catch(err=>console.log(err))
}, [])
    
    const deleteUser = (id) => {
        console.log(id);
        UserServices.deleteUser(id).then(res => console.log(res))
        window.location.reload()
    }
    return (
        <div >
            <Navbar />
            <MovingController/>
            <div className=" container mt-5">

                <h3 className="text-center mb-5">Users Of this Site are just at your below</h3>
            <table className="table table-striped">
            <thead>
            <tr let i= "index">        
            {/* <th scope="col">Id</th> */}
            <th scope="col">FullName</th>
            <th scope="col">Email</th>
            <th scope="col">CreatedAt</th>
            <th scope="col">UpdateAt</th>
            <th scope="col">IsUserAdmin?</th>
            <th scope="col">email</th>
            <th scope="col">User Image</th>
            </tr>
            </thead>
                    <tbody>
                        {userData.map(item => {
                            
                            return (
                                
                                <tr>
                                    {/* <th scope="row"></th> */}
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.createdAt}</td>
                                    <td>{item.updatedAt}</td>
                                    {item.isAdmin? <td>yes</td>:<td>No</td>}
                                    <td><button onClick={() => deleteUser(item._id)} className="bg-info border-circle text-dark">Delete</button></td>
                                    <td><img width="40px" height="40px" style={{borderRadius:"50%"}} src={item.pic} alt="user"/></td>
                                    </tr>
                            
                            )
                        })}

    </tbody>
    </table>
    </div>
    </div>
    )
}

export default User

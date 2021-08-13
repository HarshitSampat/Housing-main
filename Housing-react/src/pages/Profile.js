
import React from 'react'
import { Card } from 'react-bootstrap'
import Navbar from '../components/Navbar'

function Profile() {
    const info = localStorage.getItem("userInfo")
    const userData = JSON.parse(info)
   
    return (
        <div>
            <Navbar/>
            <Card style={{ width: '20rem', marginTop: "100px"}} className="container bg-light">
                <Card.Title className="bg-dark text-white text-center border border-radi-3rem mt-3">Your  Profile</Card.Title>
                <Card.Img variant="top" src={ localStorage.getItem('userPic')} style={{borderRadius:"50%",height:'150px', width:'150px', marginLeft:"90px"} } className="justify justify-content-md-center justify-content-center" alt="userImage"/>
                <Card.Body>
                  
                    <Card.Text className="text-dark" style={{marginLeft:'30px'}}>
                        <h6>UserName : { userData.name}</h6>
                        <h6>Email: {userData.email}</h6>
                        <h6>ContactNo: {userData.contactNo}</h6>
                        
                  </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Profile

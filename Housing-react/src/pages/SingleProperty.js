import React, { useState,useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom";
import Navbar from '../components/Navbar'
import PropertyService from '../Services/PropertyService'
// import UserService from '../Services/UserServices'
// import Footer from "../components/Footer";
 import { Card} from 'react-bootstrap';
// import propertyManagement from './propertyManagement';

function SingleProperty() {
    const history = useHistory();
    
    // define variable  foor state mmanagement and set variable
    const [propertyData, setPropertyData] = useState("")
    // const [getUser, setGetUser] = useState("")
    // const [showContact, setshowContact] = useState("none")
    
    const { id } = useParams();

    useEffect(() => {
    // const userInfo = localStorage.getItem("userInfo")
    // if (userInfo) { history.push("#") }
    // else { history.push("/login") }
        
        PropertyService.getProperty(id).then(res => {
            setPropertyData(res.data)
        })
        
    }, [history])
    // const handleContact=async (User)=>{
    //  await UserService.getUser(User).then(res => {
    //         setGetUser(res.data)
    //     })
    //     setshowContact("")
    // }
    
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="mt-5">
                    <Card className="card mb-3 container" style={{marginTop:"100px"}}>
                          <div className="row no-gutters">
                            <div className="col-md-6">
                            <img src={propertyData.Image} height="400px" className="card-img ml-3 mt-3" alt="Pr" />
                            </div>
                            <div className="col-md-6">
                            <Card.Body className="ml-4">
                            <Card.Title className="text-light bg-dark border-radius-3 text-center">Property Card</Card.Title>
                                            <Card.Text >
                                 <div>               
                                <div className="row">
                                <div className="col-md-5">               
                                <h6 >City : {propertyData.City}</h6>
                                <h6 className="mt-3">Sell/Rent : {propertyData.Rent_Buy}</h6>
                                <h6 className="mt-3">Bathroom:{propertyData.Bathroom}</h6>
                                <h6 className="mt-3">Balcony:{propertyData.Balcony}</h6>
                                <h6 className="mt-3">Property's Age : {propertyData.AgeOfProperties} Years</h6>                
                                </div>
                                 <div className="col-md-7">
                                <h6>Locality : {propertyData.Locality}</h6>
                                <h6 className="mt-3">{propertyData.Property_Type}</h6>
                                <h6 className="mt-3">{propertyData.furnished_Type}</h6>
                                <h6 className="mt-3">CoverParking : {propertyData.CoveredParking}</h6>
                                                    <h6 className="mt-3">OpenParking : {propertyData.OpenParking}</h6>
                                                    
                                                    {/* {console.log(propertyData.User)} */}
                                                </div>
                                            </div>
                            {/* <Button className="bg-success" handleClick={ handleContact(propertyData.User)}>Click to Get Contact</Button>
                            <div className="row">
                                                <div className={`col-lg-6}`} style={{ display: 
                                                showContact  }}>
                                                    {getUser.name}
                                    </div>
                                                <div className="col-lg-6" style={{ display: showContact }}></div>
                            </div> */}
                                
                                </div>
                            </Card.Text>
                            </Card.Body>
                            </div>
                          </div>
                        </Card>
                        </div>
                        
                        
                 
                    
            
            </div>
        </>
    )
}

export default SingleProperty

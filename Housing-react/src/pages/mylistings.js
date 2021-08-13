import React, { useEffect,useState} from 'react'
import PropertyService from '../Services/PropertyService'
import Navbar1 from '../components/Navbar'
import { Card } from 'react-bootstrap'

function Mylistings() {

    const [userProperty, setUserProperty] = useState([])
    useEffect(() => {
        PropertyService.getPropertyByUserId(localStorage.getItem("userId")).then(res =>
        {
            console.log(res);
            setUserProperty(res.data)
        })
        
    }, [])
    return (
        <>
            <Navbar1 className="mb-5"/>
            <div className="mt-5">
                {userProperty.map(item => {
                    return (
                        <>
                            <div className="ml-5 m" style={{ marginTop: "90px" }}>
                            <Card className="card mb-3 mt-5 card-color" style={{maxWidth: "700px", marginTop:"100px"}}>
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                    <img src={item.Image} height="220px" className="card-img ml-3 " alt="Pr" />
                                    </div>
                                    <div className="col-md-8">
                                        <Card.Body className="ml-4">
                                            <Card.Title className="text-light border-radius-3 text-white">Property Card</Card.Title>
                                                <Card.Text >
                                                    <div className="row">
                                                        <div className="col-md-5">
                                                            <h6  className="text-white">City : {item.City}</h6>
                                                            <h6 className="text-white">BHK:{item.Bhk}</h6>                  
                                                        </div>
                                                        <div className="col-md-7">
                                                        <h6 className="text-white">Locality : {item.Locality}</h6>
                                                        <h6 className="text-white">{item.Property_Type}</h6>
                                                        </div>
                                                    </div>
                                                </Card.Text><hr className="bg-white"/>
                                                {/* <Button variant="primary" onClick={() => {handleClick(item._id)} }>View More Details</Button>
                                                 <Button variant="success" className="ml-5" onClick={()=>handleOpen(item.contactNo)}>Get Contact</Button> */}
                                                
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>
                        </div>
                            </>
                    )
                })}
            </div>
        </>
    )
}

export default Mylistings

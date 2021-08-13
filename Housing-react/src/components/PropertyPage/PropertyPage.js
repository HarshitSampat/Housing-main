import React, { useEffect ,useState} from 'react'
// import {  Card, Button,Dropdown } from 'react-bootstrap'
// import { useHistory } from 'react-router-dom'
import PropertyService from '../../Services/PropertyService'
import Navbar from '../Navbar'
import PropertyCard from './PropertyCard'

function PropertyPage({ Buy_rent }) {
        
    // let subtitle
    let error =false

    // const userData = localStorage.getItem('userInfo')
    // const user=JSON.parse(userData)

//    const history = useHistory();
    const [propertyData, setPropertyData] = useState([])
    const [search, setSearch] = useState("")
    const [locality, setLocality] = useState("")
    const [bhk, setBhk] = useState("")
    


    useEffect(() => {
    // const userInfo = localStorage.getItem("userInfo")
   
        PropertyService.getallProperty().then(res => {
            setPropertyData(res.data)
        })
    .catch(err=>console.log(err))
    }, [])
    
    return (
        <>
        <div className="logout-butto">
            <div>
                <Navbar className="mb-5"/>   
            </div>
            <div>
                <div className="mt-5 container row">
                    <div className="col-4">
                        <input className="input-border text-dark ml-5" style={{ marginTop: "50px" }}
                        placeholder="Search City Here"
                        value={search}
                        onChange={ e=>{setSearch(e.target.value)}}
                        />
                        </div>
                        <div className="col-4">
                        <input className="input-border text-dark ml-5" style={{ marginTop: "50px" }}
                        placeholder="Search Locality Here"
                        value={locality}
                        onChange={ e=>{setLocality(e.target.value)}}
                        />
                        </div>
                        <div className="col-4 mt-5">
                            <select value={bhk} onChange={(e) => { setBhk(e.target.value) }} className="logout-button text-white" style={{width:'100px'}}>
                                <option value="1rk">1rk</option>
                                <option value="1bhk">1bhk</option>
                                <option value="2bhk">2bhk</option>
                                <option value="3bhk">3bhk</option>
                                <option value="3+bhk">3+bhk</option>
                            </select>
                        </div> 
                    </div>
                    {/* <div style={{display:showMessage}} className="text-danger">Sorry Can Not find what  you want</div> */}
                </div>
            <div>
                    
                    {propertyData.map(item => {
                        if (item.Rent_Buy === Buy_rent) {
                            if (search === "" && locality==="" && bhk !== "") {
                                if (item.Bhk === bhk) {
                                    return (
                                        <PropertyCard item={item}/>
                                    )
                                } else {
                                    return error=true
                                }
                
                            }
                            else if (search !== "" && locality==="" && bhk === "") {
                                if ( item.City === search) {
                                    return (
                                        <>
                                            
                                            <PropertyCard item={item}/>
                                        </>
                                    )
                                }else {
                                   return error=true
                                }

                            }else if (search === "" && locality!=="" && bhk === "") {
                                if (item.Locality === locality) {
                                    return (
                                        <>
                                            <PropertyCard item={item}/>
                                        </>
                                    )
                                }else {
                                   return error=true
                                }

                            }else if (search !== "" && locality!=="" && bhk === "") {
                                if (item.Locality === locality && item.City === search) {
                                    return (
                                        <>
                                            <PropertyCard item={item}/>
                                        </>
                                    )
                                }else {
                                   return error=true
                                }

                            }else if (search !== "" && locality==="" && bhk !== "") {
                                if (item.Bhk === bhk && item.City === search) {
                                    return (
                                        <>
                                            <PropertyCard item={item}/>
                                        </>
                                    )
                                }else {
                                   return error=true
                                }

                            }else if (search === "" && locality!=="" && bhk !== "") {
                                if (item.Bhk === bhk && item.Locality === locality) {
                                    return (
                                        <>
                                            <PropertyCard item={item}/>
                                        </>
                                    )
                                }else {
                                   return error=true
                                }

                            }
                            else if (search !== "" && bhk !== "" && locality!=="") {
                                if (item.City === search && item.Bhk === bhk && item.Locality===locality) {

                                    return (
                                        <>
                                            <PropertyCard item={item}/>
                                        </>
                                    )
                                }else {
                                    return error=true
                                }
                            } else {
                                return (
                                    <>
                                        <PropertyCard item={item}/>
                                    </>
                                )
                            }
                        }
                            // else {
                            //     setShowMessage("")
                            // }
                        })
                        // .map(item => {
                //     if (item.Rent_Buy === Buy_rent)
                //         return (
                //             <>
                //                 {console.log(item.contactNo)}
                //         <div className="mt-5 ml-5 ">
                //             <Card className="card mb-3 mt-5 card-color" style={{maxWidth: "700px", marginTop:"100px"}}>
                //                 <div className="row no-gutters">
                //                     <div className="col-md-4">
                //                     <img src={item.Image} height="220px" className="card-img ml-3 " alt="ProperetyImage" />
                //                     </div>
                //                     <div className="col-md-8">
                //                         <Card.Body className="ml-4">
                //                             <Card.Title className="text-light border-radius-3 text-white">Property Card</Card.Title>
                //                                 <Card.Text >
                //                                     <div className="row">
                //                                         <div className="col-md-5">
                //                                             <h6  className="text-white">City : {item.City}</h6>
                //                                             <h6 className="text-white">BHK:{item.Bhk}</h6>                  
                //                                         </div>
                //                                         <div className="col-md-7">
                //                                         <h6 className="text-white">Locality : {item.Locality}</h6>
                //                                         <h6 className="text-white">{item.Property_Type}</h6>
                //                                         </div>
                //                                     </div>
                //                                 </Card.Text><hr className="bg-white"/>
                //                                 <Button variant="primary" onClick={() => {handleClick(item._id)} }>View More Details</Button>
                //                                  <Button variant="success" className="ml-5" onClick={()=>handleOpen(item.contactNo)}>Get Contact</Button>
                                                
                //                         </Card.Body>
                //                     </div>
                //                 </div>
                //             </Card>
                //         </div>
                //     </>
                // ) 
                // })}
                    }
                   
                    
            </div>
        </div>
    </>
    )
}

export default PropertyPage

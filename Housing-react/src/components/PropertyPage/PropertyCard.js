import React, { useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import Modal from 'react-modal'
import Container from '@material-ui/core/Container'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorPage/ErrorMessage';

function PropertyCard(props) {
    


     let subtitle
    // let error =false

    // const userData = localStorage.getItem('userInfo')
    // const user=JSON.parse(userData)

    const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

   const history = useHistory();
    
    const [loading, setLoading] = useState(false)
    // const [phoneNo, setPhoneNo] = useState()
    // const [name, setUserName] = useState()
    // const [email, setEmail] = useState()
    const [err, setErr] = useState("none")
    // const [propertyData, setPropertyData] = useState([])
    // const [search, setSearch] = useState("")
    // const [locality, setLocality] = useState("")
    // const [bhk, setBhk] = useState("")
    
    const [contact, setContact] = useState(false)
    const [contactNo, setContactNo] = useState("")

    const { item } = props

    const handleClick = (_id) => {
        history.push(`/buy/:City/${_id}`)   
    }

    const handleOpen = (contactno) => {
        setContactNo(contactno)
        setContact(true)
    }
    function closeModal() {
    setContact(false);
  }
     return (
                <>
                    {console.log(item.contactNo)}
                        <div className="mt-5 ml-5 ">
                            <Card className="card mb-3 mt-5 card-color" style={{ maxWidth: "700px", marginTop: "100px" }}>
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={item.Image} height="220px" className="card-img ml-3 " alt="ProperetyImage" />
                                        </div>
                                        
                                        
                                    <div className="col-md-8">
                                        <Card.Body className="ml-4">
                                            <Card.Title className="text-light border-radius-3 text-white">Property Card</Card.Title>
                                            <Card.Text >
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <h6 className="text-white">City : {item.City}</h6>
                                                    <h6 className="text-white">BHK:{item.Bhk}</h6>
                                                </div>
                                                
                                                <div className="col-md-7">
                                                    <h6 className="text-white">Locality : {item.Locality}</h6>
                                                    <h6 className="text-white">{item.Property_Type}</h6>
                                                </div>
                                            </div>
                                                </Card.Text><hr className="bg-white" />
                                                    <Button variant="primary" onClick={() => { handleClick(item._id) }}>View More Details</Button>
                                                    <Button variant="success" className="ml-5" onClick={() => handleOpen(item.contactNo)}>Get Contact</Button>
                                                </Card.Body>
                                                    </div>
                                                </div>
                            </Card>
                        </div>
             <Modal
                isOpen={contact}    
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className="logout-buttontext-white text-center">Contact Details for Property</h2>
                        {loading && <Loading />}
            <div>
                <Container maxWidth="sm" className="mt-5">
                    {/* <Typography variant="h6" className="text-center mt-5"  gutterBottom>
                        Submit your details for  Inquiry
                    </Typography>
                     */}
                    <div id="errorFormfilled" style={{ display: err }} className="bg-danger">
                        <ErrorMessage variant={"danger"}>
                        <h6>Kindly Filled all required Fields.</h6>
                        </ErrorMessage>
                    </div>
{/*                                 
                    <Grid  container spacing={4}>
                        <Grid item xs={12} lg={12}>
                            <TextField0
                              required
                              id="firstName"
                              name="fullName"
                              label="First name"
                              value={name}
                              fullWidth
                              onChange={(e) => {setUserName(e.target.value)}}
                              autoComplete="given-name"
                            />
                        </Grid>
        
                         <Grid item xs={12}>
                             <TextField
                                required
                                id="email"
                                name="Email"
                                label="Email"
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}}
                                fullWidth
                                autoComplete="shipping address-line1"
                            />
                            </Grid>
                             <Grid item xs={12}>
                                    <TextField
                                        id="number"
                                        type="number"
                                        name="ContactNo"
                                        label="Phone Number"
                                        value={phoneNo}
                                        max-value="10"
                                        onChange={(e) => {setPhoneNo(e.target.value)}}
                                        fullWidth
                                      autoComplete=""
                                    />
                                    </Grid>
                            
                                </Grid> */}
                        
                </Container>
                    </div>
                    <div><h4 className="mt-4 mb-4">Owner's ContactNo: {contactNo}</h4></div>
                    <form>
                    <input />
        
                    <button className="bg-warning justify  justify-content-md-center">Back</button>
                    <button onClick={closeModal} className="bg-success ml-2 justify-content-md-cente">Close</button>
                </form>
            </Modal>
        </>
    )
}

export default PropertyCard


import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container'
// import { sizing } from '@material-ui/system'
import Button from '@material-ui/core/Button';
import PropertyManagementService from '../Services/PropertyMangementService'
import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles';
import FormLogo  from '../components/FormComponent/FormLogo'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// import BackButton from '../components/FormComponent/BackButton';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Interior() {
  const history = useHistory();
  const classes = useStyles();
  
  const userName = localStorage.getItem('username')
  const userData = localStorage.getItem('userInfo')
  const user=JSON.parse(userData)

  const [phoneNo, setPhoneNo] = useState(user.contactNo)
  const [name, setUserName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [city, setCity] = useState("")
  const [expectedRent, setExpectedRent] = useState("")
  const [appartmenttype, setAppartmenttype] = useState("")
  const [comments, setComments] = useState("")
  const [err, setErr] = useState("none")
  const [loading, setLoading] = useState(false)
const [showdiv, setShowdiv] = useState("")
  const [showCheck, setShowCheck] = useState("")
  const [showButton, setShowButton] = useState("disabled")
  
  const handleSubmit = async(e) => {
    
    setLoading(true)
    setShowdiv("none")
    if (phoneNo !== "" && name !== "" && email !== "" && city !== "" && appartmenttype!== "" && expectedRent!== "" ) {
      const saveData = {
        User: user._id,
        Property_City: city,
        House_Configuration: appartmenttype,
        ExpectedRent:expectedRent,
        comments
      }
    await  PropertyManagementService.addPropeertyManagement(saveData).then(res => console.log(res))
      setLoading(false)
      alert("Succeesfully submitted data to server")
      setShowdiv("")
      history.push('#')
    } else {
      setLoading(false)
      setErr("")
      setShowdiv("")
    }
  }
  const validateCheckBox = () => {
    if (showCheck === "" ) {
      setShowButton("")
      setShowCheck("checked")
    }
    else { 
      setShowButton("disabled")
      setShowCheck("")
    }
  }
  return (
    <React.Fragment>
      
      <div style={{display:showdiv}}>
        <Container maxWidth="sm" className="mt-5" >
        <FormLogo/>
          <Typography variant="h6" className="text-center mt-5" gutterBottom>
        
          Submit your details & our property management partners will call you back.
        </Typography>
       <div id="errorFormfilled" style={{ display: err}} className="bg-danger">
                        <ErrorMessage variant={"danger"}>
                        <h6>Kindly Filled all required Fields.</h6>
                          </ErrorMessage>
                            </div>
      <Grid  container spacing={4}>
          <Grid item xs={12} lg={12}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Full Name"
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
            {loading && <Loading />}
        <Grid item xs={12}>
          <TextField
              required
              id="City"
              name="City"
              label="Property City"
              fullWidth
              value={city}
              onChange={(e) => {setCity(e.target.value)}}
            autoComplete="shipping address-level2"
          />
        </Grid>

            <Grid>
              <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label3">House Of Configuaration</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={appartmenttype}
          onChange={(e) => { setAppartmenttype(e.target.value)}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"1 BHK"}>1 BHK</MenuItem>
          <MenuItem value={"2 BHK"}>2 BHK</MenuItem>
          <MenuItem value={"3 BHK"}>3 BHK</MenuItem>
          <MenuItem value={"4 BHK"}>4 BHK</MenuItem>
          <MenuItem value={"Villa"}>Villa</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
          <MenuItem value={"Independent House"}>Independent House</MenuItem>
                </Select>
                </FormControl>
            </Grid>
             <Grid item xs={12}>
          <TextField
              required
              id="ExpectedRent"
              type="Number"
              name="ExpectedRent"
              label="Expected Rent"
              fullWidth
              value={expectedRent}
              onChange={(e) => {setExpectedRent(e.target.value)}}
            autoComplete="expected"
          />
        </Grid>
            <Grid>
              <InputLabel id="demo-simple-select-helper-label3" className="mt-4">Share your thoughts:</InputLabel>
              <TextareaAutosize aria-label="empty textarea" placeholder="Any Comments" value={comments} onChange={(e) => { setComments(e.target.value)}} />
            </Grid>
        
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="Conditons" value="yes"  checked={showCheck} onClick={validateCheckBox} />}
            label="Agree With all termas and condition"
          />
          </Grid>
          <Grid>
              <Button variant="contained" color="primary" disabled={showButton}  className="" onClick={handleSubmit}>
              Submit
              </Button>
              <Button variant="contained" color="secondary"  className="ml-5" onClick={()=>{history.push('/buy/search')}}>
              Continue to search
              </Button>
            </Grid>
            
        </Grid>
        </Container>
        </div>
    </React.Fragment>
  );
}

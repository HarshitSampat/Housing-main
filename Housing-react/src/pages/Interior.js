
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
import InteriorServices from '../Services/InteriorServices'
import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage';
import validator from 'validator';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles';
import Span from '../components/FormComponent/Span';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormLogo  from '../components/FormComponent/FormLogo'
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
  const [pinCode, setpinCode] = useState("")
  const [budget, setBudget] = useState("")
  const [work, setWork] = useState("")
  const [possesiontimeLine, setPossesionTimeLine] = useState("")
  const [appartmenttype, setAppartmenttype] = useState("")
  const [comments, setComments] = useState("")
  const [err, setErr] = useState("none")
  const [loading, setLoading] = useState(false)
  const [phoneNoerror, setPhoneNoerror] = useState("")
  const [emailError, setEmailError] = useState("")
  const [pincodeerror, setPincodeerror] = useState("")
  // const [checked, setchecked] = useState(false)
  const [showButton, setShowButton] = useState("disabled")
  const [showCheck, setShowCheck] = useState("")
  
  const handleSubmit = async(e) => {
    
    setLoading(true)
    if (phoneNo !== "" && name !== "" && email !== "" && city !== "" && pinCode !== "" && work!== "" ) {
      const saveData = {
        User: user._id,
        City: city,
        pinCode: pinCode,
        Budget:budget,
        Scope_Of_Work:work,
        PosesetionTimeLine:possesiontimeLine,
        Type_Of_Appartment:appartmenttype,
        comments
      }
    await  InteriorServices.addInterior(saveData).then(res => console.log(res))
      setLoading(false)
      alert("Succeesfully submitted data to server")
      history.pushState('/')
    } else {
      setLoading(false)
      setErr("")
    }

    
  }
  const validateEmail = (value) => {
    setEmail(value)
    if (validator.isEmail(value)) {
      setEmailError('')
      setEmail(value)
    } else {
      setEmailError('please enter valid  email')
    }
   }

  const validateContactNo = async (value) => {
    setPhoneNo(value)
    if (validator.isMobilePhone(value)) {
      setPhoneNoerror('')
      setPhoneNo(value)
    } else {
      setPhoneNoerror('please filled valid MobileNo')
    }
  }

  const validatePinCode = async (value) => {
    setpinCode(value)
    if (validator.isPostalCode(value)) {
      setPincodeerror('')
      setpinCode(value)
    } else {
      setPincodeerror('please filled valid pinCode')
    }
  }

  const validateCheckBox = () => {
    if (showCheck === "") {
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
      {loading && <Loading />}
      <div>
        <Container maxWidth="sm" className="mt-5">
        <FormLogo/>
      <Typography variant="h6" className="text-center mt-5"  gutterBottom>
        Home Interiors Details
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
              onChange={(e) => validateEmail(e.target.value)}
            fullWidth
            autoComplete="shipping address-line1"
              /><Span error={emailError}/>
            </Grid>
        <Grid item xs={12}>
          <TextField
              id="number"
              type="number"
              name="ContactNo"
              label="Phone Number"
              value={phoneNo}
              max-value="10"
              onChange={(e) => validateContactNo(e.target.value)}
              fullWidth
            autoComplete=""
              /><Span  error={ phoneNoerror}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
              required
              id="City"
              name="City"
              label="City"
              fullWidth
              value={city}
              onChange={(e) => {setCity(e.target.value)}}
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField id="Pincode" name="Pincode" value={pinCode} 
              onChange={(e) => { setpinCode (e.target.value)}}
                label="Pincode *" fullWidth /><Span error={pincodeerror}/>
        </Grid>
            <Grid xs={12} sm={6}>
              <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Budget</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={budget}
                  onChange={(e) => { setBudget(e.target.value)}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"1-3 Lacs"}>1-3 Lacs</MenuItem>
          <MenuItem value={"3-5 lacs"}>3-5 lacs</MenuItem>
          <MenuItem value={"5-10 lacs"}>5-10 lacs</MenuItem>
          <MenuItem value={"10 lacs above"}>10 lacs above</MenuItem>
                </Select>
                </FormControl>
            </Grid>
            <Grid>
              <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label2">Scope Of Work</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={work}
                  onChange={(e) => {  setWork(e.target.value)}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Full home interiors"}>Full home interiors</MenuItem>
          <MenuItem value={"Kitchen & Wardrobes"}>Kitchen & Wardrobes</MenuItem>
          <MenuItem value={"Only kitchen"}>Only kitchen</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
                </FormControl>
          </Grid>
            <Grid sm={6} xs={12}>
              <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label3">Possession Timeline</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={possesiontimeLine}
                  onChange={(e) => { setPossesionTimeLine(e.target.value)}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"0-3 months"}>0-3 months</MenuItem>
          <MenuItem value={"3-6 months"}>3-6 months</MenuItem>
          <MenuItem value={"More than 6 months"}>More than 6 months</MenuItem>
          <MenuItem value={"Already moved in"}>Already moved in</MenuItem>
                </Select>
                </FormControl>
            </Grid>

            <Grid>
              <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label3">Type of  Apartment</InputLabel>
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
            <Grid>
              <InputLabel id="demo-simple-select-helper-label3" className="mt-4">Share your thoughts:</InputLabel>
              <TextareaAutosize aria-label="empty textarea" style={{width:'400px'}} height="auto" placeholder="Any Comments" value={comments} onChange={(e) => { setComments(e.target.value)}} />
            </Grid>
        
        <Grid item xs={12}>
          <FormControlLabel
                control={<Checkbox color="secondary" name="Conditons" value="yes" checked={showCheck} onClick={validateCheckBox} />}
            label="Agree With all termas and condition"
          />
          </Grid>
          <Grid>
              <Button variant="contained" color="primary" disabled={showButton} className="" onClick={handleSubmit}>
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

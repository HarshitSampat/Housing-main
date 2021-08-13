
import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container'
// import { sizing } from '@material-ui/system'
import Button from '@material-ui/core/Button';
import PAMService from '../Services/packersAndMoversService'
import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage';
import validator from 'validator';
import Span from '../components/FormComponent/Span'
import FormLogo  from '../components/FormComponent/FormLogo'
import { useHistory } from 'react-router-dom';
export default function AddressForm() {
  
  const history = useHistory()
  // const userName = localStorage.getItem('username')
  const userData = localStorage.getItem('userInfo')
  const user=JSON.parse(userData)

  const [phoneNo, setPhoneNo] = useState(user.contactNo)
  const [name, setUserName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [relocationfrom, setRelocationfrom] = useState("")
  const [relocateto, setRelocateto] = useState("")
  const [date, setDate] = useState("")
  const [err, setErr] = useState("none")
  const [loading, setLoading] = useState(false)
  const [phoneNoerror, setPhoneNoerror] = useState("")
  const [emailError, setEmailError] = useState("")
  const [showButton, setShowButton] = useState("disabled")
  const [showCheck, setShowCheck] = useState("")
  const [dateerror, setDateerror] = useState("")
  
  
  const handleSubmit = async(e) => {
    
    setLoading(true)
    if (phoneNo !== "" && name !== "" && email !== "" && relocationfrom !== "" && relocateto !== "" && date !== "") {
      const saveData = {
        User: user._id,
        ReloacteFrom: relocationfrom,
        ReloacteTO: relocateto,
        TentativeDateOfMovement: date
      }
      PAMService.addPackersAndmoversData(saveData).then(res => console.log(res))
      setLoading(false)
      alert("Succeesfully submitted data to server")
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

const validateDate = async (value) => {
    setDate(value)
    if (validator.isDate(value)) {
      setDateerror('')
      setDate(value)
    } else {
      setDateerror('please filled valid Date')
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
      {loading && <Loading />}
      <div>
        <Container maxWidth="sm" className="mt-5">
          <FormLogo/>
      <Typography variant="h6" className="text-center mt-5"  gutterBottom>
        Packers And Movers Details
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
              id="relocationfrom"
              name="relocationfrom"
              label="Relocation From"
              fullWidth
              value={relocationfrom}
              onChange={(e) => {setRelocationfrom(e.target.value)}}
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField id="RelocationTo" name="RelocationTo" value={relocateto} 
              onChange={(e) => { setRelocateto(e.target.value)}}
              label="Relocation To" fullWidth />
        </Grid>
       
        <Grid item xs={12} sm={6}>
          <TextField
              required
              id="date"
              name="date"
              type="date"
              fullWidth
              value={date}
              onChange={(e) => { validateDate(e.target.value) }}
              autoComplete={`date.getDate()`}
          /><Span  error={ dateerror}/>
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















// import {React} from "react";


// function packersAndMoversInitiate() {
    

//   function handleChange(e) {
//     this.setState({ [e.target.name]: [e.target.value] });
//   }

//   function handleSubmit(e){
//     e.preventdefault()
//     console.log('You submitted it successfully')
//   }
//   return (
//     <div className="css-159dnqk">
//       <div>
//         <img
//           src="//c.housingcdn.com/s/assets/logo.3e87b295.png"
//           className="img css-rw1yyy"
//           alt=""
//         />
//         <div className="css-1f0guh3">
//           <div className="css-10m1197">
//             <div className="css-o1ehk8">
//               <img
//                 src="//c.housingcdn.com/s/assets/basic.0ceb3d07.svg"
//                 className="img css-1vd0mou"
//                 alt=""
//               />
//             </div>
//             <div className="css-y6ta9y">
//               <label className="css-1s9w8ju">
//                 Packers and Movers moving details
//               </label>
//             </div>
//           </div>
//           <div className="css-0">
//             <div></div>
//             <div className="css-c18jar">

//               <form className="css-10gqcnf" onSubmit={handleSubmit}>
//                 <div className="form-item type-pill css-a802sj">
//                   <div className="css-vxtpyg">
//                     <input
//                       type="text"
//                       required=""
//                       name="FirstName"
//                       value=""
//                       className="inputStyle has-value css-5i0mqs"
//                       onChange={handleChange}
//                     />
//                     <label className="undefined inputLabelStyle css-7eclcj">
//                       Full Name
//                     </label>
//                   </div>
//                 </div>
//                 <div className="form-item type-pill css-a802sj">
//                   <div className="css-a687h8">
//                     <input
//                       name="PhoneNumber"
//                       type="text"
//                       required="true"
//                       readonly=""
//                       value=""
//                       className="inputStyle has-value css-5i0mqs"
//                       onChange={handleChange}
//                     />
//                     <label className="undefined inputLabelStyle css-7eclcj">
//                       Phone Number
//                     </label>
//                   </div>
//                 </div>
//                 <div className="form-item type-pill css-a802sj">
//                   <div className="css-vxtpyg">
//                     <input
//                       type="email"
//                       required=""
//                       value=""
//                       className="inputStyle has-value css-5i0mqs"
//                     />
//                     <label className="undefined inputLabelStyle css-7eclcj">
//                       Email Id
//                     </label>
//                   </div>
//                 </div>
//                 <div className="form-item type-pill css-0">
//                   <div className="no-value css-gipm1a">
//                     <div className="sel-box-placeholder css-szbi6c">
//                       Relocation From
//                     </div>
//                     <div className="show css-83qvp7">
//                       <div className="input-container">
//                         <div className="inputStyle css-71poe3">
//                           <div>Delhi</div>
//                           <span className="css-1ondzt8"></span>
//                         </div>
//                       </div>
//                       <div className="content-container css-ekk0gt">
//                         <div className="sel-b ox-container css-45j4pv">
//                           <div className="sel-cont css-0">
//                             <div className="options-wrap">
//                               <div className="option css-c4ctc9">Delhi</div>
//                               <div className="option css-c4ctc9">Gurgaon</div>
//                               <div className="option css-c4ctc9">Noida</div>
//                               <div className="option css-c4ctc9">Ghaziabad</div>
//                               <div className="option css-c4ctc9">Mumbai</div>
//                               <div className="option css-c4ctc9">Pune</div>
//                               <div className="option css-c4ctc9">Chennai</div>
//                               <div className="option css-c4ctc9">Kolkata</div>
//                               <div className="option css-c4ctc9">Faridabad</div>
//                               <div className="option css-c4ctc9">Hyderabad</div>
//                               <div className="option css-c4ctc9">Bengaluru</div>
//                               <div className="option css-c4ctc9">Other</div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className=" css-83qvp7">
//                       <div className="input-container">
//                         <div className="inputStyle css-71poe3">
//                           <div></div>
//                           <span className="css-1ondzt8"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-item type-pill css-0">
//                   <div className="no-value css-gipm1a">
//                     <div className="sel-box-placeholder css-szbi6c">
//                       Relocation To
//                     </div>
//                     <div className=" css-83qvp7">
//                       <div className="input-container">
//                         <div className="inputStyle css-71poe3">
//                           <div></div>
//                           <span className="css-1ondzt8"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-item type-pill css-g52r7h">
//                   <div className=" css-tnnvck">
//                     <div className="input-container">
//                       <div className="css-1glq6k9">
//                         <label className="css-1f9asn">
//                           Tentative Date Of Movement
//                         </label>
//                         <img
//                           src="//c.housingcdn.com/s/assets/calendar.81aeb9a0.svg"
//                           className="img css-1vd0mou"
//                           alt=""
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-item type-pill css-1ascwlj">
//                   <div className="sel-cont css-14y93wi">
//                     <div className="sel-placeholder css-szbi6c">
//                       Type of House you are moving from
//                     </div>
//                     q
//                     <div className="options-wrap">
//                       <div className="option css-5uj2yn">1 RK</div>
//                       <div className="option css-5uj2yn">1 BHK</div>
//                       <div className="option css-5uj2yn">2 BHK</div>
//                       <div className="option css-5uj2yn">3 BHK</div>
//                       <div className="option css-5uj2yn">4 BHK</div>
//                       <div className="option css-5uj2yn">Villa</div>
//                       <div className="option css-5uj2yn">Others</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-item type-pill css-a802sj">
//                   <div className="css-vxtpyg">
//                     <textarea
//                       readonly=""
//                       type="textarea"
//                       className="inputStyle css-1vk6evu"
//                     ></textarea>
//                     <label className="undefined inputLabelStyle css-11sk1a2">
//                       If you have any specific request let us know here
//                     </label>
//                   </div>
//                 </div>
//                 <div className="form-item type-checkbox css-1s7xwmf">
//                   <div className="sel-cont css-fiab1y">
//                     <div className="options-wrap">
//                       <div className="option active css-mans2a">
//                         I accept Housing.com
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//               <div className="css-1xw37d">
//                 <a href="/terms-of-use" className="css-ueq1eg">
//                   Terms of use
//                 </a>
//                 and
//                 <a
//                   href="https://housingcom.unstacksite.com/housing-packers-and-movers-terms-and-conditions"
//                   className="css-ueq1eg"
//                 >
//                   terms and conditions
//                 </a>
//               </div>
//             </div>
//             <button
//               type="button"
//               className="button default primary disabled css-v2lr2s"
//               onSubmit={handleSubmit}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default packersAndMoversInitiate;

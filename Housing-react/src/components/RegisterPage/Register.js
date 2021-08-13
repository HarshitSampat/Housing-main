import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
// import { register } from "../../actions/userActions";
import MainScreen from "../../components/MainScreen";
import axios from "axios"
import validator from "validator";
import "./RegisterScreen.css";

function RegisterScreen() {

   const history = useHistory()

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [contactNo, setContactNo] = useState("")
  const [picMessage, setPicMessage] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [nameerror, setNameerror] = useState("")
  const [emailerror, setEmailerror] = useState("")
  const [passworderror, setPassworderror] = useState("")
  const [contactNoerror, setContactNoerror] = useState("")

    
    
// //   const userRegister = useSelector((state) => state.userRegister);
//     const userRegister="hello"
//     const {   userInfo } = userRegister;

  
  
  const postDetails = async (pics) => {
    setLoading(true)
    if (!pics) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png" ||pics.type === "image/jpg") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Housing_Com");
      data.append("folder","Profile")
      data.append("cloud_name", "dip3poftg");
     await fetch("https://api.cloudinary.com/v1_1/dip3poftg/image/upload", {
        method: "post",
        body: data,
      })
        .then(async(res) => await res.json())
          .then(async (data) => {
            await console.log(data);
          await setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading(false)
    } else {
      setLoading(false)
      return setPicMessage("Please Select an Image"); 
      
      
    }
  };

//   useEffect(() => {
//     if (userInfo) {
//       history.push("/");
//     }
//   }, [history, userInfo]);

  const submitHandler = async (e) => {
      e.preventDefault();
      try {
          const config = {

              headers: {
                  "Content-type": "application/json"
              },
          };

           setLoading(true)

          const { data } = await axios.post('http://localhost:3001/api/user/register', {
            name,
            pic,
            email,
            password,
            contactNo
          }, config);
          
          setLoading(false)
          localStorage.setItem("userInfo", JSON.stringify(data));
          history.push("/login")
      } catch (error) {
          setError(error.response.data.message);
          setLoading(false)
       }
      
      if (password !== confirmpassword) {
          setMessage("Passwords do not match");
      } else {
          setMessage(null)
      }
  };

  const validateEmail = (value) => {
    setEmail(value)
    if (validator.isEmail(value), {minLength: 8,maxLength:9}) {
      setEmailerror('')
      setEmail(value)
    } else {
      setEmailerror('please enter valid  email')
    }
   }
  

  const validateContactNo = async (value) => {
    setContactNo(value)
    if (validator.isMobilePhone(value)) {
      setContactNoerror('')
      setContactNo(value)
    } else {
      setContactNoerror('please filled valid mobileno')
    }
  }

  const validatePassword = (value) => {
    setPassword(value)
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setPassword(value)
      setPassworderror('')
    } else {
      setPassworderror('please enter valid password')
    }
  }
  
    
  

   
  return (
      <>
    <div className="bg-light text-dark">
    <MainScreen title="REGISTER">
      <div className="loginContainer ">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label className="ml-5 mt-3">Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
              className="smaller-input"
            /><span className="ml-5" style={{
          color: 'yellow',
        }}>{nameerror}</span>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="ml-5">Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => validateEmail(e.target.value)}
              className="smaller-input"
            /><span className="ml-5" style={{
          color: 'yellow',
        }}>{emailerror}</span>
              </Form.Group>
              <Form.Group controlId="contacctNo">
            <Form.Label className="ml-5">Contact No</Form.Label>
            <Form.Control
              type="name"
              value={contactNo}
              placeholder="Enter Contact No"
              onChange={(e) => validateContactNo(e.target.value)}
              className="smaller-input"
            /><span className="ml-5" style={{
          color: 'yellow',
        }}>{contactNoerror}</span>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="ml-5">Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => validatePassword(e.target.value)}
              className="smaller-input" 
            /><span className="ml-5" style={{
          color: 'yellow',
        }}>{passworderror}</span>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label className="ml-5">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="smaller-input"
            />
          </Form.Group>

          {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
              )}
          <Form.Group controlId="pic">
            <Form.Label className="ml-5 mt-3">Profile Picture</Form.Label>
            <Form.File
              onChange={(e) => postDetails(e.target.files[0])}
              id="custom-file"
              type="image/png"
              label="Upload Profile Picture"
                  custom
              className="smaller-input"
            />
          </Form.Group> 
          
          <Button variant="success" type="submit" className="Button mt-3 ">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col className="ml-5">
            Have an Account ? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </div>
      </MainScreen>
    </div>
    </>
  );
}

export default RegisterScreen;
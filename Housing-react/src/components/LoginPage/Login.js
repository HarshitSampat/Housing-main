import React, { useState, useEffect} from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { Link,useHistory } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
// import { login } from "../../actions/userActions";
import MainScreen from "../../components/MainScreen";
import "./LoginScreen.css";
import validator from 'validator'

function LoginScreen() {
  
  const history = useHistory()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);;
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")
  const [emailerror, setEmailerror] = useState("")

  useEffect(() => {
  const  userData = localStorage.getItem('userInfo')
    if(userData){history.push('/')}
  },[history])



  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const config = {

        headers: {
          "Content-type":"application/json"
        }
      }
        setLoading(true)

        const { data } = await axios.post('http://localhost:3001/api/user/login', {
          email,
          password,
        }, config);
      // const getUser = console.log(data);
      localStorage.setItem('userInfo', JSON.stringify(data))
      localStorage.setItem('userPic', data.pic)
      localStorage.setItem('userId', data._id)
      localStorage.setItem('contactNo', data.contactNo)
      
      // localStorage.setItem('username', data.name)
      // localStorage.setItem('userEmail', data.email)
        
      if (data) { history.push("/") }
      else {alert("Check Your Inputs") }
      setLoading(false)
      
      
    } catch (error) {
      setError(error.response.data.message)
      setLoading(false)
    }
  };
  
  const validateEmail = (value) => {
    setEmail(value)
    if (validator.isEmail(value)) {
      setEmailerror('')
      setEmail(value)
    } else {
      setEmailerror('please enter valid  email')
    }
   }

  const validatePassword = (value) => {
    setPassword(value)
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setPassword(value)
      setErrorMessage('')
    } else {
      setErrorMessage('Please Enter valid password')
    }
  }
  

  return (
  
    <MainScreen title="LOGIN">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="ml-5 mt-5">Email address</Form.Label>
            <Form.Control
              className="smaller-input" 
              size="100px"
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => validateEmail(e.target.value)}
            />
            <span className="ml-5" style={{
          color: 'yellow',
        }}>{emailerror}</span>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="ml-5 mt-2" >Password</Form.Label>
            <Form.Control
              className="smaller-input"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) =>validatePassword(e.target.value)}
            /><br />
            <span className="ml-5" style={{
          color: 'yellow',
        }}>{errorMessage}</span>
          </Form.Group>

          <Button variant="warning" type="submit" onClick={ submitHandler} className="button">
            lOGIN
          </Button>
        </Form>
        <Row className="py-3">
          <Col className="ml-5">
            New For housing.com ? <Link to="/SignUp">Register Here</Link>
          </Col>
        </Row>
      </div>
      </MainScreen>
  
    
  );
}

export default LoginScreen;






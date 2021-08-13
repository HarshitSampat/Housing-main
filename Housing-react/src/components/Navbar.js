import {React} from "react";
import { Navbar, Nav} from "react-bootstrap";
import logo from "../Images/logo-4.png";
import { CgProfile, } from "react-icons/cg";
import { BsHeartFill } from "react-icons/bs";
import { BrowserRouter as Router, useHistory } from 'react-router-dom'

// main function
export default function Navbar1() {

  const history = useHistory()
  const userInfo = localStorage.getItem('userInfo')
  const userData = JSON.parse(userInfo)
  
  // Handle Logout functio definition
  const handleLogout = () => {
    localStorage.removeItem("userInfo")
    history.push("/")
  }

  const handleRegister = () => {
    history.push("/SignUp")
  }

  const handleLogin = () => {
    history.push("/Login")
  }
  // const [loginlIsOpen, setloginIsOpen] = useState(false);
  
  return (
    // code for navabar
    <Navbar
      bg=""
      varient="dark"
      fixed="top"
      className="text-white navbar-background"
    >
      <div className="container">
        {/* navbar logo */}
        <Navbar.Brand className="navbar-brand">
          <Nav.Link href="/">
            <img src={logo} alt="logo" className="image" />
          </Nav.Link>
        </Navbar.Brand>

        {/* Navlinks */}
        <Router>
          <Nav>
            <Nav.Link href="/list-property" className="favourite-box text-info">
              List Property
              <span className="free-box"> Free</span>
            </Nav.Link>

            <Nav.Link href="/favourites-property" className="text-white">
              <BsHeartFill className="text-danger" />
                <span className="ml-2">Favourite</span>             
            </Nav.Link>
            
            
             
            {!localStorage.getItem("userInfo") &&
              <button onClick={handleLogin} className="text-white logout-button">
                Login
              </button>
            }

            {!localStorage.getItem("userInfo") &&
              <button href="/SignUp" className="text-white logout-button ml-2" onClick={handleRegister}>
                Register
              </button>
              }
             {localStorage.getItem("userInfo") &&
              <button className="text-white logout-button" onClick={ handleLogout}>
                Logout
              </button>
            }
             {localStorage.getItem("userInfo") &&
               <Nav.Link href="my-profile" className="text-white"><CgProfile className="text-white" />Profile</Nav.Link>
            }
          </Nav>
        </Router>
      </div>
    </Navbar>
  );
}

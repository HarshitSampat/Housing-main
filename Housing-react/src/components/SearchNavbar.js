import { React ,useEffect} from "react";
import { useHistory } from 'react-router-dom'
import PropertyService from '../Services/PropertyService'
import Button from '@material-ui/core/Button'
// import { green, purple } from '@material-ui/core/colors';
// import { Button} from 'bootstrap'

// import { BsSearch } from "react-icons/bs";
// import e from "cors";

function SearchNavbar() {
 const  history = useHistory();
  
  //for searching element
//   const [searchlocality, setsearchLocality] = useState("")
//   const [search, setSearch] = useState("")
// const [rent, setRent] = useState("")

  // handle  search value
  const handleMove = (e) => {
    history.push('/buy/search')  
  }
  const handleMoverent = (e) => {
    history.push('/rent/search')  
  }
  useEffect(() => {
  
  const res = PropertyService.getallProperty()
  console.log(res);
}, [])

  return (
    <>
      <div className="search-nav">
        <nav className="">
          <Button className="nav-buy  mb-3 mt-3 ml-3" variant="contained" color="primary"   onClick={handleMove}>
            Buy
          </Button>
          <Button className="nav-rent  mb-3 mt-3 ml-3" variant="contained" color="primary" onClick={handleMoverent}>
            Rent
          </Button>
        </nav>
        {/* <div className="search-div"> */}
          {/* <div className="search-div1"> */}
            {/* <div className="input-container"> */}
              {/* <div>  */}
                {/* <select */}
                  {/* // className="search-bar search-bar-1"
                  // id="Selectedoption"
                  // onChange={handleChange}
                // > */}
                  {/* <option  id="1" value="Ahmedabad"  >Ahmedabad</option> */}
                  {/* <option  id="2"  value="Surat" > */}
                    {/* Surat */}
                  {/* </option> */}
                  {/* <option id="3" selected value="Rajkot" >Rajkot</option> */}
                  {/* <option id="4" value="Baroda" >Baroda</option> */}
                  {/* <option id="5" value="Vapi" >Vapi</option> */}
                  {/* <option id="6" value="Mumbai" >Mumbai</option>p */}
                  {/* <option id="7" value="Delhi" >Delhi</option> */}
                  {/* <option id="8" value="Chennai" >Chennai</option> */}
                  {/* <option id="9" value="Bangluru" >Banguluru</option> */}
                  {/* <option id="10" value="Jaypur" >Jaypur</option> */}
                {/* </select> */}
              {/* </div> */}
            {/* </div> */}
          {/* </div> */}
          {/* <div className="search-div2">  */}
            {/* <select
               className="search-bar search-bar-1"
              id="11"
              placeholder="Search for locality,landmark,project or builder"
              className="search-bar search-bar-2"
              value={searchlocality}
              name="searchLocallity"  
              onChange={handleChange}  
              > 
              <option  id="1" value="Ahmedabad"  >Ahmedabad</option> 
                  <option  id="2"  value="Surat" > 
                   Surat 
                  </option>
                  <option id="3" selected value="Rajkot" >Rajkot</option>
                  <option id="4" value="Baroda" >Baroda</option>
                  <option id="5" value="Vapi" >Vapi</option>
                  <option id="6" value="Mumbai" >Mumbai</option>p
                  <option id="7" value="Delhi" >Delhi</option>
                  <option id="8" value="Chennai" >Chennai</option>
                  <option id="9" value="Bangluru" >Banguluru</option>
                  <option id="10" value="Jaypur" >Jaypur</option>
          </select>  */}
          {/* </div> */}
          {/* <button className="search-buttondiv" type="submit" onClick={handleSearch}> */}
            {/* <BsSearch/> */}
            {/* Search */}
          {/* </button>
        {/* </div> */}
      </div>
    </>
  );
}
    
export default SearchNavbar;

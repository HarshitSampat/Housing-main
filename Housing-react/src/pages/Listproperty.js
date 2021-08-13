import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'
// import Modal from "react-modal";
import Navbar from "../components/Navbar";
import ErrorMessage from "../components/ErrorMessage";
import { Card, Button, Form } from 'react-bootstrap'
import PropertyService from '../Services/PropertyService'
import Loading from '../components/Loading'
// import  AiFillFileAdd from 'react-icons/ai'

function Listproperty() {
  const history = useHistory()


  // ProertyService.getallProperty().then(res=>console.log(res.data));

  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [c1, setC1] = useState("")
  const [c2, setC2] = useState("")
  const [c3, setC3] = useState()
  // handle submit for rent or sell
  const [submitwant, setSubmitwant] = useState("")

  // Loadinn 
  const [loading, setLoading] = useState(false)
  // handle  submit
  // const [submit, setSubmit] = useState("")
  // propertytype  Coloe variable
  const [appartmentColor, setAppartmentColor] = useState("")
  const [independetcolor, setIndependetcolor] = useState("")
  const [floorcolor, setFloorcolor] = useState("")
  const [villacolor, setVillacolor] = useState("")
//  hhandlle submit for spropertytypy
const [propsubmit, setPropsubmit] = useState("")
  

  // color variable  for bhk type
  const [onerk, setOnerk] = useState("")
  const [onebhk, setOnebhk] = useState("")
  const [twobhk, setTwobhk] = useState("")
  const [threebhk, setThreebhk] = useState("")
  const [threeplusbhk, setThreeplusbhk] = useState("")
// handle setbhk submit
  const [bhksubmit, setBhksubmit] = useState("")

//   // handle   tanenttype
// const [onetanantType, setOnetanantType] = useState("")
//   const [twotanantType, setTwotanantType] = useState("")
//   const [threetanantType, setThreetanantType] = useState("")
//   const [threeplustanantType, setThreeplustanantType] = useState("")
  
  // color  variable  for bath type
  const [zerobath, setZerobath] = useState("")
  const [onebath, setOnebath] = useState("")
  const [twobath, setTwobath] = useState("")
  const [threebath, setThreebath] = useState("")
  const [threeplusbath, setThreeplusbath] = useState("")

  // submit bath
  const [bathsubmit, setBathSubmit] = useState("")

// color variable for  balconytype
  const [zerobalcony, setZeroBalcony] = useState("")
  const [onebalcony, setOneBalcony] = useState("")
  const [twobalcony, setTwoBalcony] = useState("")
  const [threebalcony, setThreeBalcony] = useState("")
  const [threeplusbalcony, setThreeplusBalcony] = useState("")
  // submit balcony
  const [submitbalcony, setSubmitbalcony] = useState("")

  //color change  for
  const [zerocoverparking, setZerocoverparking] = useState("")
  const [onecoverparking, setOnecoverparking] = useState("")
  const [twocoverparking, setTwocoverparking] = useState("")
  const [threecoverparking, setThreecoverparking] = useState("")
  const [threepluscoverparking, setThreepluscoverparking] = useState("")

  // submit cover parking
  const [submitcoverParking, setSubmitcoverParking] = useState("")

  // open parking variable declaration
  const [zeroopenParking, setZeroopenParking] = useState("")
  const [oneopenParking, setOneopenParking] = useState("")
  const [twoopenParking, setTwoopenParking] = useState("")
  const [threeopenParking, setThreeopenParking] = useState("")
  const [threeplusopenParking, setThreeplusopenParking] = useState("")
  // submitopenpparking
  const [submitOpen, setSubmitOpen] = useState("")

  // set furnished Color
  const [fullyfurnished, setFullyfurnished] = useState("")
  const [semifurnished, setSemifurnished] = useState("")
  const [Unfurnished, setUnfurnished] = useState("")
  // set  furnishsubmit 
  const [furnishedsubmit, setFurnishedsubmit] = useState("")

// set Preffred Tanant Type
  const [familytanantType, setFamilytanantType] = useState("")
  const [bachelorstanantType, setBachelorsType] = useState("")
  const [companytanantType, setCompanytanantType] = useState("")
// variable to handle for handle submit for  tenanttype
  // const [submittanantType, setSubmittanantType] = useState("")
// submit =tanenattype
  const [submitTenant, setSubmitTenant] = useState("")

// error handle
  const [error, setError] = useState("none")
  const [errorprop, setErrorprop] = useState("none")
  const [errorbhk, setErrorbhk] = useState("none")
  
  // continue
  // const [showcontinue, setShowcontinue ] = useState("disabled")

  //set rent
  const [rent, setRent] = useState("none")

  // showaddress
  const [showAddress, setShowAddress] = useState("none")
  // set sell
  const [sell, setSell] = useState("none")

  // basic info show
  const [basicInfo, setBasicInfo] = useState("")

  // handel input change variables
// set property age
  const [property_Age, setProperty_Age] = useState("")
  // set  monthlyrent
  const [monthlyrent, setMonthlyrent] = useState(null)
// setavailable from
  const [availablefrom, setAvailablefrom] = useState("")
  // set cose value
  const [cost, setCost] = useState("")
  // setpossesionn date
  const [possession_date, setPossession_date] = useState("")
// maitance charges
  const [maintance_Charges, setMaintance_Charges] = useState("")

  // handleback
  // const [handleback, setHandleback] = useState("")
  
  // variable for city store
  const [city, setCity] = useState("")

  // variable from building
  const [building, setBuilding] = useState("")

  // locality
  const [locality, setLocality] = useState("")

  // total floor
  const [totalfloor, setTotalfloor] = useState("")

  // data
  const [data, setData] = useState("")

  // handle address error
  // city error
  const [cityerror, setCityerror] = useState("none")

  // Locality Error
  const [localityerror,setLocalityerror ] = useState("none")


  // photo variables
  const [pic, setPic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  )
    const [picMessage, setPicMessage] = useState(null);
  
 
  // const propertySave = {
  //       User:User_id._id,
  //       Rent_Buy: submitwant,
  //       Property_Type:propsubmit,
  //       AgeOfProperties: property_Age,
  //       Bhk:bhksubmit,
  //       Bathroom:bathsubmit,
  //       Balcony:submitbalcony ,
  //       furnished_Type:furnishedsubmit,
  //       CoveredParking: submitcoverParking,
  //       OpenParking: submitOpen,
  //       AvailableFrom:availablefrom,
  //       MonthlyRete:monthlyrent,
  //       Maintance_Charges:maintance_Charges,
  //       Prefferd_Tenant_Type:submitTenant,
  //       City:city ,
  //       Locality: locality,
  //       Image: data.secure_url
  // }

  
  const handleShow = (e) => {
    e.preventDefault()
    if (submitwant !== "" && propsubmit !=="" && bhksubmit !=="") {
      setShowAddress("")
      setBasicInfo("none")
    }
    else {
      alert("Check Form again")
      if (submitwant === "" && propsubmit === "" && bhksubmit === "") {
        setError("")
        setErrorprop("")
        setErrorbhk("")
      }
      else if (submitwant === "" && propsubmit === "") {
        setError("")
        setErrorprop("")
      }
      
      else if (submitwant === "" && bhksubmit === "") {
        setError("")
        setErrorbhk("")
      }
      else if (bhksubmit === "" && propsubmit === "") {
        setErrorbhk("")
        setErrorprop("")
      }
      else if (submitwant === "") {
        setError("")
      }
      else if (propsubmit === "") {
        setErrorprop("")
      }else if (bhksubmit === "") {
        setErrorbhk("")
      }
      
     
    }
   }

  const handleChange = (e) => {
    if (e.target.id === "12") {
      if (c1 === "") {
        setC1("backroundChange")
        setC2("")
        setC3("")
        setRent("")
        setSubmitwant("Rent")
        setSell("none")
        setError("none")
      } 
    } else if (e.target.id === "13") {
      if (c2 === "") {
        setC2("backroundChange")
        setC1("")
        setC3("")
        setRent("none")
        setSubmitwant("sell")
        setSell("")
        setError("none")
      } 
    }else if (e.target.id === "14") {
      if (c3 === "") {
        setC3("backroundChange")
        setC1("")
        setC2("")
        setRent("none")
        setSell("none")
      }
    }else {
      setC1("")
      setC2("")
      setC3("")
      setSell("")
    }
  };
  //  console.log(submitwant);
  
  const handlePropertyTypeColor = (e) => {
    if (e.target.id === "15") {
      if (appartmentColor === "") {
        setAppartmentColor("backroundChange")
        setIndependetcolor("")
        setFloorcolor("")
        setVillacolor("")
        setPropsubmit("Apartment")
        setErrorprop("none")
      } 
    } else if (e.target.id === "16") {
      if (independetcolor === "") {
        setAppartmentColor("")
        setIndependetcolor("backroundChange")
        setFloorcolor("")
        setVillacolor("")
        setPropsubmit("Independent House")
        setErrorprop("none")
      } 
    }else if (e.target.id === "17") {
      if (floorcolor === "") {
       setAppartmentColor("")
        setIndependetcolor("")
        setFloorcolor("backroundChange")
        setVillacolor("")
        setPropsubmit("Independent Floor")
        setErrorprop("none")
      }
    }else if (e.target.id === "18") {
      if (villacolor === "") {
       setAppartmentColor("")
        setIndependetcolor("")
        setFloorcolor("")
        setVillacolor("backroundChange")
        setPropsubmit("Villa")
        setErrorprop("none")
      }
    }else {
       setAppartmentColor("")
        setIndependetcolor("")
        setFloorcolor("")
        setVillacolor("")
        setPropsubmit("")
        setErrorprop("none")
    }
  };
  // console.log(propsubmit);
  // tanantType color handling
    const handlebhkTypeColor = (e) => {
    if (e.target.id === "19") {
      if (onerk === "") {
        setOnerk("backroundChange")
        setOnebhk("")
        setTwobhk("")
        setThreebhk("")
        setThreeplusbhk("")
        setBhksubmit("1rk")
        setErrorbhk("none")
        
      } 
    } else if (e.target.id === "20") {
      if (onebhk === "") {
        setOnerk("")
        setOnebhk("backroundChange")
        setTwobhk("")
        setThreebhk("")
        setThreeplusbhk("")
        setBhksubmit("1bhk")
        setErrorbhk("none")
      } 
    }else if (e.target.id === "21") {
      if (twobhk === "") {
       setOnerk("")
        setOnebhk("")
        setTwobhk("backroundChange")
        setThreebhk("")
        setThreeplusbhk("")
        setBhksubmit("2bhk")
        setErrorbhk("none")
      }
    }else if (e.target.id === "22") {
      if (threebhk === "") {
       setOnerk("")
        setOnebhk("")
        setTwobhk("")
        setThreebhk("backroundChange")
        setThreeplusbhk("")
        setBhksubmit("3bhk")
        setErrorbhk("none")
      }
    }else if (e.target.id === "23") {
      if (threeplusbhk === "") {
       setOnerk("")
        setOnebhk("")
        setTwobhk("")
        setThreebhk("")
        setThreeplusbhk("backroundChange")
        setBhksubmit("3+bhk")
        setErrorbhk("none")
      }
    }else {
       setOnerk("")
        setOnebhk("")
        setTwobhk("")
        setThreebhk("")
        setThreeplusbhk("")
        setBhksubmit("")
        setErrorbhk("none")
    }
    };
  console.log(bhksubmit);
  // handleBath Color

  const handleBathColor = (e) => {
    if (e.target.id === "24") {
      if (zerobath === "") {
        setZerobath("backroundChange")
        setOnebath("")
        setTwobath("")
        setThreebath("")
        setThreeplusbath("")
        setBathSubmit("0")
      } 
    } else if (e.target.id === "25") {
      if (onebath === "") {
        setZerobath("")
        setOnebath("backroundChange")
        setTwobath("")
        setThreebath("")
        setThreeplusbath("")
        setBathSubmit("1")
      } 
    }else if (e.target.id === "26") {
      if (twobath === "") {
       setZerobath("")
        setOnebath("")
        setTwobath("backroundChange")
        setThreebath("")
        setThreeplusbath("")
        setBathSubmit("2")
      }
    }else if (e.target.id === "27") {
      if (threebath === "") {
       setZerobath("")
        setOnebath("")
        setTwobath("")
        setThreebath("backroundChange")
        setThreeplusbath("")
        setBathSubmit("3")
      }
    }else if (e.target.id === "28") {
      if (threeplusbath === "") {
       setOnerk("")
        setOnebath("")
        setTwobath("")
        setThreebath("")
        setThreeplusbath("backroundChange")
        setBathSubmit("3+")
      }
    }else {
       setZerobath("")
        setOnebath("")
        setTwobath("")
        setThreebath("")
        setThreeplusbath("")
        setBathSubmit("")
    }
  };
  // console.log(bathsubmit);
  // to handle furnishcolor funnction

  const handlefurnishedColor = (e) => {
    if (e.target.id === "34") {
      if (fullyfurnished === "") {
        setFullyfurnished("backroundChange")
        setSemifurnished("")
        setUnfurnished("")
        setFurnishedsubmit("fullyfurnished")
      } 
    } else if (e.target.id === "35") {
      if (semifurnished === "") {
        setFullyfurnished("")
        setSemifurnished("backroundChange")
        setUnfurnished("")
        setFurnishedsubmit("semifurnished")
      } 
    }else if (e.target.id === "36") {
      if (Unfurnished === "") {
      setFullyfurnished("")
        setSemifurnished("")
        setUnfurnished("backroundChange")
        setFurnishedsubmit("Unfurnished")
      }
    }else {
       setFullyfurnished("")
        setSemifurnished("")
        setUnfurnished("")
        setFurnishedsubmit("")
    }
  };
  // console.log(furnishedsubmit);

  // function balconeycolorfunction
  const handlebalconyColor = (e) => {
    if (e.target.id === "29") {
      if (zerobalcony === "") {
        setZeroBalcony("backroundChange")
        setOneBalcony("")
        setTwoBalcony("")
        setThreeBalcony("")
        setThreeplusBalcony("")
        setSubmitbalcony("0")
      } 
    } else if (e.target.id === "30") {
      if (onebalcony === "") {
        setZeroBalcony("")
        setOneBalcony("backroundChange")
        setTwoBalcony("")
        setThreeBalcony("")
        setThreeplusBalcony("")
        setSubmitbalcony("1")
      } 
    }else if (e.target.id === "31") {
      if (twobalcony === "") {
       setZeroBalcony("")
        setOneBalcony("")
        setTwoBalcony("backroundChange")
        setThreeBalcony("")
        setThreeplusBalcony("")
        setSubmitbalcony("2")
      }
    }else if (e.target.id === "32") {
      if (threebalcony === "") {
       setZeroBalcony("")
        setOneBalcony("")
        setTwoBalcony("")
        setThreeBalcony("backroundChange")
        setThreeplusBalcony("")
        setSubmitbalcony("3")
      }
    }else if (e.target.id === "33") {
      if (threeplusbalcony === "") {
       setOnerk("")
        setOneBalcony("")
        setTwoBalcony("")
        setThreeBalcony("")
        setThreeplusBalcony("backroundChange")
        setSubmitbalcony("3+")
      }
    }else {
       setZeroBalcony("")
        setOneBalcony("")
        setTwoBalcony("")
        setThreeBalcony("")
        setThreeplusBalcony("")
        setSubmitbalcony("")
    }
  };
  // console.log(submitbalcony);

  // handle coveredparking 
  const handlecoverparkingColor = (e) => {
    if (e.target.id === "37") {
      if (zerocoverparking === "") {
        setZerocoverparking("backroundChange")
        setOnecoverparking("")
        setTwocoverparking("")
        setThreecoverparking("")
        setThreepluscoverparking("")
        setSubmitcoverParking("0")
      } 
    } else if (e.target.id === "38") {
      if (onecoverparking === "") {
        setZerocoverparking("")
        setOnecoverparking("backroundChange")
        setTwocoverparking("")
        setThreecoverparking("")
        setThreepluscoverparking("")
        setSubmitcoverParking("1")
      } 
    }else if (e.target.id === "39") {
      if (twocoverparking === "") {
       setZerocoverparking("")
        setOnecoverparking("")
        setTwocoverparking("backroundChange")
        setThreecoverparking("")
        setThreepluscoverparking("")
        setSubmitcoverParking("2")
      }
    }else if (e.target.id === "40") {
      if (threecoverparking === "") {
       setZerocoverparking("")
        setOnecoverparking("")
        setTwocoverparking("")
        setThreecoverparking("backroundChange")
        setThreepluscoverparking("")
        setSubmitcoverParking("3")
      }
    }else if (e.target.id === "41") {
      if (threepluscoverparking === "") {
       setOnerk("")
        setOnecoverparking("")
        setTwocoverparking("")
        setThreecoverparking("")
        setThreepluscoverparking("backroundChange")
        setSubmitcoverParking("3+")
      }
    }else {
       setZerocoverparking("")
        setOnecoverparking("")
        setTwocoverparking("")
        setThreecoverparking("")
        setThreepluscoverparking("")
        setSubmitcoverParking("")
    }
  };
  // console.log(submitcoverParking);
  //handle  open parking color
  const handleopenparkingColor = (e) => {
    if (e.target.id === "42") {
      if (zeroopenParking === "") {
        setZeroopenParking("backroundChange")
        setOneopenParking("")
        setTwoopenParking("")
        setThreeopenParking("")
        setThreeplusopenParking("")
        setSubmitOpen("0")
      } 
    } else if (e.target.id === "43") {
      if (oneopenParking === "") {
        setZeroopenParking("")
        setOneopenParking("backroundChange")
        setTwoopenParking("")
        setThreeopenParking("")
        setThreeplusopenParking("")
        setSubmitOpen("1")
      } 
    }else if (e.target.id === "44") {
      if (twoopenParking === "") {
       setZeroopenParking("")
        setOneopenParking("")
        setTwoopenParking("backroundChange")
        setThreeopenParking("")
        setThreeplusopenParking("")
        setSubmitOpen("2")
      }
    }else if (e.target.id === "45") {
      if (threeopenParking === "") {
       setZeroopenParking("")
        setOneopenParking("")
        setTwoopenParking("")
        setThreeopenParking("backroundChange")
        setThreeplusopenParking("")
        setSubmitOpen("3")
      }
    }else if (e.target.id === "46") {
      if (threeplusopenParking === "") {
       setOnerk("")
        setOneopenParking("")
        setTwoopenParking("")
        setThreeopenParking("")
        setThreeplusopenParking("backroundChange")
        setSubmitOpen("3+")
      }
    }else {
       setZeroopenParking("")
        setOneopenParking("")
        setTwoopenParking("")
        setThreeopenParking("")
        setThreeplusopenParking("")
        setSubmitOpen("")
    }
  };
  // console.log(submitOpen);
  // handle tanent color
  const handletanentColor = (e) => {
    if (e.target.id === "47") {
      if (familytanantType === "") {
        setFamilytanantType("backroundChange")
        setBachelorsType("")
        setCompanytanantType("")
        setSubmitTenant("family")
      }
    } else if (e.target.id === "48") {
      if (bachelorstanantType === "") {
        setFamilytanantType("")
        setBachelorsType("backroundChange")
        setCompanytanantType("")
        setSubmitTenant("bachelors")
      }
    } else if (e.target.id === "49") {
      if (companytanantType === "") {
        setFamilytanantType("")
        setBachelorsType("")
        setCompanytanantType("backroundChange")
        setSubmitTenant("company")
      }
    }else {
       setFamilytanantType("")
        setBachelorsType("")
        setCompanytanantType("backroundChange")
        setSubmitTenant("")
    }
  }
  // console.log(submittanantType);

  // handle inpput change function
  const handleInputChange = (e) => {
    e.preventDefault()
    if (e.target.id === "Text-1") {
      setProperty_Age(e.target.value)
    }
    else if (e.target.id === "Text-2") {
      setMonthlyrent(e.target.value)
    }
    else if (e.target.id === "Text-3") {
      setAvailablefrom(e.target.value)
    }
    else if (e.target.id === "Text-4") {
      setCost(e.target.value)
    }
    else if (e.target.id === "Text-6") {
      setPossession_date(e.target.value)
    }
    else if (e.target.id === "Text-7") {
      setMaintance_Charges(e.target.value)
    } else {
      console.log("hello");
    }

  }
  // console.log(property_Age);
  // console.log(monthlyrent);
  // console.log(availablefrom);
  // console.log(cost);
  // console.log(possession_date);
  // console.log(maintance_Charges);


  // handle back
  const handlebackbutton = (e) => {
    e.preventDefault()
    setShowAddress("none")
    setBasicInfo("")
  }
  

  const handleAddress = (e) => {
    if (e.target.id === "A-1") {
      setCity(e.target.value)
      setCityerror("none")
    }else if (e.target.id === "A-2") {
      setBuilding(e.target.value)
    }else if (e.target.id === "A-3") {
      setLocality(e.target.value)
      setLocalityerror("none")
    }else if (e.target.id === "A-4") {
      setTotalfloor
          (e.target.value)
    }
    
   }
  // console.log(city);
  // console.log(building);
  // console.log(locality);
  // console.log(totalfloor);
  // useEffect

  const handlefinalSubmit = async(e) => {
    e.preventDefault();
    if (city !== "" && locality !== "") {
      setCityerror("none")
      setLocalityerror("none")
    }
    else {
      if (city === "" && locality === "") {
        setCityerror("")
        setLocalityerror("")
      }
      else if (city === "") {
        setCityerror("")
        setLocalityerror("none")
      }
      else if (locality === "") {
        setLocalityerror("")
        setCityerror("none")
      }
      else {
        alert("Something wrong")
      }
      
    }
    // ppropertySave
    const User_id = localStorage.getItem("userId")
    const ContactNo = localStorage.getItem("contactNo")
    const propertySave = {
        User: User_id,
        contactNo:ContactNo,
        Rent_Buy: submitwant,
        Property_Type:propsubmit,
        AgeOfProperties: property_Age,
        Bhk:bhksubmit,
        Bathroom:bathsubmit,
        Balcony:submitbalcony ,
        furnished_Type:furnishedsubmit,
        CoveredParking: submitcoverParking,
        OpenParking: submitOpen,
        AvailableFrom:availablefrom,
        MonthlyRate:monthlyrent,
        Maintance_Charges:maintance_Charges,
        Prefferd_Tenant_Type:submitTenant,
        City:city ,
        Locality: locality,
        Image: data.secure_url
  }
    // axios post
    await axios.post("http://localhost:3001/api/property/", propertySave).then(res => {
      console.log(res);
      alert("Congratulations! You upload details SuccessFully we will contact you soon");
      history.push('/list-property')
      
    }).catch (err => console.log(err))
    window.location.reload()
     history.push('/list-property') 
    // console.log(uploadData);
   
  }

  const postDetails = async(pics) => {
     setLoading(true)
    if (!pics) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png" ||pics.type === "image/jpg") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Housing_Com");
      data.append("folder","Properties")
      data.append("cloud_name", "dip3poftg");
      fetch("https://api.cloudinary.com/v1_1/dip3poftg/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json() )
          .then((data) => {
            console.log(data);
            setPic(data.url.toString());
            setData(data);
            setLoading(false)
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
    // window.location.reload()
  };


console.log(pic);
  useEffect(() => {
  
    const userInfo = localStorage.getItem("userInfo")
    if (userInfo) { history.push("/list-Property") }
    else { history.push("/login") }
    

     PropertyService.getallProperty().then(res => { console.log(res);})
    .catch(err=>console.log(err))
   }, []);
  
  return (
    <>
      <div className="container1">
      <Navbar />
      <div className="list-property-sidebar su-main-cont-1">
        <div className="su-sidebar">
          {/* <div>
            <a href="/dashboard">
              <span className="su-sb-li">Home</span>
            </a>
          </div> */}
          <div>
            <a href="/leads/buy">
              <span className="su-sb-li">Leads</span>
            </a>
          </div>
          <div>
            <a href="/my-listings">
              <span className="su-sb-li">Properties</span>
            </a>
          </div>
          <div>
            <a href="/my-profile">
              <span className="su-sb-li">
                Profile
                <span className="su-warning ">
                  <span
                    className="tooltip status-reason tooltip-bottom"
                    data-title="Not Verified"
                  >
                    <span classNameName="va-middle status-reason-icon"></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div>
            <a href="/my-rewards">
              <span className="su-sb-li">My Rewards</span>
            </a>
          </div>
        </div>
      </div>
      <div>
        {/* form for basic  details */}
      <form onSubmit="submit" className="su-main-cont-1">
        <div className="su-main-cont">
          <div className="su-head">Upload Listing</div>
          <div className="tab-content">
            <ul className="tab-head">
              <li className="active">Basic Info</li>
              <li className={`active`}>Address</li>
              {/* <li className="active">Photos</li> */}
            </ul>
            <div className="tab-content">
              <div className="su-basic" style={{ display: basicInfo}}>
                <div>
                  <span className="mandatoryMarker">*</span>indicates a
                  mandatory field
                </div>
                
                <div className="form-cont">
                  <div className="field new-icon">
                    <div className="group">
                      <div className="title no-bottom">
                        I want to
                        <span className="mandatoryMarker">*</span>
                      </div>
                      <div>
                        <div className="rf-group radio-group service">
                          <div className={`rf-toggle radio radio-0 toggle-active toggle-tag pills toggle-lable ${c1}`} id="12" onClick={handleChange}>
                            <div className="toggle-lable" id="12">Rent</div>
                          </div>
                          <div className={`rf-toggle radio radio-1 toggle-tag pills ${c2}`} id="13" onClick={handleChange}>
                            <div className={`toggle-label `} id="13" >Sell</div>
                          </div>
                        </div>

                            {/* error div */}
                        <div id="renterrorStyle" style={{ display: error}} className="bg-danger">
                        <ErrorMessage variant={"danger"}>
                        <h6>Choose rent or sell</h6>
                          </ErrorMessage>
                            </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="field">
                    <div className="group">
                      <div className="title no-bottom">
                        Property Type
                        <span className="mandatoryMarker">*</span>
                      </div>
                      <div>
                        <div className="rf-group radio-group property_type_id">
                          <div className={`rf-toggle radio radio-0 toggle-active toggle-tag pills ${appartmentColor}`} id="15" onClick={handlePropertyTypeColor}>
                            <div className="toggle-label"  id="15">Apartment</div>
                          </div>
                          <div className={`rf-toggle radio radio-1 toggle-tag pills ${independetcolor}`} id="16" onClick={handlePropertyTypeColor}>
                            <div className="toggle-label" id="16">
                              Independent House
                            </div>
                          </div>
                          <div className={`rf-toggle radio radio-2 toggle-tag pills ${floorcolor}`} id="17" onClick={handlePropertyTypeColor}>
                            <div className="toggle-label" id="17">
                              Independent Floor
                            </div>
                          </div>
                          <div className={`rf-toggle radio radio-3 toggle-tag pills ${villacolor}`} id="18" onClick={handlePropertyTypeColor}>
                            <div className="toggle-label" id="18">Villa</div>
                          </div>
                            </div>
                        <div id="renterrorStyle" style={{ display: errorprop }} className="bg-danger">
                        <ErrorMessage variant={"danger"}>
                        <h6>Kindly select one of above field</h6>
                          </ErrorMessage>
                            </div>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label>
                        Age of Property (in years)
                      </label>
                      <span className="helper">
                        <span
                          className="tooltip status-reason tooltip-bottom-left age-of-property-tooltip"
                          data-title="This field describes how old is the property. For new properties enter 0 years."
                        >
                          <span className="va-middle status-reason-icon"></span>
                        </span>
                      </span>
                    <div className="">
                      <input
                            type="number"
                            autocomplete="text"
                            placeholder="Enter Age of yor property"
                            className="input-border"
                            max="99"
                            name="Property_Age"
                            value={property_Age}
                            onChange={handleInputChange }
                            id="Text-1"
                      />
                      
                      <ul className="result-cont"></ul>
                    </div>
                  </div>
                  <div className="field">   
                    <div className="group">
                      <div className="title no-bottom">
                        BHK<span className="mandatoryMarker">*</span>
                      </div>
                      <div>
                        <div className="rf-group radio-group apartment_type_id">
                          <div className={`rf-toggle radio radio-0 toggle-active toggle-tag pills ${onerk}`} id="19" onClick={handlebhkTypeColor}>
                            <div className="toggle-label" id="19">1 RK</div>
                          </div>
                          <div className={`rf-toggle radio radio-1 toggle-tag pills ${onebhk}`} id="20" onClick={handlebhkTypeColor}>
                            <div className="toggle-label" id="20">1 bhk</div>
                          </div>
                          <div className={`rf-toggle radio radio-2 toggle-tag pills ${twobhk}`} id="21" onClick={handlebhkTypeColor}>
                            <div className="toggle-label" id="21">2 bhk</div>
                          </div>
                          <div className={`rf-toggle radio radio-3 toggle-tag pills ${threebhk}`} id="22" onClick={handlebhkTypeColor}>
                            <div className="toggle-label" id="22">3 bhk</div>
                          </div>
                          <div className={`rf-toggle radio radio-4 toggle-tag pills ${threeplusbhk}`} id="23" onClick={handlebhkTypeColor}>
                            <div className="toggle-label" id="23">3+ bhk</div>
                          </div>
                        </div>
                        <div className="errorStyle"></div>
                          </div>
                           <div id="renterrorStyle" style={{ display: errorbhk}} className="bg-danger">
                        <ErrorMessage variant={"danger"}>
                        <h6>Choose atleast one valueFrom above field</h6>
                          </ErrorMessage>
                            </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="group">
                      <div className="title no-bottom">
                        Bathroom
                      </div>
                      <div>
                        <div className="rf-group radio-group total_bathroom_count">
                          <div className={`rf-toggle radio radio-0 toggle-tag pills ${zerobath}`} id="24" onClick={handleBathColor}>
                            <div className="toggle-label" id="24">0</div>
                          </div>
                          <div className={ `rf-toggle radio radio-1 toggle-active toggle-tag pills ${onebath}`}  id="25" onClick={handleBathColor}>
                            <div className="toggle-label" id="25">1</div>
                          </div>

                          <div className={ `rf-toggle radio radio-2 toggle-tag pills ${twobath}`}  id="26" onClick={handleBathColor}>
                            <div className="toggle-label" id="26">2</div>
                          </div>
                          <div className={`rf-toggle radio radio-3 toggle-tag pills ${threebath}`}  id="27" onClick={handleBathColor}>
                            <div className="toggle-label" id="27">3</div>
                          </div>
                          <div className={`rf-toggle radio radio-4 toggle-tag pills ${threeplusbath}`}  id="28" onClick={handleBathColor}>
                            <div className="toggle-label" id="28">3+</div>
                          </div>
                        </div>
                        <div className="errorStyle"></div>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="group">
                      <div className="title no-bottom">
                        Balcony
                      </div>
                      <div>
                        <div className="rf-group radio-group total_balcony_count">
                          <div className={`rf-toggle radio radio-0 toggle-tag pills ${zerobalcony}`} id="29" onClick={handlebalconyColor}>
                            <div className="toggle-label" id="29">0</div>
                          </div>
                          <div className={`rf-toggle radio radio-1 toggle-active toggle-tag pills ${onebalcony}`} id="30" onClick={handlebalconyColor}>
                            <div className="toggle-label" id="30">1</div>
                          </div>
                          <div className={`rf-toggle radio radio-2 toggle-tag pills ${twobalcony}`} id="31" onClick={handlebalconyColor}>
                            <div className="toggle-label" id="31">2</div>
                          </div>
                          <div className={`rf-toggle radio radio-3 toggle-tag pills ${threebalcony}`} id="32" onClick={handlebalconyColor}>
                            <div className="toggle-label" id="32">3</div>
                          </div>
                          <div className={`rf-toggle radio radio-4 toggle-tag pills ${threeplusbalcony}`} id="33" onClick={handlebalconyColor}>
                            <div className="toggle-label" id="33">3+</div>
                          </div>
                        </div>
                        <div className="errorStyle"></div>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="group">
                      <div className="title no-bottom">
                        Furnish Type
                      </div>
                      <div>
                        <div className="rf-group radio-group furnish_type_id">
                          <div className={`rf-toggle radio radio-0 toggle-active toggle-tag pills
                          ${fullyfurnished}`} id="34" onClick={handlefurnishedColor}>
                            <div className="toggle-label" id="34">Fully Furnished</div>
                          </div>
                          <div className={`rf-toggle radio radio-1 toggle-tag pills ${semifurnished}`} id="35" onClick={handlefurnishedColor}>
                            <div className="toggle-label" id="35">Semi Furnished</div>
                          </div>
                          <div className={`rf-toggle radio radio-2 toggle-tag pills ${Unfurnished}`} id="36" onClick={handlefurnishedColor}>
                            <div className="toggle-label" id="36">Unfurnished</div>
                          </div>
                        </div>
                        <div className="errorStyle"></div>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="group">
                      <div className="title no-bottom">
                        Covered Parking
                      </div>
                      <div>
                        <div className="rf-group radio-group covered_parking_count">
                          <div className={`rf-toggle radio radio-0 toggle-tag pills ${zerocoverparking}`} id="37" onClick={handlecoverparkingColor}>
                            <div className="toggle-label" id="37">0</div>
                          </div>
                          <div className={`rf-toggle radio radio-1 toggle-active toggle-tag pills ${onecoverparking}`} id="38" onClick={handlecoverparkingColor}>
                            <div className="toggle-label" id="38">1</div>
                          </div>
                          <div className={`rf-toggle radio radio-2 toggle-tag pills ${twocoverparking}`} id="39">
                            <div className="toggle-label" id="39" onClick={handlecoverparkingColor}>2</div>
                          </div>
                          <div className={`rf-toggle radio radio-3 toggle-tag pills ${threecoverparking}`} id="40">
                            <div className="toggle-label" id="40" onClick={handlecoverparkingColor}>3</div>
                          </div>
                          <div className={`rf-toggle radio radio-4 toggle-tag pills ${threepluscoverparking}`} id="41" onClick={handlecoverparkingColor}>
                            <div className="toggle-label" id="41">3+</div>
                          </div>
                        </div>
                        <div className="errorStyle"></div>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="group">
                      <div className="title no-bottom">
                        Open Parking
                      </div>
                      <div>
                        <div className="rf-group radio-group open_parking_count">
                          <div className={`rf-toggle radio radio-0 toggle-tag pills ${zeroopenParking}`} id="42" onClick={handleopenparkingColor}>
                            <div className="toggle-label" id="42">0</div>
                          </div>
                          <div className={`rf-toggle radio radio-1 toggle-active toggle-tag pills ${oneopenParking}`} id="43" onClick={handleopenparkingColor}>
                            <div className="toggle-label" id="43">1</div>
                          </div>
                          <div className={`rf-toggle radio radio-2 toggle-tag pills ${twoopenParking}`} id="44" onClick={handleopenparkingColor}>
                            <div className="toggle-label" id="44">2</div>
                          </div>
                          <div className={`rf-toggle radio radio-3 toggle-tag pills ${threeopenParking}`} id="45" onClick={handleopenparkingColor}>
                            <div className="toggle-label" id="45">3</div>
                          </div>
                          <div className={`rf-toggle radio radio-4 toggle-tag pills ${threeplusopenParking}`} id="46" onClick={handleopenparkingColor}>
                            <div className="toggle-label" id="46">3+</div>
                          </div>
                        </div>
                        <div className="errorStyle"></div>
                      </div>
                    </div>
                  </div>
                  <div style={ {display:rent}}>
                    <label>
                        Monthly Rent
                      </label>
                    <div className="">
                      <input
                        type="Number"
                        placeholder="Enter Rent as you expected"
                        className="input-border"
                        // name="Monthly_Rent"
                            value={monthlyrent}
                            onChange={handleInputChange}
                            id="Text-2"
                        Required
                      />
                  </div>
                  </div><br/>
                  <div style={{ display: rent }}>
                    <label>
                        Available  from
                      </label>
                    <div className="">
                      <input
                            type="date"
                            placeholder="Enter Rent as you expected"
                            className="input-border"
                            value={availablefrom}
                            onChange={handleInputChange}
                            id="Text-3"
                      />
                  </div>
                  </div>
                  <div style={{ display: sell }}>
                    <label>
                        Cost<span className="mandatoryMarker">*</span>
                      </label>
                    <div className="">
                      <input
                            type="text"
                            placeholder="Enter Expected cost"
                            className="input-border"
                            value={cost}
                            id="Text-4"
                            onChange={handleInputChange }
                      />
                  </div>
                  </div>
                  <br/>
                  <div style={{ display:sell }}>
                    <label>
                        Possession Date<span className="mandatoryMarker">*</span>
                      </label>
                    <div className="">
                      <input
                            type="date"
                            name="Possession Date"
                            placeholder="Enter Rent as you expected"
                            className="input-border"
                            value={possession_date}
                            id="Text-6"
                            onChange={handleInputChange }
                      />
                  </div>
                  </div>
                  <br/>
                  <div >
                    {/* <label className="text-dark">
                          Maintance_Charges
                    </label>
                    <div>
                          <input
                            type="number"
                            id="Text-7"
                            value={maintance_Charges}
                            placeholder="Enter Maintaince charges"
                            className="input-border"

                          />
                    </div> */}
                    </div><br/>
                  <div className="field"  style={{ display: rent }}>
                    <div className="group">
                      <div className="title no-bottom">
                        Preferred Tenant Type
                      </div>
                      
                      <div id="tenantside">
                        <div className="rf-group checkbox-group lease_type_ids">
                          <div className={`rf-toggle checkbox checkbox-0 toggle-active toggle-tag pills ${familytanantType}`} id="47" onClick={handletanentColor}>
                            <div className="toggle-label" id="47" >Family</div>
                          </div>
                          <div className={`rf-toggle checkbox checkbox-1 toggle-tag pills ${bachelorstanantType}`}id="48">
                            <div className={`toggle-label `} id="48" onClick={handletanentColor}>Bachelors</div>
                          </div>
                          <div className={`rf-toggle checkbox checkbox-2 toggle-tag pills ${companytanantType}`}>
                            <div className={`toggle-label ${companytanantType}`} id="49" onClick={handletanentColor}>Company</div>
                          </div>
                        </div>
                        <div className="errorStyle"></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button className={`btn btn-success diable`} onClick={handleShow}>Continue</button>
                  </div>
                </div>
              </div>
              
              {/* address */}
              <div style={{ display: showAddress}}>
                <div className="su-address">
                  <div><span className="mandatoryMarker">*</span>indicates a mandatory field
                  </div>
                  <div className="form-cont">
                      <div className="field">
                          <div className="">
                            <label>City</label>
                              <span className="mandatoryMarker">*</span><br/>
                            <input
                              className="has-value data-hj-allow input-border"
                              type="text"
                              autocomplete="text" 
                              section="address"
                              id="A-1"
                              value={city}
                              onChange={handleAddress }
                            />
                              {/* error div */}
                        <div id="cityerrorStyle" style={{ display: cityerror}} className="bg-danger">
                        <ErrorMessage variant={"danger"}>
                        <h6>please filled city name</h6>
                          </ErrorMessage>
                            </div>
                          </div>
                        </div>
                        <div className="field building">
                          <label>Building/Project </label>
                              <span className="mandatoryMarker">(Optional)</span><br/>
                          <div className="">
                            <input
                              className="data-hj-allow input-border"
                              type="text"
                              autocomplete="text"
                              section="address"
                              value={building}
                              id="A-2"
                              onChange={handleAddress}
                            />
                          
                          </div></div>
                        {/*  */}
                        <div className="field building">
                          <label>Locality</label>
                              <span className="mandatoryMarker">*</span><br/>
                          <div className="">
                            <input
                              className="data-hj-allow input-border"
                              type="text"
                              autocomplete="text"
                              section="address"
                              value={locality}
                              id="A-3"
                              onChange={handleAddress}
                            />
                            
                            <div id="cityerrorStyle" style={{ display: localityerror}} className="bg-danger">
                        <ErrorMessage variant={"danger"}>
                        <h6>please filled locality name</h6>
                          </ErrorMessage>
                            </div>
                          </div>
                        </div>
                        
                        
                        {/* total floors */}
                        <div className="field ">
                          <div className="">
                            <label>Total Floor</label>
                              <br/>
                            <input
                              className="input-border mb-5"
                              type="text"
                              autocomplete="text"
                              isvalid="true"
                              value={totalfloor}
                              id="A-4"
                              onChange={handleAddress}
                            /></div>
                    </div>
                        <div className="btn-cont-share-partner">
                          <div className="form-check">
                      <div></div></div>

                          
                  <div>
                            <h5><lable>Upload Properties Photo</lable>
                              <div>{loading && <Loading /> }
                                <button className="btn btn-danger">
                                  <Form.File
                                  onChange={(e) => postDetails(e.target.files[0])}
                                  id="custom-file"
                                  type="image/png"
                                  label="Upload Images"
                                  custom/>
                                </button>
                              </div>
                  </h5>
                  
                </div><br/>
                          <button className="back-button btn btn-primary bordered"
                            onClick={handlebackbutton}>Back</button
                          >
                          <Button className="btn btn-success ml-5" onClick={ handlefinalSubmit}>Submit</Button></div></div></div>
              </div>
            </div>
                
          </div>
        </div>
      </form>
      </div>
      
      </div>

      {/* card designinng */}
      <div className="css-card-div-property container">
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={data.secure_url} alt="PropertyImg"/>
  <Card.Body className="bg-light texr-white">
    <Card.Title className="text-light text-center border border-radius rounded logout-button">Property Card</Card.Title><hr className="text-white"/>
        
            {/*card for the  */}
        <Card.Text className="text-white logout-button">
            <div className="ml-3">
             <small className=""> You want to "{submitwant}" Property<br/><br/>
              
              Property Type :{propsubmit}<br/><br/>
              Bhk : {bhksubmit}<br/><br/>
              Bathrooms :{bathsubmit}<br /><br />
                Balcony : {submitbalcony}<br /><br />
                CoverParkinng : {submitcoverParking}<br /><br />
                OpenParking : {submitOpen}<br /><br />
                  FurnishedType : {furnishedsubmit}<br /><br />
                  City:{city}<br /><br />
                  Locality : { locality}<br/><br/>
                </small>
                </div>

    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
          
      </div>
       
    </>
    
  );
}

export default Listproperty;

import axios from "axios";
import React, {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import styleButtons from "../StyleButtons/Style.json"

console.log("masuk login awal 1")

const HalamanLogin = () => {
  const [values, setValues] = useState({});
  const [cookies, setCookies] = useCookies(["accessToken", "id", "email","loginStatus"]);
  
  const navigate = useNavigate();

  console.log("masuk login awal 2")
  useEffect(() => {
    /**
     * 1. cek apakah akses token ada atau tidak
     * 2. cek apakah akses token decode strukturnya valid apa tidak
     * 3. cek server apakah akses token valid apa tidak
     */

    if (cookies.accessToken && cookies.loginStatus) {  
      console.log("masuk login awal 3")
      navigate(`/userDashboard/${cookies.id}`);
    }
    else{
      console.log("masuk login 4")
      navigate("/login");
    }
}, []);


  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:8000/auth/login", values)
      .then((res) => {
        const { accessToken, id, loginStatus } = res.data;

      
        console.log("masuk axios login ")

        setCookies("accessToken", accessToken, { maxAge: 500000000000000 });

        setCookies("id", id, { maxAge: 500000000000000 });

        setCookies("loginStatus", loginStatus, { maxAge: 500000000000000 })
  

        if(res.status===200){
          console.log("masuk login ke userdashboard")
          navigate(`/userDashboard/${id}`);
        }
        
      })
      .catch((err) => alert("login gagal"));
  };


  return (
    <div  style={{"border" : " 0px solid rgb(0, 42, 78)", "position": "relative"}}> 
    <div style={styles.borderLogin }> 

    <div style={{"textAlign" : "center", "fontSize" : "20px"}}>
       <h1 style={{"color" : "rgb(0, 42, 78)"}}>Log in </h1> 
      <form onSubmit={handleSubmit}>

      <label >  <span style={{  "color" : "#00213e"}  }> Email   </span></label>
        <div >
         
          <input placeholder="Masukan Email Anda" style={{"border" : "0.2px solid gray", "backgroundColor" : "1a64a6", "width" : "62.5%", "height" : "28px","borderRadius" : "5px"}} name="email" onChange={handleOnChange}  value={values.email} 
          
          />
          <br></br>
        </div>
        <label> <span style={{"color" : "#00213e"}}> Password </span> </label>
        <div>
       
          <input placeholder="Masukan Password Anda" style={{"border" : "0.2px solid gray","backgroundColor" : "1a64a6", "width" : "62.5%", "height" : "28px","borderRadius" : "5px"}}  name="password" id="bodyId" onChange={handleOnChange}   />
        </div>
        <br></br>
        <div  style={{"textAlign" : "center",}}>
          <button  type="submit" style={styleButtons.button7} > Login </button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

const styles = {
  borderLogin: {
    "border" : "0px solid rgb(0, 42, 78)", 
     "width" : "40%",
     "height" : "315px",
     "marginLeft": "50%",
     "marginTop": "20px",
    "padding" : "30px 0px 45px 0px",
    "backgroundColor" : "#ffffff",
    "borderRadius" : "12px", 
    "boxShadow" : "7px 8px #b3cbe1"
  },
  textPosition: 
    {
      "textAlign" : "center", 
    "fontSize" : "20px"
  }
  ,
  inputPosition:{
    "border" : "0.2px solid gray", 
    "backgroundColor" : "1a64a6", 
    "width" : "62.5%", "height" : 
    "28px","borderRadius" : "5px"
  },
  images:{
     float: "left", 
     marginTop: "-19px", 
     width: "182px"
    }
};

export default HalamanLogin;
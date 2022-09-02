import axios from "axios";
import React, {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const HalamanLogin = () => {
  const [values, setValues] = useState({});
  const [cookies, setCookies] = useCookies(["accessToken", "id", "email"]);

  const navigate = useNavigate();

  console.log(cookies.accessToken)
  
  useEffect(() => {
    /**
     * 1. cek apakah akses token ada atau tidak
     * 2. cek apakah akses token decode strukturnya valid apa tidak
     * 3. cek server apakah akses token valid apa tidak
     */
    console.log("Tes cookies",cookies.accessToken)
    if (cookies.accessToken) {
      navigate(`/userDashboard/${cookies.id}`);
    }
    else{
      alert("Login terlebih dahulu")
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
        const { accessToken, id, email } = res.data;
        console.log(accessToken)
      
        setCookies("accessToken", accessToken, { maxAge: 600000 });
        setCookies("email", email, { maxAge: 600000 });
        setCookies("id", id, { maxAge: 600000 });
        console.log("id : ", id)
        console.log("email : ", email)
        console.log("access token : ", accessToken)
        if(res.status===200){
          navigate(`/userDashboard/${id}`);
        }
        
      })
      .catch((err) => alert("login gagal"));
  };


  return (
    <div style={{"border" : "0px solid black", "margin" : "4% 10% 0% 50%","padding" : "40px 0px 90px 0px",
    "backgroundColor" : "#ffffff","borderRadius" : "12px", "boxShadow" : "7px 8px #b3cbe1"} }> 
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
        <div  style={{"textAlign" : "center","margin-left": "50px"}}>
          <button  type="submit" > Login </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default HalamanLogin;

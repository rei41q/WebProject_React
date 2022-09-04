import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const HalamanRegistration = () => {
  const [values, setValues] = useState({});
  const [cookies, setCookies] = useCookies(["fullname", "email", "password"]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:8000/user/registration", values)
      .then((res) => {
       alert("pendaftaraan sukses")
      })
      .catch((err) => alert("pendaftaran gagal"));
  };

  return (
    <>
    <div style={{"border" : "0px solid black", "margin" : "4% 10% 0% 50%","padding" : "30px 0px 45px 0px",
    "backgroundColor" : "#ffffff","borderRadius" : "12px", "boxShadow" : "7px 8px #b3cbe1"} }> 



    <div style={{"textAlign" : "center", "fontSize" : "20px"}}>
       <h1 style={{"color" : "rgb(0, 42, 78)"}}>Sign Up </h1> 
      <form onSubmit={handleSubmit}>
      <label > <span style={{ "margin-left": "5px", "color" : "#00213e"} }> Full Name  </span></label>
      <div >
         
          <input placeholder="Masukan nama lengkap Anda" style={{"border" : "0.2px solid gray", "backgroundColor" : "1a64a6", "width" : "62.5%", "height" : "28px","borderRadius" : "5px"}} name="fullname" onChange={handleChange} 
          
          />
        </div>
        <label >  <span style={{ "color" : "#00213e"} }> Email   </span></label>
        <div >
        
          <input placeholder="Masukan Email Anda" style={{"border" : "0.2px solid gray", "backgroundColor" : "1a64a6", "width" : "62.5%", "height" : "28px","borderRadius" : "5px"}} name="email" onChange={handleChange} 
          
          />
        </div>
        <label>  <span style={{ "margin-left": "1px","color" : "#00213e"}}> Password </span> </label>
        <div>
        
          <input placeholder="Masukan Password Anda" style={{"border" : "0.2px solid gray","backgroundColor" : "1a64a6", "width" : "62.5%", "height" : "28px","borderRadius" : "5px"}}  name="password" id="bodyId" onChange={handleChange} />
        </div>
        <br></br>
        <div  style={{"textAlign" : "center","margin-left": "50px"}}>
          <button  type="submit" > Buat Akun </button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default HalamanRegistration;
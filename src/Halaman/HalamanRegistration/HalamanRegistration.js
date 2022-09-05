import axios from "axios";
import React, { useState } from "react";

import styleButtons from "../StyleButtons/Style.json"

const HalamanRegistration = () => {
  const [values, setValues] = useState({});


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
    <div style={{"border" : " 0px solid rgb(0, 42, 78)", "position": "relative"}}> 

    <div style={styles.borderRegistration}> 

<div style={styles.textPosition}>

   <h1 style={{"color" : "rgb(0, 42, 78)"}}>Sign Up </h1> 

  <form onSubmit={handleSubmit}>
  <label > <span style={{ "margin-left": "5px", "color" : "#00213e"} }> Full Name  </span></label>
  <div >
     
      <input placeholder="Masukan nama lengkap Anda" 
      style={
      styles.inputPosition
      } name="fullname" onChange={handleChange} 

      />
    </div>
    <label >  <span style={{ "color" : "#00213e"} }> Email   </span></label>
    <div >
    
      <input placeholder="Masukan Email Anda" 
      style={
          styles.inputPosition
        } 
        name="email" onChange={handleChange} 

      />
    </div>
    <label>  <span style={{ "margin-left": "1px","color" : "#00213e"}}> Password </span> </label>
    <div>
    
      <input placeholder="Masukan Password Anda" 
      style={
        styles.inputPosition
        }  name="password" id="bodyId" onChange={handleChange} />

    </div>

    <br></br>

    <div style={{"textAlign" : "center","margin-left": "50px"}}>
      <button style={styleButtons.button7}  type="submit" > Buat Akun </button>
    </div>
  </form>
</div>
</div>
    </div>
   
    </>
  );
};

const styles = {
  borderRegistration: {
    "border" : "0px solid rgb(0, 42, 78)", 
     "width" : "40%",
     "height" : "355px",
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

};

export default HalamanRegistration;
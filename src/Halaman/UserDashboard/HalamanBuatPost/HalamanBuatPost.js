import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


import styleButtons from "../../StyleButtons/Style.json"

  const HalamanBuatPost = () => {
    const [values, setValues] = useState({image : "https://salsawisata.b-cdn.net/wp-content/uploads/2021/11/Pantai-Gatra.jpg"});
  const navigate = useNavigate();
  const [cookies] = useCookies(["accessToken"]);

  if(!cookies.accessToken){
    alert("akses ilegal")
    navigate("/")
    return null
  }
  
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {

      
    e.preventDefault();
    axios
      .post("http://localhost:8000/posts", values, {
        
        headers: { Authorization: `Bearer ${cookies.accessToken}` },
      })
      .then((res) =>{ 
        const { accessToken, postId } = res.data;
        console.log("akses token buat post", accessToken, " and ", postId)
        if(res.status===200){
        alert("buat post berhasil")
        navigate(`/userDashboard/${cookies.id}`)
        }
        
    
    })
      .catch((err) => {
        alert("Something went wrong. Please try again later");
        navigate("/createPost")
      });
    
  };


  return (
    <div style={
      {
        "float" : "left", 
        "border" : "2px solid black", 
        "marginTop" : "50px",
        "marginLeft" : "35%",
        "padding" : "10px 10px 10px 10px"
      }}>
      <form onSubmit={handleSubmit} style={{"fontSize" : "30px"}}>
        <div>
          <label>Title : </label>
          <input name="title" onChange={handleChange} />
        </div>
        <div>
          <label>image : </label>
          <input name="image" onChange={handleChange} placeholder="URL validation"  value={values.image} />
        </div>
        <div>
          <label>Body : </label>
          <input name="body" id="bodyId" onChange={handleChange} />
        </div>
      
        <div>
          <button type="submit" style={styleButtons.button7}> Buat Post</button>
        </div>
      </form>
    </div>
  );
  };

  
  export default HalamanBuatPost;

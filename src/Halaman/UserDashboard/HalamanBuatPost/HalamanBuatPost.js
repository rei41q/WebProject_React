import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

  const HalamanBuatPost = () => {
  const [values, setValues] = useState({});
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
        navigate(`/userDashboard/${cookies.id}`)
    
    })
      .catch((err) => {
        alert("something wrong, pelase relogin");
        navigate("/createPost")
      });
    
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title : </label>
          <input name="title" onChange={handleChange} />
        </div>
        <div>
          <label>image : </label>
          <input name="image" onChange={handleChange} />
        </div>
        <div>
          <label>Body : </label>
          <input name="body" id="bodyId" onChange={handleChange} />
        </div>
      
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
  };

  export default HalamanBuatPost;

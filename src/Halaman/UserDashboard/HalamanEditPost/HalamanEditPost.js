import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

  const HalamanEditPost = () => {
  const [values, setValues] = useState({});
  const navigate = useNavigate();
  
  const { postId } = useParams();
  const [cookies] = useCookies(["accessToken","id"]);

  console.log("post id edit ", postId)
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
    console.log(e.preventDefault())
    axios
      .put(`http://localhost:8000/posts/${postId}`, values, {
        headers: { Authorization: `Bearer ${cookies.accessToken}` },
      })
      .then((res) => {
        if(res.status === 200){
            
            alert("update sukses")
             navigate(`/userDashboard/${cookies.id}`)
        }
        }
       
       )
       
      .catch((err) => {
        alert("Something went wrong. Please try again later");
        navigate(`/editPost/${postId}`)
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

  export default HalamanEditPost;

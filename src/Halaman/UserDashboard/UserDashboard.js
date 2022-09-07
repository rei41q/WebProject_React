import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import CardUserDashboard from "./CardUserDashboard";
import { useCookies } from "react-cookie";

import styleButtons from "../StyleButtons/Style.json"

console.log("masuk userdashboar global")

const UserDashboard = () => {

  console.log("masuk userDashboard")

    const [cookies, setCookies] = useCookies(["accessToken", "id","loginStatus"]);

    const logOut = () =>{

      setCookies("accessToken", null, { maxAge: 0 });
      setCookies("id", null, { maxAge: 0 });
      setCookies("loginStatus", null, { maxAge: 0 });
      
      setCookies("image", null, { maxAge: 0 });
      setCookies("title", null, { maxAge: 0 });
      setCookies("body", null, { maxAge: 0 });
      alert("Log out berhasil, diarahkan kembali ke home")
    
      console.log("masuk login dari userdashboard")
      navigate(`/login`);
    
    }
    


    const { id } = useParams();
    
 
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();


  const buatPost = () =>{
    if(cookies.accessToken && cookies.id === id){

      navigate(`/createPost`);
    }
  }

  const fetchPosts = () => {

    console.log("masuk reload fetchposts")

    axios
      .get(`http://localhost:8000/userDashboard?writerId=${id} `,{
        headers: { Authorization: `Bearer ${cookies.accessToken}` },    //MEMAKAI BACKEND API SEBELUMNYA, CHAPTER 7
      })
      .then((res) => {
        
        const listPosts = res.data;
  

        console.log("masuk axios userdashboard")
        //PENGECEKAN JIKA COOKIES DIEDIT

        setPosts(listPosts);
        
      })
      .catch((err) => console.error(err));
  };

  const handleClick = (postId,title,image,body) => {
    setCookies("title", title, { maxAge: 5000000 });
    setCookies("image", image, { maxAge: 5000000 });
    setCookies("body", body, { maxAge: 5000000 });
    navigate(`/editPost/${postId}`);

  };

  const handleHover = () =>{
     this.setState({
        isHovered: !this.state.isHovered
    });

  }

//   const clickExit = () =>{
//     const Cokies2 = new UniversalCookies();
//     Cokies2.set('Id', '0', { path: '/login' });
//     console.log(Cokies2.get('myCat')); // Pacman
//     navigate("/login")
//   }



  // const halamanSebelumnya = (NomorHalaman) => {
  //   NomorHalaman =
  //   axios
  //     .get(`http://localhost:8000/posts?pageNumber=${NomorHalaman-1}`)
  //     .then((res) => {
  //       const listPosts = res.data;
  //       console.log(listPosts);
  //       setPosts(listPosts);
  //     })
  //     .catch((err) => console.error(err));
  // }

  useEffect(() => {
        /**
         * 1. cek apakah akses token ada atau tidak
         * 2. cek apakah akses token decode strukturnya valid apa tidak
         * 3. cek server apakah akses token valid apa tidak
         */

        if (!cookies.accessToken) {
          console.log("userdashboard kembali ke login")
          navigate("/login");
        }
        else{
            if(cookies.accessToken && cookies.id === id && cookies.loginStatus){
              console.log("masuk fetch userdashboard")
            fetchPosts();
            }
            else{
              console.log("userdashboard kembali ke login else 2")
              navigate("/login")
            }
        } 
  }, []);

  return (
    <>
    <div>  
      <button onClick={buatPost} style={styleButtons.button7}> Buat Post </button>
      
      <div style={{"float": "right"}}> <button onClick={logOut}style={styleButtons.button7} > Log Out</button>  </div>
    </div>
    
    
  
      <div style={styles.wrapper}>
        {posts.map((post) => (
          <CardUserDashboard
            key={post.id}
            title={post.title}
            body={post.body}
            image={post.image}
            onClick={() => handleClick(post.id, post.title,post.image, post.body) } onMouseEnter={() => handleHover()}
          />
        ))}
      </div>
    </>
    
  );
};

const styles = {
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "35px 35px 35px 35px",
    margin: "10px 0px 0px 0px",
  }
};

export default UserDashboard;
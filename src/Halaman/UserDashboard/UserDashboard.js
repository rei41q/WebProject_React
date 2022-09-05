import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import CardUserDashboard from "./CardUserDashboard";
import { useCookies } from "react-cookie";


import styleButtons from "../StyleButtons/Style.json"

const UserDashboard = () => {
  
    const [cookies, setCookies] = useCookies(["accessToken", "id"]);
    const { id } = useParams();
    console.log("writer id", id)
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  JSON.parse(localStorage.getItem('user-info')) 
  const buatPost = () =>{
    navigate(`/createPost`);
   
  }
  const logOut = () =>{
    setCookies("accessToken", null, { maxAge: 0 });
    setCookies("id", null, { maxAge: 0 });
    alert("Log out berhasil, diarahkan kembali ke home")
    navigate(`/`);
  }
  const fetchPosts = () => {

    axios
      .get(`http://localhost:8000/userDashboard?writerId=${id} `,{
        headers: { Authorization: `Bearer ${cookies.accessToken}` },    //MEMAKAI BACKEND API SEBELUMNYA, CHAPTER 7
      })
      .then((res) => {
        const { accessToken } = res.data;
        const listPosts = res.data;
        console.log(listPosts);


        console.log("acces token id backend: ",accessToken)
        console.log(": ",cookies.accessToken)
        console.log(": ",cookies.id)
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
        console.log("Tes cookies",cookies.id, id)
        if (!cookies.accessToken) {
          navigate("/login");
        }
        else{
            if(cookies.accessToken && cookies.id === id){
            fetchPosts();
            }
            else{
              alert("Akses ilegal")
              navigate("/")
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
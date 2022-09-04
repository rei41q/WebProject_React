import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import CardUserDashboard from "./CardUserDashboard";
import { useCookies } from "react-cookie";


 

const UserDashboard = () => {
    const [cookies] = useCookies(["accessToken"]);
    const { id } = useParams();
    console.log("writer id", id)
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  JSON.parse(localStorage.getItem('user-info')) 
  const logOut = () =>{
    navigate(`/createPost`);
   
  }
  const fetchPosts = () => {

    axios
      .get(`http://localhost:8000/posts?writerId=${id}`,) //MEMAKAI BACKEND API SEBELUMNYA, CHAPTER 7
      .then((res) => {
       
        const listPosts = res.data;
        console.log(listPosts);
        setPosts(listPosts);
      })
      .catch((err) => console.error(err));
  };

  const handleClick = (postId) => {
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
    <button onClick={logOut}> Buat Post </button>
      <div style={styles.wrapper}>
        {posts.map((post) => (
          <CardUserDashboard
            key={post.id}
            title={post.title}
            body={post.body}
            image={post.image}
            onClick={() => handleClick(post.id) } onMouseEnter={() => handleHover()}
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
  },
  button_7: {
    backgroundColor: "#1a64a6",
    border: "1px solid transparent",
    borderRadius: "3px",
    boxShadow: "rgba(255, 255, 255, .4) 0 1px 0 0 inset",
    boxSizing: "border-box",
    color: "#fff",
    cursor: "pointer",
    display: "inline-block",
    fontFamily:
      '-apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif',
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "1.15385",
    margin: "0",
    outline: "none",
    padding: "8px .8em",
    position: "relative",
    textAlign: "center",
    textDecoration: "none",
    userSelect: "none",
    WebkitUserSelect: "none",
    touchAction: "manipulation",
    verticalAlign: "baseline",
    whiteSpace: "nowrap",

  },
};

export default UserDashboard;
import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import CardSemuaPost from "./CardSemuaPost";

let NomorHalaman = 1;
let simpanNomorHalaman = 1

const SemuaPost = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchPosts = () => {

    NomorHalaman = 1
    simpanNomorHalaman = 1

    axios
      .get(`http://localhost:8000/posts?pageNumber=${1}`) //MEMAKAI BACKEND API SEBELUMNYA, CHAPTER 7
      .then((res) => {
        const listPosts = res.data;
        console.log(listPosts);
        setPosts(listPosts);

      })
      .catch((err) => console.error(err));
  };

  const handleClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  const handleHover = () =>{
     this.setState({
        isHovered: !this.state.isHovered
    });

  }
  const halamanBerikut = () => {
    try {
     
      NomorHalaman = simpanNomorHalaman + 1;
      axios
        .get(`http://localhost:8000/posts?pageNumber=${NomorHalaman}`)
        .then((res) => {
          const listPosts = res.data;
          setPosts(listPosts);
          simpanNomorHalaman = NomorHalaman
       
        });
    
    } catch (error) {
      console.error(error);
    
    }      
    console.log("nomor halaman :", NomorHalaman);
  };

  const halamanSebelumnya = () => {
    if (simpanNomorHalaman > 1) {
      simpanNomorHalaman = simpanNomorHalaman - 1;
      console.log("Nomor halaman", simpanNomorHalaman);
      axios
        .get(`http://localhost:8000/posts?pageNumber=${simpanNomorHalaman}`)
        .then((res) => {
          const listPosts = res.data;
          console.log(listPosts);
          setPosts(listPosts);
        
        })
        .catch((err) => console.error(err));
    }
  };
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
    fetchPosts();
  }, []);

  return (
    <>      <div style={{ float: "left" , }}>

      <button  style={styles.button_7} onClick={() => halamanSebelumnya()}>
        
        Halaman Sebelumnya
      </button>
    
      </div>



      <div style={{ float: "right", }}>
      <button style={styles.button_7} onClick={() => halamanBerikut()}>
 
        Halaman Berikutnya
</button>
      </div>
      <div style={styles.wrapper}>
        {posts.map((post) => (
          <CardSemuaPost
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

export default SemuaPost;

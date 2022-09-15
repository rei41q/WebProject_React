  import axios from "axios";
  import React, { useEffect, useState } from "react";

  import { useNavigate } from "react-router-dom";
  import CardSemuaPost from "./CardSemuaPost";

  import styles from "../../StyleButtons/Style.json"

  let NomorHalaman = 1;
  let simpanNomorHalaman = 1

    const SemuaPost = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const fetchPosts = () => {

      NomorHalaman = 1
      simpanNomorHalaman = 1

      axios
        .get(`https://backendgreiq2.herokuapp.com/posts?pageNumber=${1}`) //MEMAKAI BACKEND API SEBELUMNYA, CHAPTER 7
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

        <button  style={styles.button7} onClick={() => halamanSebelumnya()}>
          
          Halaman Sebelumnya
        </button>
      
        </div>



        <div style={{ float: "right", }}>
        <button style={styles.button7} onClick={() => halamanBerikut()}>
  
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




  export default SemuaPost;

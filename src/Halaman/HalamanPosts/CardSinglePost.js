import React from "react";

import styles from './style.json';

const CardSinglePost = (props) => {
  const { title, body, image, userId, onClick } = props;
  return (
    <div style={styles.card} onClick={onClick}   >
      <div style={styles.title}>{title}</div>
      <div>{body}</div>
      <div > 
        <br></br>
      <img style={{"width" : "100%" , "height" : "100%"}} 
      src={image}
      alt="new"
      />
      </div>
      <div style={{"textAlign" : "center"}}> Writer ID : {userId}</div>
    
    </div>
  );
};

// const styles = {
//   card: {
//     border: "0px solid black",
//     width: "20%",
//     margin: "10px",
//     borderRadius: "10px",
//     padding: "10px",
//     boxShadow: "5px 5px #b3cbe1",
//     cursor: "pointer",
//     backgroundColor : "white"
//   },
//   title: {
//     fontWeight: "bold",
//     marginBottom: "10px",
//     textTransform: "capitalize",
//   },
// };
export default CardSinglePost;

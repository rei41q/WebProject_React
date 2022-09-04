import React from "react";

import { motion } from "framer-motion";

const CardUserDashboard = (props) => {
  const { title, body, image, onClick } = props;
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div style={styles.card} onClick={onClick}>
        <div style={styles.title}>{title}</div>

        <div>
          <img
            style={{ width: "100%", height: "100%" }}
            src={image}
            alt="new"
          />
        </div>
        <div>{body}</div>
      </div>
    </motion.div>
  );
};

const styles = {
  card: {
    border: "0px solid black",
    width: "150px",
    margin: "10px",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "5px 3px #b3cbe1",
    cursor: "pointer",
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "10px",
    textTransform: "capitalize",
  },
};
export default CardUserDashboard;
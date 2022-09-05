import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

import logo from "./logo.svg";


import { useCookies } from "react-cookie";

const HalamanNavigation = () => {

  const [cookies, setCookies] = useCookies(["accessToken"]);

    console.log("cookies login", cookies.accessToken)

    return (
      //STYLE BELUM REFACTOR
      <div>
        <div style={styles.atributStye}>
          <img
            src={logo}
            alt="nice"
            width={182}
            height={64}
            style={styles.images}
          />

          <Link to="/" style={styles.navigation}>
            Home
          </Link>

          <Link to="/registration" style={styles.navigation}>
            Registration
          </Link>
          
          
          <Link to="/login" style={styles.navigation}>{
          (cookies.accessToken) ?
            <div style={{"textAlign" : "right","marginTop" : "-26.2px","marginBottom" : "-26.5px"}}> User Dashboard</div>
            : <div style={{"textAlign" : "right","marginTop" : "-26.2px","marginBottom" : "-26.5px"}}> Login </div>
          }
          </Link>

        </div>

        <div style={styles.outlet}>
          <Outlet />
        </div>
      </div>
    );
  
}
const styles = {
  atributStye: {
    float: "center",
    display: "block",
    textAlign: "left",
    padding: "35px 35px 35px 35px",
    margin: "0px 0px 0px 0px",
    fontSize: "20px",
    border: "0px solid black",
    backgroundColor: "#002a4e",
    borderRadius: "0px",
  },
  navigation: {
    textDecoration: "none",
    color: "white",
    marginRight: "15.5px",
  },
  outlet: {
    border: "0px solid black",
    margin: "20px 20px 20px 20px",
    backgroundColor: "#e6eef5",
    minHeight: "500px",
    padding: "10px 10px 10px 10px",
    borderRadius: "2px",
  },
  images:{
     float: "left", 
     marginTop: "-19px", 
     width: "182px"
    }
};
export default HalamanNavigation;

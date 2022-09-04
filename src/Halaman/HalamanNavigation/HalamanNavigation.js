import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

import logo from './logo.svg';

class HalamanNavigation extends Component {
  render() {

    
    return ( //STYLE BELUM REFACTOR
      <div>
        <div style={style.AtributStye}> 

        <img src={logo} alt="nice" width={182} height={64} style={{"float" : "left","marginTop" : "-19px", "width" : "182px", }}/>

               <Link  to="/" style={{"textDecoration":"none", "color": "white", "marginRight" : "15.5px"}} >
              
                Home</Link>
         
               <Link to="/registration"  style={{"textDecoration":"none", "color": "white", "marginRight" : "15.5px"}} >
                
                Registration</Link>

               <Link to="/login"  style={{"textDecoration":"none", "color": "white", "marginRight" : "15.5px"}} >
                
                User Dashboard</Link>

        </div>
        
      
        <div style={{"border" : "0px solid black","margin": "20px 20px 20px 20px", "backgroundColor": "#e6eef5", "minHeight": "500px","padding": "10px 10px 10px 10px" , "borderRadius" : "2px"}}>
          
          <Outlet />
        
        </div>
        
      </div>
    );
  }
}
const style = {
  AtributStye: {
    float: "center",
    display: "block",
    textAlign: "left",
    padding: "35px 35px 35px 35px",
    margin: "0px 0px 0px 0px",
    fontSize: "20px",
    border:"0px solid black",
    backgroundColor: "#002a4e",
    borderRadius: "0px",
  },
};
export default HalamanNavigation;

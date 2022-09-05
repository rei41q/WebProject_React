import React from "react";
import HalamanNavigation from "./Halaman/HalamanNavigation/HalamanNavigation";

import { Route, Routes } from "react-router-dom";
import SemuaPost from "./Halaman/HalamanPosts/SemuaPost/SemuaPost";

import HalamanLogin from "./Halaman/HalamanLogin/HalamanLogin";
import HalamanRegistration from "./Halaman/HalamanRegistration/HalamanRegistration";
import SingleBlogPost from "./Halaman/HalamanPosts/DetailPost/SinglePost";
import UserDashboard from "./Halaman/UserDashboard/UserDashboard";
import HalamanBuatPost from "./Halaman/UserDashboard/HalamanBuatPost/HalamanBuatPost";
import HalamanEditPost from "./Halaman/UserDashboard/HalamanEditPost/HalamanEditPost";

// import Identity from "./Components/Identity";
// import SemuaPost from "./Halaman/HalamanPosts/SemuaPost";


class MainApp extends React.Component{
  render(){

    return(
      <>
      <div style={{"backgroundColor" : "white"}}>
      <Routes>
        <Route path="/" element={<HalamanNavigation />}>
          <Route
            path="/"
            element={ <SemuaPost/>}         
          />
          <Route
            path="/login"
            element={
              <HalamanLogin/>
            }
          />
          <Route
            path="/registration"
            element={
              <HalamanRegistration/>
            }
          />
          <Route
            path="/blogs"
            element={
              <SemuaPost/>
            }
          />



          <Route path="/blogs/:postId" element = {<SingleBlogPost/>} 

        
          />

          <Route path="/userDashboard/:id" element = {<UserDashboard/>}
          />

          <Route path="/editPost/:postId" element = {<HalamanEditPost/>}
          />

            
          <Route
            path="/createPost"
            element={
              <HalamanBuatPost/>
            }
          />

          
        </Route>
      </Routes>
      </div>
    </>
    )

  }

}
export default MainApp;
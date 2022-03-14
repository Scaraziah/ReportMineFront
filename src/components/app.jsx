import React, { useEffect, useState } from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
// import LogIn from './login/logIn'
// import SignUp from './signup/signUp';
// import jwt_decode from "jwt-decode";
// import Profile from './profile/profile';
// import EditProfile from './profile/editProfile';
// import NavBar from './navbar/navBar';
// import NewProfile from './profile/newProfile';
// import AddPost from './userposting/addPosting';
// import AllPostings from './userposting/allPostings';
// import EditPost from './userposting/editPost';
// import PhotoGallery from './potogallery/photoGallery';

import Bitlocker from './bitlocker/bitlocker'

function App() {
    // const [user, setUser] = useState()
    //     const jwt = localStorage.getItem('token');
    //         useEffect(() => {
    //             try{

    //                 const user = jwt_decode(jwt);
    //                 setUser(user)
    //                 console.log(user.name)
    //             }catch{
    //         }
    //     },[jwt])

  return (
    <div>
      <Route path= "/" element = { <Bitlocker/>} />      
    </div>
  );
}

export default App;

import React from "react";
// import { Component } from "react";
import  ReactDOM  from "react-dom";
import img1 from './images/logo.png';
import './home.css';
class Home extends React.Component{
    render(){
        return(
            <div>
                <h1 style={{backgroundColor:'grey',color:'white',display:"flex"}}>Shop with us</h1>
                <img src={img1} alt='logo' width='500' height='500' style={{marginLeft:'400px'}} ></img>
            </div>
            
            
        );
    }
}
// 
export default Home;
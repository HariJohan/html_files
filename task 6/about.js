import React from "react";
// import { Component } from "react";
import  ReactDOM  from "react-dom";
import img1 from './images/logo.png';
import './home.css';
class Phone extends React.Component{
    render(){
        return(
            <div>
                <h1 style={{backgroundColor:'black',color:'white',textAlign:'center'}}>ABOUT</h1>
                <p style={{color:'white',textAlign:'center'}}>Shop with us. is an American multinational e-commerce company based in San Jose, California, that facilitates consumer-to-consumer and business-to-consumer sales through its website. eBay was founded by Pierre Omidyar in 1995 and became a notable success story of the dot-com bubble</p>
                {/* <img src={img1} alt='logo' width='500' height='500' style={{marginLeft:'400px'}} ></img> */}
            </div>
            
            
        );
    }
}
// ReactDOM.render(<Inline2/>,document.getElementById("root"));
export default Phone;

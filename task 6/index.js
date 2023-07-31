import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, Switch } from 'react-router-dom';
import Home from './home';
import Phone from './about';
// import Join from './joinus';

const routing = (
    <Router>
        <div>
            <h1>Hello</h1>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/A.
                0.
                bout" element={<Phone/>} />
                {/* <Route path="/joinus" element={<Join/>} /> */}
            </Routes>
        </div>
    </Router>
)

ReactDOM.render(routing,document.getElementById('root'));




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import React from "react";



// import React from "react";
// import ReactDOM  from 'react-dom';
//  import Task5 from "./Task5";



//  ReactDOM.render(<Reactstyle/>,document.getElementById("root"));

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// ReactDOM.render(<App fruit='Apple'/>,
// document.getElementById("root"));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// ReactDOM.render(<App fruit='Apple'/>,
// document.getElementById("root"));

// import { BrowserRouter as Router,Route,Link,NavLink,Switch } from "react-router-dom";
// import Home from './home';
// import About from './about';
// import Join from './joinus';

// const routing=(<router>
//   <div>
//     <h1>Hello</h1>
//     <routes>
//       <Route path="/"component={Home}/>
//       <Route path="/a"component={About}/>
//       <Route path='/j'component={join}/>
//     </routes>
//   </div>
// </router>
// )
// ReactDOM.render(routing,document.getElementById('root'));


//DID MOUNT
// import React,{Component}from"react";
// import ReactDOM from "react-dom";
// class Header extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={I:"State"};
//   }
//   componentDidMount()
//   {
//     setTimeout(()=>{
//       this.setState({I:"DidMount"})
//     },7000)
//   }
//   render(){
//     return(
//       <h1>{this.state.I}</h1>
//     );
//   }
// }
// ReactDOM.render(<Header/>,document.getElementById('root'));


// getDerivedStateFromProps
// import React from "react";
// import ReactDOM from "react-dom";
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { favoritecolor: "red" };
//   }
//   static getDerivedStateFromProps(props, state) {
//     return { favoritecolor: props.favcol };
//   }
//   changeColor = () => {
//     this.setState({ favoritecolor: "blue" });
//   };
//   render() {
//     return (
//       <div>
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         <button type="type" onColor={this.changeColor}>
//           Change Color
//         </button>
//       </div>
//     );
//   }
// }

//should

// import React from "react";
// import ReactDOM from "react-dom";
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { favoritecolor: "red" };
//   }
//   shouldComponentUpdate(){
//     return false;
//   }
//   // static getDerivedStateFromProps(props, state) {
//   //   return { favoritecolor: props.favcol };
//   // }
//   changeColor = () => {
//     this.setState({ favoritecolor: "blue" });
//   };
//   render() {
//     return (
//       <div>
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         <button type="type" onColor={this.changeColor}>
//           Change Color
//         </button>
//       </div>
//     );
//   }
// }


//task 3


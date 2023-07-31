import React from "react";
import img1 from './images/car 1.jpg';
import img2 from './images/car 2.jpg';
import img3 from './images/car  3.jpg';
import img4 from './images/s1.jpg';

// import ReactDOM from 'react-dom';
import './car.css';
class task4 extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <img className="img" src={img1}/>
                    <img className="img1" src={img2}/>
                    <div>
                    
                    <video autoPlay muted loop className="vid" width={850} controls>
                        <source src='./videos/LEO.mp4' type='video/mp4'/>
                    </video>

                    </div>
                    <img className="img2" src={img3}/>
                    <img className="img3" src={img4}/>
                </div>
            </div>
        );
    }
}

export default task4;
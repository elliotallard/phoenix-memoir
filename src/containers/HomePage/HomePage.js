import React from "react";
import { Link } from "react-router-dom";
import Cactus from "../../assets/cactus.png";
// import YouTube from "react-youtube";
import "./HomePage.css";
import Carousel from 'react-bootstrap/Carousel';
import ImageCarousel from './Carousel/Carousel.js';
import appRoutes from "../../shared/appRoutes";
// import "./flickity.js"
// import "./flickity.css"

const homePage = () => {
  

  return (
    <div className="Home">
      <div className="Banner">
        <div className="row">
          <img src={Cactus} alt="Cactus" /> 
          <div><h1>PHOENIX</h1></div>
          <img src={Cactus} alt="Cactus" /> 
        </div>
        
        <h3> ~ a thank you ~ </h3>
      </div> 
      <br />


      <div className="scrollBox">
        
        <ImageCarousel />
      </div>

      



      <div className="container">
        <div className="row">
          <div className="DownButton">
            <Link
                    key='about'
                    to="/about"
                  > 
               
               <p> About <br/>▼ </p>
            </Link>
          </div>
        </div>
      

       

        
      </div>
    </div>
  );
};

export default homePage;

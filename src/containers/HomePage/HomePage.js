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

      <div className="DownButton">
        <Link
                key='about'
                to="/about"
              > 
           <p> ▼ </p>
        </Link>
      </div>
      

        <p className="IntroText">
        <b>October 30th, 2019 - </b>
        <br/>
        A nostalgia box, to remember the <i>hottest</i> summer. 
        <br/><br/>
        Miss, love, and thank you all - 
        <br/>
          
          M., S., J., M., C., H., J., A., T., K., J., D., C., G.,
          R., J., P., T., R., T., O., D., D., J., E., D., A., A., R.,
          J., & P.
          
          ❤️ 
        </p>

        
      </div>
    </div>
  );
};

export default homePage;

import React from "react";
import { Link } from 'react-router-dom';
import Cactus from "../../assets/cactus.png";

import "./About.css";
// import Carousel from 'react-bootstrap/Carousel';
// import ImageCarousel from './Carousel/Carousel.js';
import appRoutes from "../../shared/appRoutes";



const aboutPage = () => {

	return (
      <div className="container">
        <div className="row">
          <div className="col-12">

            <br /><br />

      		  <p className="IntroText">
              <b>October 30th, 2019 - </b>
              <br/>
              A nostalgia box, to remember the <i>hottest</i> summer. 
              <br/><br/>
              Miss, love you all - 
              <br/>
                
                M., S., J., M., C., H., J., A., T., K., J., D., C., G.,
                R., J., P., T., R., T., O., D., D., J., E., D., A., A., R.,
                J., & P.
                
                ❤️ 
            </p>

          </div>
        </div>
      </div>
       );
}

export default aboutPage;
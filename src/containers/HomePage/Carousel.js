import React, { Component, useState } from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

// image imports
import Cactus from "../../assets/cactus.png";
import GC1 from "../../assets/gcourse1.png"
import GC2 from "../../assets/gcourse2.png"
import GC3 from "../../assets/gcourse3.png"
import GC4 from "../../assets/gcourse4.png"
import GC5 from "../../assets/gcourse5.png"
import "./Carousel.css";
// import appRoutes from "../../shared/appRoutes";





const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        {/* <Route exact path={appRoutes.seventh}> */}
          <img
            className="d-block w-10"
            src={GC1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>The Pool</h3>
          </Carousel.Caption>
        {/* </Route> */}

      </Carousel.Item>


      <Carousel.Item>
        {/* <Route exact path={appRoutes.seventh}> */}
          <img
            className="d-block w-10"
            src={GC2}
            alt="The Lib"
          />
          <Carousel.Caption>
            <h3>The Tempe Town Library</h3>
          </Carousel.Caption>
        {/* </Route> */}

      </Carousel.Item>


      <Carousel.Item>
        {/* <Route exact path={appRoutes.seventh}> */}
          <img
            className="d-block w-10"
            src={GC3}
            alt="The Canal"
          />
          <Carousel.Caption>
            <h3>The Canal Behind My Apt</h3>
          </Carousel.Caption>
        {/* </Route> */}

      </Carousel.Item>



      <Carousel.Item>
        {/* <Route exact path={appRoutes.seventh}> */}
          <img
            className="d-block w-10"
            src={GC4}
            alt="The Patio"
          />
          <Carousel.Caption>
            <h3>My Patio</h3>
          </Carousel.Caption>
        {/* </Route> */}

      </Carousel.Item>



      <Carousel.Item>
        {/* <Route exact path={appRoutes.seventh}> */}
          <img
            className="d-block w-10"
            src={GC5}
            alt="seventh"
          />
          <Carousel.Caption>
            <h3>N Seventh St</h3>
          </Carousel.Caption>
        {/* </Route> */}

      </Carousel.Item>
    </Carousel>
  );
}





export default ControlledCarousel
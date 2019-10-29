import React from 'react';
import { withRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import appRoutes from "../../../shared/appRoutes";

// import GC1 from "../../assets/gcourse1.png"
// import GC2 from "../../assets/gcourse2.png"
// import GC3 from "../../assets/gcourse3.png"
// import GC4 from "../../assets/gcourse4.png"
// import GC5 from "../../assets/gcourse5.png"

// import appRoutes from "../../shared/appRoutes";

// let courses = [{GC1}, {GC2}, {GC3}, {GC4}, {GC5}];



const item = (props) => {
  return (
    <Carousel.Item>
         <Link
                key={props.id}
                to={`${appRoutes.page}/{props.id}`}
              > 
          <img
            className="d-block w-10"
            src= {props.img}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{props.name}</h3>
          </Carousel.Caption>
        </Link> 

    </Carousel.Item>
    )


}


export default item;
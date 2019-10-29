import React, { Component, useState } from "react";
import { withRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import appRoutes from "../../shared/appRoutes";
import Item from './CarouselItem/CarouselItem.js';
import PlaceList from '../PlacePage/placesList.js';


// image imports
import Cactus from "../../assets/cactus.png";
import GC1 from "../../assets/gcourse1.png"
import GC2 from "../../assets/gcourse2.png"
import GC3 from "../../assets/gcourse3.png"
import GC4 from "../../assets/gcourse4.png"
import GC5 from "../../assets/gcourse5.png"
import "./Carousel.css";
// import appRoutes from "../../shared/appRoutes";


let courses = [{GC1}, {GC2}, {GC3}, {GC4}, {GC5}];





// class ControlCarousel extends Component {
  
//   state = {
//     places: PlaceList
//   };

//   render() {

//     // const [index, setIndex] = useState(0);
//     // const [direction, setDirection] = useState(null);

//     // const handleSelect = (selectedIndex, e) => {
//     //   setIndex(selectedIndex);
//     //   setDirection(e.direction);
//     // };

//     return (
//       <Item id={this.state.places[0].id} name={this.state.places[0].name} img={GC1}/>
//     );
//   }
// }


const ControlledCarousel = () => {

  const places = useState(PlaceList);
  console.log(places);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Item id={PlaceList[0].id} name={PlaceList[0].name} img={GC1} />
      <Item id={places[0].id} name={places[0].name} img={GC1} />
    </Carousel>
    )
;
}





export default ControlledCarousel
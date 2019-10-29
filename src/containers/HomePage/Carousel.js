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


let CourseList = [{GC1}, {GC2}, {GC3}, {GC4}, {GC5}];





{/* class ControlledCarousel extends Component {
  
  state = {
    places: PlaceList,
    index: 0,
    direction: null,
  };

  setIndex = (selectedIndex) => {
    this.setState({
      index: selectedIndex,
    })
  };

  setDirection = (eDirection) => {
    this.setState({
      direction: eDirection,
    })
  };
 
  handleSelect = (selectedIndex, eDirection, e) => {
    this.setState({
      index: selectedIndex,
      direction: eDirection,
    })
  };


  render() {

    // const [index, setIndex] = useState(0);
    // const [direction, setDirection] = useState(null);

    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    //   setDirection(e.direction);
    // };

    return (
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect(this.state.index), this.state.direction}>
        <Item id={this.state.places[0].id} name={this.state.places[0].name} img={GC1}/>
      </Carousel>
    );
  }
} */}


const ControlledCarousel = (places, courses) => {

  const [Places, setPlaces] = useState(places);
  // console.log (cours);

  const[Courses, setCourses] = useState(courses)

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      {/*<Carousel.Item>
         <Route exact path={appRoutes.seventh}> 
          <img
            className="d-block w-10"
            src={GC4}
            alt="The Patio"
          />
          <Carousel.Caption>
            <h3>My Patio</h3>
          </Carousel.Caption>
        {/* </Route> 

      </Carousel.Item>*/}
      <Item id={PlaceList[0].id} name={PlaceList[0].name} img="../../assets/gcourse1.png" />
      <Item id={PlaceList[0].id} name={PlaceList[0].name} img={CourseList[1]} />
    </Carousel>
    )
;
}


ControlledCarousel.defaultProps = {
  places: PlaceList,
  courses: CourseList,
}





export default ControlledCarousel;
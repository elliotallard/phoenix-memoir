import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Carousel.css";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";


//STYLE IMPORTS
import "./Carousel.css";


//IMAGE IMPORTS
import GC1 from "../../assets/gcourse1.png";
import GC2 from "../../assets/gcourse2.png";
import GC3 from "../../assets/gcourse3.png";
import GC4 from "../../assets/gcourse4.png";
import GC5 from "../../assets/gcourse5.png";
import PlaceList from "../PlacePage/placeList.js"




const items = PlaceList;

const courses = [GC1, GC2, GC3, GC4, GC5]

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
        	<Link
                key={item.id}
                to={item.id}
              > 
	          <img src={courses[0]} alt='image of non-descript golf course' />
	          <CarouselCaption className="text" captionHeader={item.name}
	          />
	        </Link>
        </CarouselItem>
      );
    });

    return (
      <div className="container">
        
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          		{slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}

export default Slider;



// GRACIOUSLY ADAPTED FROM *BLESS BLESS BLESS* = 
// https://stackoverflow.com/questions/54574293/img-not-displaying-in-reactstrap-carousel
// I love you stack overflow user: shan
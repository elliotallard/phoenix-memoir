import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Carousel.css";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";


//STYLE IMPORTS
import "./Carousel.css";


//IMAGE IMPORTS
import PlaceList from "../../PlacePage/placeList.js"




const items = PlaceList;




class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  };

  onExiting() {
    this.animating = false;
  };

  onExited() {
    this.animating = false;
  };

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };



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
                to={`/places/${item.id}`}
              > 
	          <img src={item.course} alt='image of non-descript golf course' />
	          <CarouselCaption className="text" captionHeader={item.name} />
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
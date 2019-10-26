import React from "react";
import Cactus from "../../assets/cactus.png";
// import YouTube from "react-youtube";
import "./HomePage.css";
import Carousel from 'react-bootstrap/Carousel'
import ImageCarousel from './Carousel.js'
// import "./flickity.js"
// import "./flickity.css"

const homePage = () => {
  {/*
  const _onReady = event => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  */}

  return (
    <div className="Home">
      <div className="Banner">
        <div className="row">
          <img src={Cactus} alt="Cactus" /> 
          <div class="BannerText"><h1>PHOENIX</h1></div>
          <img src={Cactus} alt="Cactus" /> 
        </div>
        
        <h3> ~ a thank you ~ </h3>
      </div> 
      <br />


      <div className="scrollBox">
        <ImageCarousel />
      </div>

      <div className="container">
        <h3>
          Star Wars is an American epic space-opera media franchise created by
          George Lucas.
        </h3>

        <p className="IntroText">
          The franchise began with the eponymous 1977 film and quickly became a
          worldwide pop-culture phenomenon. The original film, later subtitled
          Episode IV – A New Hope, was followed by the sequels Episode V – The
          Empire Strikes Back (1980) and Episode VI – Return of the Jedi (1983),
          forming what is collectively referred to as the original trilogy. A
          prequel trilogy was later released, consisting of Episode I – The
          Phantom Menace (1999), Episode II – Attack of the Clones (2002) and
          Episode III – Revenge of the Sith (2005). Years later, a sequel
          trilogy began with Episode VII – The Force Awakens (2015), continued
          with Episode VIII – The Last Jedi (2017), and will conclude with
          Episode IX – The Rise of Skywalker (2019). The first eight films were
          nominated for Academy Awards (with wins going to the first two
          released) and were commercially successful. Together with the
          theatrical anthology films Rogue One (2016) and Solo: A Star Wars
          Story (2018), the combined box office revenue of the films equates to
          over US$9 billion, and is currently the second-highest-grossing film
          franchise.
        </p>

        <p className="IntroText">
          The film series was expanded into other media, including television
          series, video games, novels, comic books, theme park attractions and
          themed areas, resulting in an
        </p>

        {/*
        <div className="VideoPlayer">
          <YouTube
            videoId="iXDnFYu91vY"
            opts={{
              playerVars: {
                autoplay: 0
              }
            }}
            onReady={_onReady}
          />
        </div>
        */}
      </div>
    </div>
  );
};

export default homePage;

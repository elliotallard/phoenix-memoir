import React from "react";
import { useParams } from "react-router";
import { withRouter } from "react-router";
// import { useParams } from "react-router-dom";
import placeList from "./placeList.js";
import "./PlacePage.css";

import Cactus from "../../assets/cactus.png";

const PlacePage = () => {
  
  const url = window.location.href;

  //gets last part of url, or the id
  const id = url.substr(url.lastIndexOf('/') + 1)

  const place = placeList.filter(place => place.id === id)[0];

  const { name, photos, keyline } = place;

  return (
    <div className="container">
      <br />
      <div className="NameBanner">
        <div className="row">
          <img src={Cactus} alt="Cactus" /> 
          <div><h1>{name}</h1></div>
          <img src={Cactus} alt="Cactus" /> 
      </div>
      </div>
      <div className="row">
        <div className="gallery col-lg-12 col-md-12 col-sm-12">
          <img  src={photos[0]} alt={name} />
          <img  src={photos[1]} alt={name} />
          <img  src={photos[2]} alt={name} />
        </div>
      </div>
      <div className="row">
        <div className="description col-lg-8 col-md-6 col-sm-12">
          <p className="KeylineContainer">{keyline}</p>
          <br />
          <br />

          
        </div>
      </div>
    </div>
  );


};





export default PlacePage;
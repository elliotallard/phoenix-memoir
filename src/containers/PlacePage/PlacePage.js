import { React } from "react";
import { useParams } from "react-router";
import placeList from "./placesList.js";
import "./PlacePage.css";

const PlacePage = () => {
  const { id } = useParams();
  const place = placeList.filter(place => place.id === id)[0];
  const { name, photos, keyline } = place;

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img style={{ width: "100%" }} src={photos[0]} alt={name} />
          <img style={{ width: "100%" }} src={photos[1]} alt={name} />
          <img style={{ width: "100%" }} src={photos[2]} alt={name} />
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12">
          <h1 className="CharacterName">{name}</h1>
          <p className="KeylineContainer">{keyline}</p>
          <br />
          <br />

          
        </div>
      </div>
    </div>
  );
};

export default PlacePage;
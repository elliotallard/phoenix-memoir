import React from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import Cactus from "../../assets/cactus.png";
import Sun from "../../assets/sun.png"
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <NavLink className="row" id="HomeButton" to={appRoutes.home}>
              <img src={Cactus} alt="cactus" />
              <p>HOME</p>
              <img src={Cactus} alt="cactus" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
            <ul className="navbar-nav ml-auto">
              <li className="nav-item sun">
                <img src={Sun} alt="sun" />
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                By: Elliot Allard
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

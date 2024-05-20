import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import imagen from "../assets/logo2.jpg";
import { Link } from "react-router-dom";
// import Sucursales from "../Sucursales/Sucursales";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-ul">
        <div className="nav-logo">
          <li className="nav-li">
            <Link to={`/`}>
              <img src={imagen} alt="" />{" "}
            </Link>
          </li>
        </div>

        <div className="nav-filtro">
          <li className="nav-filtro-li">
            <Link to="categoria/Fit" className="nav-filtro-a">
              Helado Fit
            </Link>
            <Link to="categoria/Postre" className="nav-filtro-a">
              Postre
            </Link>
          </li>
        </div>

        <div className="nav-links">
          <li className="nav-li">
            <Link to="/Sucursales" className="nav-a">Sucursales</Link>
          </li>
          <CartWidget />
        </div>
      </ul>
    </nav>
  );
};
export default NavBar;

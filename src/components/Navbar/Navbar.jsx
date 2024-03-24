import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import imagen from '../assets/logo2.jpg'


const NavBar = () => {
    return(
        <nav className="navbar">
            <ul className="nav-ul">
                <div className="nav-logo">
                <li className="nav-li"><a className="" href="#"><img src={imagen} alt=""  /></a></li>
                </div>
                <div className="nav-links">
                <li className="nav-li"><a className="nav-a" href="#">Home</a></li>
                <li className="nav-li"><a className="nav-a" href="#">Mi cuenta</a></li>
                <CartWidget/ >
                </div>
            </ul>
        </nav>
    )
}
export default NavBar
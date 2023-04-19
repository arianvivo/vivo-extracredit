import React from "react";
import "./styles.css";
import logo from "./extended-logo.png"
import CartWidget from "../CartWidget";
import { NavLink, Link } from "react-router-dom";

const Navbar = (props) => {

    return(
            <nav className="navigation-bar">
                <div className="logo-link-container">
                    <NavLink to={'/'}>
                        <img src={logo} className="logo-img" />
                    </NavLink>
                </div>
                <div className="navlink-container">
                <NavLink to={`category/cable`} className={"nav-link"} >Cables</NavLink>
                <NavLink to={`category/boton`} className={"nav-link"} >Botones</NavLink>
                <NavLink to={`category/joystick`} className={"nav-link"} >Joysticks</NavLink>
                <NavLink to={`category/placa`} className={"nav-link"} >Placas</NavLink>
                </div>
                <CartWidget />
            </nav>
    )

}
export default Navbar
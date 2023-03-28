import React from "react";
import "./styles.css";
import logo from "./extended-logo.png"
import CartWidget from "../CartWidget";

const Navbar = (props) => {

    return(
            <nav className="navigation-bar">
                <img src={logo} className="logo-img" />
                <div className="navlink-container">
                <button>Inicio</button>
                <button>Catálogo</button>
                <button>Acerca de nosotros</button>
                <button>Contacto</button>
                </div>
                <CartWidget />
            </nav>
    )

}
export default Navbar
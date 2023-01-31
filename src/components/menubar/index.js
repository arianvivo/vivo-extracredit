import React from "react";
import "./styles.css";

const Menubar = (props) => {

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }

    return (
        <>
            <ul className="menu-bar-ul">
                <a href="/#" onClick={handleClick} ><li>Home</li></a>
                <a href="/#" onClick={handleClick} ><li>Productos</li></a>
                <a href="/#" onClick={handleClick} ><li>Acerca de nosotros</li></a>
                <a href="/#" onClick={handleClick} ><li>Contacto</li></a>
            </ul>
        </>
    )

}

export default Menubar;
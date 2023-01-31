import React from "react";
import "./styles.css";

const Navbar = (props) => {

    return(
        <div className="navigation-bar">
            {props.children}
        </div>
    )

}

export default Navbar;
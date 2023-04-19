import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import './styles.css'

const Item = ({id, name, img, price, stock}) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Cantidad disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )

}

export default Item
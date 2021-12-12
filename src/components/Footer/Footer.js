import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {

    const [clickeado, setClickeado] = useState(false);
    const toggle =() => setClickeado(!clickeado)

    return (
        <footer className="footer">
            <ul className="footerLinkContainer">
                <h4 className="categoriaFooter">Navegacion</h4>
                    <Link to="/" onClick={toggle}  className="footLinks">
                    Home
                    </Link>
                    <Link to="/category/Skate" onClick={toggle} className="footLinks">
                    Skates
                    </Link>
                    <Link to="/category/Calzado" onClick={toggle}  className="footLinks">
                    Calzado
                    </Link>
            </ul>
            <ul className="footerLinkContainer">
                <h4 className="categoriaFooter">Redes Sociales</h4>
                <ul className="iconsContainer">
                    <li className="footerLista"><Link to='//instagram.com' target="_blank" rel="noopener"><i className="fab fa-instagram"></i></Link></li>
                    <li className="footerLista"><Link to='//facebook.com' rel="noopener"><i className="fab fa-facebook-square"></i></Link></li>
                </ul>
            </ul>
            <ul className="footerLinkContainer">
                <h2 className="navbarLogoFoot">
                    <Link to="/" className="logolinkFooter" ><i className="fa-brands fa-usps"></i> <span className="nameShopFooter">SKTSHOP</span></Link>
                </h2>
            </ul>
        </footer>
    )
}

export default Footer

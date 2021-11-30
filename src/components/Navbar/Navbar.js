import React, {useState} from "react";
import CartWidget from "../Cart/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [clickeado, setClickeado] = useState(false);

  const toggle =() => setClickeado(!clickeado)
  const esconder = () => setClickeado(false)
  const mostrar = () => setClickeado(true)

  return (
    <nav className="NavbarItems">
      <h1 className="navbarLogo">
        <Link to="/" className="logolink" ><i className="fa-brands fa-usps"></i> <span className="nameShop">SKTSHOP</span></Link>
      </h1>
      <div className="menuIcono" onClick={toggle}>
        <i className={clickeado ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clickeado ? "navMenu activo" : "navMenu"}>
        <NavLink to="/" onClick={toggle} onBlur={esconder} onFocus={mostrar}  className="nav-links">
          Home
        </NavLink>
        <NavLink to="/category/Skate" onClick={toggle} onBlur={esconder} onFocus={mostrar} className="nav-links">
          Skates
        </NavLink>
        <NavLink to="/category/Calzado" onClick={toggle} onBlur={esconder} onFocus={mostrar}  className="nav-links">
          Calzado
        </NavLink>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;

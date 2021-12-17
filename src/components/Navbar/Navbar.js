import React, { useState, useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { CartContext } from "../CartContext/CartContext";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [clickeado, setClickeado] = useState(false);
  const { cart } = useContext(CartContext);

  const toggle = () => setClickeado(!clickeado);

  return (
    <nav className="NavbarItems">
      <h1 className="navbarLogo">
        <Link to="/" className="logolink">
          <i className="fa-brands fa-usps"></i>{" "}
          <span className="nameShop">SKTSHOP</span>
        </Link>
      </h1>
      <div className="menuIcono" onClick={toggle}>
        <i className={clickeado ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clickeado ? "navMenu activo" : "navMenu"}>
        <NavLink to="/" onClick={toggle} className="nav-links">
          Home
        </NavLink>
        <NavLink to="/category/Skate" onClick={toggle} className="nav-links">
          Skates
        </NavLink>
        <NavLink to="/category/Calzado" onClick={toggle} className="nav-links">
          Calzado
        </NavLink>
      </ul>
      {cart.length ? (
        <Link to="/Cart">
          <CartWidget />
        </Link>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;

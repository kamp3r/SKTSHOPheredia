import React from "react";
import CartWidget from "../Cart/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import react from "react";

const Navbar = () => {
  const [clickeado, setClickeado] = react.useState(false);

  const clickearMenu = () => {
    setClickeado((current) => !current);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbarLogo">
        <Link to="/" className="logolink" ><i className="fa-brands fa-usps"></i> <span className="nameShop">SKTSHOP</span></Link>
      </h1>
      <div className="menuIcono" onClick={clickearMenu}>
        <i className={clickeado ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clickeado ? "navMenu activo" : "navMenu"}>
        <NavLink to="/" className="nav-links">
          Home
        </NavLink>
        <NavLink to="/category/Skate" className="nav-links">
          Skates
        </NavLink>
        <NavLink to="/category/Calzado" className="nav-links">
          Calzado
        </NavLink>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;

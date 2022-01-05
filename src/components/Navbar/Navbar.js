import React, { useState, useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { CartContext } from "../CartContext/CartContext";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { UserContext } from "../UserContext/UserContext";

const Navbar = () => {
  const [clickeado, setClickeado] = useState(false);
  const { cart } = useContext(CartContext);
  const { usuarioGlobal } = useContext(UserContext);

  const toggle = () => setClickeado(!clickeado);
  const ocultar = () => setClickeado(false)


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
        <NavLink to="/" onClick={toggle}className="nav-links">
          Home
        </NavLink>
        <NavLink to="/category/Skates" onClick={toggle}className="nav-links">
          Skates
        </NavLink>
        <NavLink to="/category/Rollers" onClick={toggle} className="nav-links">
          Rollers
        </NavLink>
        <NavLink to="/category/BMX" onClick={toggle}className="nav-links">
          BMX
        </NavLink>
        <NavLink to="/MyAccount" onClick={toggle}className="nav-links">
          {usuarioGlobal ? "Mi cuenta" : "Iniciar Sesion"}
        </NavLink>
      </ul>
      
      {cart.length ? (
        <Link onClick={ocultar} to="/Cart" >
          <CartWidget />
        </Link>
      ) : (
        <div></div>
      )}
    </nav>
  );
};

export default Navbar;

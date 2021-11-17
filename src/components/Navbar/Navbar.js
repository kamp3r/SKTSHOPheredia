import React from 'react';
import { MenuItems } from "./MenuItems";
import CartWidget from "../Cart/CartWidget"
import './Navbar.css';

const Navbar = ()=> { 

    const [clickeado, setClickeado] = React.useState(false);


    const clickearMenu = () =>{
        setClickeado( current => !current)
    }

        return(
        <nav className="NavbarItems">
            <h1 className="navbarLogo"><i className="fa-brands fa-usps"></i>SKTSHOP</h1>
            <div className="menuIcono" onClick={clickearMenu}>
                <i className={clickeado ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clickeado ? 'navMenu activo' : 'navMenu'}>
                {MenuItems.map((item, index) =>{
                    return(
                        <li key={index}>
                            <a className={item.className} href={item.url}>{item.titulo}</a>
                        </li>
                    )
                })}
            </ul>
            <CartWidget />
        </nav>
    )
}

export default Navbar

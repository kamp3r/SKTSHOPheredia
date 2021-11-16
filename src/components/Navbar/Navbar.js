import React, { Component} from 'react';
import { MenuItems } from "./MenuItems";
import CartWidget from "../Cart/CartWidget"
import './Navbar.css';

class Navbar extends Component{
    state = { clickeado: false}

    clickearMenu = () =>{
        this.setState({ clickeado: !this.state.clickeado})
    }

    render(){
        return(
        <nav className="NavbarItems">
            <h1 className="navbarLogo"><i className="fa-brands fa-usps"></i>SKTSHOP</h1>
            <div className="menuIcono" onClick={this.clickearMenu}>
                <i className={this.state.clickeado ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={this.state.clickeado ? 'navMenu activo' : 'navMenu'}>
                {MenuItems.map((item, index) =>{
                    return(
                        <li key={index}>
                            <a className={item.classN} href={item.url}>{item.titulo}</a>
                        </li>
                    )
                })}
            </ul>
            <CartWidget />
        </nav>
    )}
}

export default Navbar

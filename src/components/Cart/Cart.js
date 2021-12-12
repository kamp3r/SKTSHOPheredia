import React, { useContext } from 'react'
import CartList from '../CartList/CartList'
import { Link } from 'react-router-dom';
import { CartContext } from "../CartContext/CartContext";
import './Cart.css';

const Cart = () => {
    const { cart, formatoNumero } = useContext(CartContext)
    const precioFinal = Object.values(cart).reduce((acc, { qty, precio }) => acc + qty * precio, 0)

    return (
        <body className="bodyCart">
            {cart.length ? (
                <>
                    <CartList></CartList>
                    <div className='totalApagar'>
                        <p>Total a Pagar: {formatoNumero.format(precioFinal)}</p>
                    </div>
                </>
            ) :
                (
                    <>
                        <p className='mensajeCarrito'>
                            No hay elementos en tu carrito
                        </p>
                       <Link to="/"> <button className="volverAtras">Volver al Home</button> </Link>
                    </>
                )
            }
        </body>
    )
}

export default Cart

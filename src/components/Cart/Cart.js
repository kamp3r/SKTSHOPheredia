import React, { useContext } from "react";
import CartList from "../CartList/CartList";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, formatoNumero, precioFinal } = useContext(CartContext);

  return (
    <div className="bodyCart">
      {cart.length ? (
        <>
          <CartList />
          <div className="totalApagar">
            <p>Total a Pagar: {formatoNumero.format(precioFinal(cart))}</p>
            <div className="buttonToPay">
              <Link to="/checkout">
                <button className="pasarApagar">Proceder al pago </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="mensajeCarrito">No hay elementos en tu carrito</p>
          <Link to="/">
            <button className="volverAtras">Volver al Home</button>{" "}
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;

import React, { useContext } from "react";
import "./CartWidget.css";
import { CBadge } from "@coreui/react";
import { CartContext } from "../CartContext/CartContext";


const CartWidget = () => {

  const { cart } = useContext(CartContext);
  let productosInCart = 0;

  cart.map((productos) => {
    return productosInCart = productosInCart + productos.qty;
  })

  return (
    <div className="contenedorCart">
      <i className="fas fa-shopping-cart">
        <CBadge className="badbge" color="danger" shape="rounded-pill">
          {productosInCart}
        </CBadge>
      </i>
    </div>
  );
};

export default CartWidget;

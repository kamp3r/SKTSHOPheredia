import React, { useContext } from "react";
import "./CartWidget.css";
import { CBadge } from "@coreui/react";
import { CartContext } from "../CartContext/CartContext";

const CartWidget = () => {
  const { productsInCart, cart } = useContext(CartContext);

  return (
    <div className="contenedorCart">
      <i className="fas fa-shopping-cart">
        <CBadge className="badbge" color="danger" shape="rounded-pill">
          {productsInCart(cart)}
        </CBadge>
      </i>
    </div>
  );
};

export default CartWidget;

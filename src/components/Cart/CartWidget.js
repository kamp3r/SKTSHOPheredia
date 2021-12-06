import React, {useContext} from "react";
import "./CartWidget.css";
import { CBadge } from "@coreui/react";
import { CartContext } from "./CartContext";


const CartWidget = () => {

  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  console.log(cart)

  return (
    <div className="contenedorCart">
      <i className="fas fa-shopping-cart">
        <CBadge className="badbge" color="danger" shape="rounded-pill">
          {cart.length}
        </CBadge>
      </i>
    </div>
  );
};

export default CartWidget;

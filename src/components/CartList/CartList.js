import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import "./CartList.css";

const CartList = () => {
  const { cart, deleteCartItemById, formatoNumero, deleteCart } = useContext(CartContext);
    
  return (
      <div className="cartList">
        <div className="headerCart">
          <h2 className="tituloCart">Resumen de Compra</h2>
          <h3 className="eliminarCart" onClick={()=> deleteCart()}>Eliminar Todo</h3>
        </div>
        {cart.map((product)=>{
          return <div className="cartLine" key={product.id}>
            <div className="cartCard">
              <img className="cartImgProd" src={product.imagen} alt={product.nombre} />
              <p className="infoCardCart">{product.nombre}</p>
              <p className="infoCardCart">Precio Unitario:{formatoNumero.format(product.precio)}</p>
              <p className="infoCardCart">Cantidad:{product.qty}</p>
              <p className="infoCardCart">Subtotal:{formatoNumero.format(product.qty * product.precio)}</p>
              <i className="far fa-trash-alt" onClick={()=> deleteCartItemById(product.id)}></i>
            </div>
          </div>
        })
        }
      </div>
  );
};

export default CartList;

import React, { useState, useContext } from "react";
import "../Item/Item.css";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart/CartContext";

const ItemDetail = ({ item }) => {
  const [AddCart, setAddCart] = useState(false);

  const cartContext = useContext(CartContext)
  const { addToCart, deleteCartItemById } = cartContext

  const onAdd = (qty) => {
    if (qty > 0) {
      addToCart(item, qty)
      setAddCart(true)
    } else {
      setAddCart(false)
    }
  }

  const handleClick = () => {
    deleteCartItemById();
    setAddCart(false);
  }


  return (
    <div className="detailContainer">
      <img className="imageDetail" src={item.imagen} alt={item.nombre} />
      <div className="detailsProduct">
        <h2>{item.nombre}</h2>
        <h3>{item.descripcion}</h3>
        <h4>${item.precio}</h4>
        {AddCart ? (
          <>
            <Link to="/cart">
              <button className="toCartButton">Terminar Compra</button>
            </Link>
            <button className="borrarElemento" onClick={handleClick}>Borrar este elemento del carrito</button>
          </>
        ) : (
          <ItemCount initial={0} stock={item.stock} onAdd={onAdd} item={item} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;

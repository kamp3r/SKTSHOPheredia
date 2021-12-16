import React, { useState, useContext } from "react";
import "../Item/Item.css";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({ item }) => {
  const [AddCart, setAddCart] = useState(false);
  const cartContext = useContext(CartContext);
  const { addToCart, formatoNumero } = cartContext;

  const onAdd = (qty) => {
    if (qty > 0) {
      addToCart(item, qty);
      setAddCart(true);
    } else {
      setAddCart(false);
    }
  };

  return (
    <div className="detailContainer">
      <img className="imageDetail" src={item.imagen} alt={item.nombre} />
      <div className="detailsProduct">
        <h2 className="nombreDetail">{item.nombre}</h2>
        <h3 className="descripcionDetail">{item.descripcion}</h3>
        <h4 className="precioDetail">{formatoNumero.format(item.precio)}</h4>
        {AddCart ? (
          <Link to="/cart">
            <button className="toCartButton">Terminar Compra</button>
          </Link>
        ) : (
          <ItemCount initial={0} stock={item.stock} onAdd={onAdd} item={item} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;

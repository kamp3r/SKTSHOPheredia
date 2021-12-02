import React, { useState } from "react";
import "../Item/Item.css";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [AddCart, setAddCart] = useState(false);

  function onAdd(quantityToAdd) {
    if (quantityToAdd > 0) {
      setAddCart(true);
    } else {
      setAddCart(false);
    }
  }

  return (
    <div className="detailContainer">
      <img className="imageDetail" src={item.imagen} alt={item.nombre} />
      <div className="detailsProduct">
        <h2>{item.nombre}</h2>
        <h3>{item.descripcion}</h3>
        <h4>${item.precio}</h4>
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

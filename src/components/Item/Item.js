import React, { useContext } from "react";
import "./Item.css";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const Item = ({ item }) => {

  const { formatoNumero } = useContext(CartContext)

  return (
    <div className="cardProducto">
      <img className="cardImage" src={item.imagen} alt={item.nombre} />
      <h2 className="name">{item.nombre}</h2>
      <h3 className="price">{formatoNumero.format(item.precio)}</h3>
      <Link className="linkVerMas" to={`/items/${item.id}`}>
        <button className="verMas"> Ver más</button>
      </Link>
      <h4 className="stock">Stock: {item.stock} Unidades</h4>
    </div>
  );
};

export default Item;

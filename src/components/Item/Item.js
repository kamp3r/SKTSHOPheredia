import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {

  return (
    <div className="cardProducto">
      <img className="cardImage" src={item.imagen} alt={item.nombre} />
      <h2 className="productData">{item.nombre}</h2>
      <h3 className="productData">$ {item.precio}</h3>
      <h4 className="productData">Stock: {item.stock} Unidades</h4>
      <Link className="linkVerMas" to={`/items/${item.categoryId}/${item.id}`}>
        <button className="verMas"> Ver más</button>
      </Link>
    </div>
  );
};

export default Item;

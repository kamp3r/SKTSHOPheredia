import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div className="cardProducto">
            <Link to={`/items/${item.categoryId}/${item.id}`}><img className="cardImage" src={item.imagen} alt={item.nombre} /></Link>
            <h2 className="productData">{item.nombre}</h2>
            <ItemCount initial={0} stock={item.stock} />
        </div>
    )
}

export default Item
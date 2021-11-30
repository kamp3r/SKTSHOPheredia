import React from 'react'
import '../Item/Item.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item}) => {
    return (
        <div className="cardProducto">
        <img className="cardImage" src={item.imagen} alt={item.nombre} />
        <h2>{item.nombre}</h2>
        <h3>{item.descripcion}</h3>
        <ItemCount initial={0} stock={item.stock} />
        </div>
    )
}

export default ItemDetail

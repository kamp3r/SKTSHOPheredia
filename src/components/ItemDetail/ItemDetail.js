import React from 'react'
import '../Item/Item.css'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    return (
        <div className="detailContainer">
            <img className="imageDetail" src={item.imagen} alt={item.nombre} />
            <div className="detailsProduct">
                <h2>{item.nombre}</h2>
                <h3>{item.descripcion}</h3>
                <h4>${item.precio}</h4>
                <ItemCount initial={0} stock={item.stock} />
            </div>
        </div>
    )
}

export default ItemDetail

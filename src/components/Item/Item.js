import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({data}) => {
    return (
        <div className="cardProducto">
            <img className="cardImage" src={`${process.env.PUBLIC_URL}/${data.imagen}`} alt="imagen producto"/>
            <div className="productData">
                <h2>{data.nombre}</h2>
                <ItemCount initial={1}
                            stock={data.stock}/>
            </div>
        </div>
    )
}

export default Item

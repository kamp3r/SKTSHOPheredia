import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className="ListContainer">
            {greeting}
        </div>
    )
}

export default ItemListContainer

import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import Carrousel from '../Carrousel/Carrousel'


const ItemListContainer = ({greeting}) => {
    return (
        <>
            <div className="ListContainer">
                <Carrousel />
                <div className='containerElement'>
                    <ItemList />
                </div>  
            </div>
            
        </>
    )
}

export default ItemListContainer

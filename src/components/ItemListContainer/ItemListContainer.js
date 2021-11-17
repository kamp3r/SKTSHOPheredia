import React from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <div className="ListContainer">
                {greeting}
                <div className='containerElement'>
                    <ItemCount
                       initial={1}
                        stock={10}/>

                    <ItemCount
                    initial={0}
                    stock={0}
                    />

                    <ItemCount
                    initial={1}
                    stock={30}
                    />

                    <ItemCount
                    initial={1}
                    stock={2}
                    />
                </div>  
            </div>
            
        </>
    )
}

export default ItemListContainer

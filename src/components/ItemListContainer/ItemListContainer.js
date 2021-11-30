import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner'


const ItemListContainer = ({ categoriaId }) => {
    const [item, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
   
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true)
            fetch(`https://61a52ad94c822c0017042124.mockapi.io/api/category/${categoriaId}/items`)
                .then((Response) => Response.json())
                .then((data) => { setItems(data); setIsLoading(false) });
        }, 2000)
    }, [categoriaId]);

    return (
        <>
            <div className="ListContainer">
                <div className='containerElement'>
                    <h1>{categoriaId}</h1>
                    {isLoading ? <Spinner /> : <ItemList items={item} />}
                </div>
            </div>

        </>
    )
}

export default ItemListContainer
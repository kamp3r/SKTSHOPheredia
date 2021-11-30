import React, {useState, useEffect} from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ categoriaId }) => {
    const [item, setItems] = useState([]);

    useEffect(() =>{
        
    setTimeout(() =>{   
        fetch(`https://61a52ad94c822c0017042124.mockapi.io/api/category/${categoriaId}/items`)
        .then((Response) => Response.json())
        .then((data) => setItems(data));
    }, 2000)    
    },[categoriaId]);

    return (
        <>
            <div className="ListContainer">
                <div className='containerElement'>
                    <h1>{categoriaId}</h1>
                    <ItemList items={item}/>
                </div>  
            </div>
            
        </>
    )
}

export default ItemListContainer
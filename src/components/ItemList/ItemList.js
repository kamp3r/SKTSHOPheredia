import React, { useState, useEffect} from 'react';
import './ItemList.css';
import Item from '../Item/Item';

const ItemList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        
    setTimeout(() =>{   
        fetch('./data.json')
        .then((Response) => Response.json())
        .then((data) => setProducts(data));
    }, 2000)
    },[]);

    return (
        <div className="grillaProductos">
            {products.map((product) =>{
                return <Item data={product} key={product.id}/>
            })}
        </div>
    )
}

export default ItemList

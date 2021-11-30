import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItems] = useState([]);
    let {categoryId, id} = useParams();

    useEffect(() => {

        setTimeout(() => {
            fetch(`https://61a52ad94c822c0017042124.mockapi.io/api/category/${categoryId}/items/${id}`)
                .then((Response) => Response.json())
                .then((data) => setItems(data));
        }, 2000)
    }, [categoryId, id]);
    
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer

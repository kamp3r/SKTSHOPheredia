import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = ({ categoriaId }) => {
    const [item, setItems] = useState([]);
    let id = useParams();
    let productId = id.id 

    useEffect(() => {

        setTimeout(() => {
            fetch(`https://61a52ad94c822c0017042124.mockapi.io/api/category/${categoriaId}/items/${productId}`)
                .then((Response) => Response.json())
                .then((data) => setItems(data));
        }, 2000)
    }, [categoriaId, productId]);
    
    return (
        <div>
            <ItemDetail item={item} categoriaId={item.categoriaId}/>
        </div>
    )
}

export default ItemDetailContainer

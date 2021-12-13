import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from '../../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore'
import "./ItemDetailContainer.css";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() =>{
    const getProducts = async () => {
      setIsLoading(true);
      const prodQ = doc(db, 'products', id);
      const prodCapt = await getDoc(prodQ);
      if (prodCapt.exists()) {
        setItem({...prodCapt.data(), id: id});
        setIsLoading(false);
      } else {
        console.log("No se encontro el producto")
      };
    };
    getProducts()
  }, 2000)
  }, [id]);

  return (
    <div className="itemDetail">
      {isLoading ? <Spinner /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;

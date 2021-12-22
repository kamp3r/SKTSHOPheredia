import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import "./ItemDetailContainer.css";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [found, setFound] = useState()
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const getProducts = async () => {
        setIsLoading(true);
        const prodQ = doc(db, "products", id);
        const prodCapt = await getDoc(prodQ)
        if (prodCapt.exists()) {
          setItem({ ...prodCapt.data(), id: id });
          setIsLoading(false);
          setFound(true)
        } else {
          setIsLoading(false)
          setFound(false)
        }
      };
      getProducts();
    }, 2000);
  }, [id]);

  return (
    <div className="itemDetail">
      {isLoading ? <Spinner/> : (found ? <ItemDetail item={item} /> : <Error msg={'El producto no existe'}/>)}
    </div>
  );
};

export default ItemDetailContainer;

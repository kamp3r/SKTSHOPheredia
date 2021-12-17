import React, { useState, useEffect } from "react";
import "../ItemListContainerCategory/ItemListContainerCategory.css";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = () => {
  const [item, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const getProducts = async () => {
        setIsLoading(true);
        const q = query(collection(db, "products"), orderBy("nombre"));
        const prods = [];
        const queryCap = await getDocs(q);
        queryCap.forEach((prod) => {
          prods.push({ ...prod.data(), id: prod.id });
          setIsLoading(false);
        });
        setItems(prods);
      };
      getProducts();
    }, 2000);
  }, []);

  return (
    <>
      <div className="ListContainer">
        <div className="containerElement">
          {isLoading ? <Spinner /> : <ItemList items={item} />}
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;

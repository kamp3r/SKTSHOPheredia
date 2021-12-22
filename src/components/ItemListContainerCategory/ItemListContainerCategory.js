import React, { useState, useEffect } from "react";
import "./ItemListContainerCategory.css";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";

const ItemListContainerCategory = ({ categoriaId }) => {
  const [item, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const getProducts = async () => {
        setIsLoading(true);
        const q = query(
          collection(db, "products"),
          where("categoryId", "==", categoriaId)
        );
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
  }, [categoriaId]);

  return (
    <>
      <div className="ListContainer">
        <div className="containerElement">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <h1 className="categoryTitleR">{categoriaId}</h1>
              <ItemList items={item} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemListContainerCategory;

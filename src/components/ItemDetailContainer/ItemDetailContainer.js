import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = () => {
  const [item, setItems] = useState([]);
  let { categoryId, id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
      fetch(
        `https://61a52ad94c822c0017042124.mockapi.io/api/category/${categoryId}/items/${id}`
      )
        .then((Response) => Response.json())
        .then((data) => {
          setItems(data);
          setIsLoading(false);
        });
    }, 2000);
  }, [categoryId, id]);

  return (
    <div className="itemDetail">
      {isLoading ? <Spinner /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;

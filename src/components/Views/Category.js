import React from "react";
import { useParams } from "react-router-dom";
import ItemListContainerCategory from "../ItemListContainerCategory/ItemListContainerCategory";

const Category = () => {
  const params = useParams();

  return (
    <div>
      <ItemListContainerCategory categoriaId={params.categoryId} />
    </div>
  );
};

export default Category;

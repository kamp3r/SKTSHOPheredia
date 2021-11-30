import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <div>
      <ItemListContainer categoriaId="Skate" />
      <ItemListContainer categoriaId="Calzado" />
    </div>
  );
};

export default Home;

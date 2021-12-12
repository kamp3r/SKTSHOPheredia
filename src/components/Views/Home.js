import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Carrousel from "../Carrousel/Carrousel";

const Home = () => {
  return (
    <div>
      <Carrousel />
      <ItemListContainer categoriaId="Skate" />
      <ItemListContainer categoriaId="Calzado" />
    </div>
  );
};

export default Home;

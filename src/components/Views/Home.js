import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import Carrousel from "../Carrousel/Carrousel";

const Home = () => {
  return (
    <div>
      <Carrousel />
      <ItemListContainer/>
    </div>
  );
};

export default Home;

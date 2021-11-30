import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Carrousel from "./components/Carrousel/Carrousel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Home from "./components/Views/Home";
import Category from "./components/Views/Category";

function App() {
  return (
    <Router>
      <Header />
      <Carrousel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/category/:categoryId' element={<Category />} />
        <Route path="/items/:categoryId/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </Router>
  );
}

export default App;

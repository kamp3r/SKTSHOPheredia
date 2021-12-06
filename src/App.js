import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Carrousel from "./components/Carrousel/Carrousel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Home from "./components/Views/Home";
import Category from "./components/Views/Category";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/Cart/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Carrousel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route
            path="/items/:categoryId/:id"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

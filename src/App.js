import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Home from "./components/Views/Home";
import ErrorView from "./components/Views/ErrorView";
import Category from "./components/Views/Category";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/CartContext/CartContext";
import Footer from "./components/Footer/Footer";
import CheckoutView from "./components/Views/CheckoutView";
import MyAcc from "./components/Views/MyAcc";
import { UserProvider } from "./components/UserContext/UserContext";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/items/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutView />} />
            <Route path="/miCuenta" element={<MyAcc />}></Route>
            <Route path="*" element={<ErrorView />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;

import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, qty) => {
    if (cart.some(element => element.id === item.id)) {
      let index = cart.findIndex(elem => elem.id === item.id);
      let producto = cart[index];
      producto.qty = producto.qty + qty;
      const newCart = [...cart];
      newCart.splice(index, 1, producto);
      setCart([...newCart])
    } else {
      let producto = { ...item, qty };
      setCart([...cart, producto]);
    }
  }

  const deleteCartItemById = (id) => {
    let index = cart.findIndex(elem => elem.id === id);
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart([...newCart])
  }

  const deleteCart = () => {
    setCart([]);
  }

  const formatoNumero = new Intl.NumberFormat('en-IN', {style: "currency", currency: "USD"})

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, deleteCart, deleteCartItemById, formatoNumero}}>
      {children}
    </CartContext.Provider>
  );
};

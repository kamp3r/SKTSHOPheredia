import React, { useState, useEffect } from "react";
import "./ItemCount.css";


const ItemCount = ({ initial, stock, onAdd, item}) => {
  const [elementos, setElementos] = useState(initial);
  const [disabledAdd, setDisabledAdd] = useState(true);
  const [disabledSuma, setDisabledSuma] = useState(false);
  const [disabledResta, setDisabledResta] = useState(false);
  

  useEffect(() => {
    if (elementos > initial || stock < elementos) {
      setDisabledResta(false);
      setDisabledSuma(false);
      setDisabledAdd(false);
    } else if (elementos <= initial) {
      setDisabledResta(true);
      setDisabledAdd(true);
    }
    if (elementos >= stock) {
      setDisabledSuma(true);
    }
  }, [elementos, initial, stock]);

  function addCart() {
    if (elementos>0){
    onAdd(elementos);
  } else{

  }
  }

  const suma = () => {
    setElementos(elementos + 1);
  };
  const resta = () => {
    setElementos(elementos - 1);
  };

  return (
    <div className="itemCount">
      <div className="containerButtons">
        <button
          onClick={resta}
          disabled={disabledResta}
          className="decremento ButtCount"
        >
          <i className="fas fa-minus"></i>
        </button>
        <button className="numeroSeleccionado">{elementos}</button>
        <button
          onClick={suma}
          disabled={disabledSuma}
          className="aumento ButtCount"
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="containerStock">
        <span className="stockDisponible">
          Stock: {stock} unidades
        </span>
      </div>
      <button className="agregarItem" disabled={disabledAdd} onClick={addCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

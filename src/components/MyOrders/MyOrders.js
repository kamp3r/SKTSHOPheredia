import React, {useContext} from "react";
import "./MyOrders.css";
import {CTableRow, CTableHeaderCell, CTableDataCell} from "@coreui/react";
import { CartContext } from "../CartContext/CartContext";

const MyOrders = ({ compra }) => {

  const {formatoNumero} = useContext(CartContext)

  return (
        <CTableRow>
        <CTableHeaderCell scope="row">{compra.id}</CTableHeaderCell>
        <CTableDataCell>{compra.date}</CTableDataCell>
        <CTableDataCell>{compra.items.map((item) => {
          return <p key={item.nombre}>{item.nombre}</p>;
        })}</CTableDataCell>
        <CTableDataCell>{formatoNumero.format(compra.total)}</CTableDataCell>
        </CTableRow>
  );
};

export default MyOrders;

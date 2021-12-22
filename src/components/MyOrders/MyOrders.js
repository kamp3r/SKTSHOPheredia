import React from "react";
import "./MyOrders.css";
import {CTableRow, CTableHeaderCell, CTableDataCell} from "@coreui/react";

const MyOrders = ({ compra }) => {
  return (
        <CTableRow>
        <CTableHeaderCell scope="row">{compra.id}</CTableHeaderCell>
        <CTableDataCell>{compra.date}</CTableDataCell>
        <CTableDataCell>{compra.items.map((item) => {
          return <p key={item.nombre}>{item.nombre}</p>;
        })}</CTableDataCell>
        <CTableDataCell>{compra.total}</CTableDataCell>
        </CTableRow>
  );
};

export default MyOrders;

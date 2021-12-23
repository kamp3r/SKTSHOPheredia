import React, {useContext} from "react";
import "./MyOrders.css";
import {CTableRow, CTableHeaderCell, CTableDataCell} from "@coreui/react";
import { CartContext } from "../CartContext/CartContext";

const MyOrders = ({ compra }) => {

  var stingifyDate = compra.Date.toDate().toISOString();
  var split1 = stingifyDate.split('T');
  var date = split1[0]

  const {formatoNumero} = useContext(CartContext)

  return (
        <CTableRow align="middle">
        <CTableHeaderCell scope="row">{compra.id}</CTableHeaderCell>
        <CTableDataCell>{date}</CTableDataCell>
        <CTableDataCell>{compra.items.map((item) => {
          return <p key={item.nombre}>{item.nombre} (x {item.qty})</p>;
        })}</CTableDataCell>
        <CTableDataCell>{formatoNumero.format(compra.total)}</CTableDataCell>
        </CTableRow>
  );
};

export default MyOrders;

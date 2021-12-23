import React, { useState, useEffect } from "react";
import "./MyAccount.css";
import {
  CButton,
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
} from "@coreui/react";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../UserContext/UserContext";
import { collection, where, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import MyOrders from "../MyOrders/MyOrders";
import Spinner from "../Spinner/Spinner";

const Myaccount = ({ userMail }) => {
  const { handleSignOut } = useContext(UserContext);
  const [listaCompra, setListaCompra] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getInfo = async () => {
      setIsLoading(true);
      const q = query(
        collection(db, "ordenes"),
        where("buyerInfo.email", "==", userMail)
      );
      const orders = [];
      const queryCap = await getDocs(q);
      queryCap.forEach((order) => {
        orders.push({ ...order.data(), id: order.id });
      });
      setListaCompra(orders);
      setIsLoading(false);
    };
    getInfo();
  }, [userMail]);

  return (
    <div className="myAccountContainer">
      <h1>Bienvenida/o {userMail} !</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <CTable color="dark" bordered>
          <CTableHead align="middle">
            <CTableRow>
              <CTableHeaderCell scope="col">ID</CTableHeaderCell>
              <CTableHeaderCell scope="col">Fecha</CTableHeaderCell>
              <CTableHeaderCell scope="col">Productos</CTableHeaderCell>
              <CTableHeaderCell scope="col">Total</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody align="middle">
            {listaCompra
              ? listaCompra.map((compra) => {
                  return <MyOrders compra={compra} key={compra.id} />;
                })
              : null}
          </CTableBody>
        </CTable>
      )}
      <CButton size="lg" color="danger" onClick={()=>handleSignOut()}>
        Cerrar Sesion
      </CButton>
    </div>
  );
};

export default Myaccount;

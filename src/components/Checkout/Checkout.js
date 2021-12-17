import React, { useContext, useState, useEffect } from "react";
import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormFloating,
  CFormCheck,
  CButton,
  CCol,
  CFormSelect,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { db } from "../../firebase/firebaseConfig";
import {
  Timestamp,
  addDoc,
  collection,
  writeBatch,
  getDocs,
  where,
  documentId,
  query,
} from "firebase/firestore";
import Spinner from "../Spinner/Spinner";

const initialValues = {
  nombre: "",
  apellido: "",
  email: "",
  direccion: "",
  ciudad: "",
  cp: "",
  provincia: "",
};

const Checkout = () => {
  const [userInfo, setUserInfo] = useState(initialValues);
  const [cardType, setCardType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [purchaseId, setPurchaseId] = useState("");
  const [visible, setVisible] = useState(false);
  const { cart, precioFinal, deleteCart } = useContext(CartContext);
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [isLoading]);

  const handleSubmit = (e) => {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();

      const nuevaOrden = {
        buyerInfo: userInfo,
        items: cart,
        paymentMethod: cardType,
        cardNumber: cardNumber,
        cardExpiration: cardExp,
        cardCvc: cardCvc,
        Date: Timestamp.fromDate(new Date()),
        total: precioFinal(),
      };

      const ordenRef = collection(db, "ordenes");

      addDoc(ordenRef, nuevaOrden).then((res) => {
        setPurchaseId(res.id);
      });

      const stockProdRef = collection(db, "products");

      const batch = writeBatch(db);
      const q = query(
        stockProdRef,
        where(
          documentId(),
          "in",
          cart.map((prod) => prod.id)
        )
      );

      const sinStock = [];

      getDocs(q).then((res) => {
        res.docs.forEach((doc) => {
          const itemToUpdate = cart.find((prod) => prod.id === doc.id);

          if (doc.data().stock >= itemToUpdate.qty) {
            batch.update(doc.ref, {
              stock: doc.data().stock - itemToUpdate.qty,
            });
          } else {
            sinStock.push(itemToUpdate);
          }
        });
        if (sinStock.length === 0) {
          batch.commit();
        }
      });
      setValidated(true);
      setVisible(!visible);
      deleteCart();
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onSelectPay = (tarjetaSeleccionada) => {
    setCardType(tarjetaSeleccionada);
  };

  return (
    <div className="checkoutContainer">
      <h2>Finaliza tu compra</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <CForm
            className="row g-3 checkout"
            validated={validated}
            onSubmit={handleSubmit}
          >
            <p className="subDivisor">Datos Personales</p>
            <CCol md={6}>
              <CFormFloating>
                <CFormInput
                  type="text"
                  id="inputNombre"
                  name="nombre"
                  placeholder="Nombre"
                  required
                  onChange={onChangeHandler}
                  value={userInfo.nombre}
                  maxLength="20"
                />
                <CFormLabel className="col-form-label-lg" htmlFor="inputNombre">
                  Nombre
                </CFormLabel>
              </CFormFloating>
            </CCol>
            <CCol md={6}>
              <CFormFloating>
                <CFormInput
                  type="text"
                  id="inputApellido"
                  placeholder="Apellido"
                  required
                  onChange={onChangeHandler}
                  name="apellido"
                  value={userInfo.apellido}
                  maxLength="20"
                />
                <CFormLabel
                  className="col-form-label-lg"
                  htmlFor="inputApellido"
                >
                  Apellido
                </CFormLabel>
              </CFormFloating>
            </CCol>
            <CCol md={6}>
              <CFormFloating>
                <CFormInput
                  type="email"
                  id="inputEmail"
                  placeholder="Email"
                  required
                  onChange={onChangeHandler}
                  name="email"
                  value={userInfo.email}
                  maxLength="25"
                />
                <CFormLabel className="col-form-label-lg" htmlFor="inputEmail">
                  Email
                </CFormLabel>
              </CFormFloating>
            </CCol>
            <CCol md={12}>
              <CFormFloating>
                <CFormInput
                  type="text"
                  id="inputDireccion"
                  placeholder="Direccion"
                  required
                  onChange={onChangeHandler}
                  name="direccion"
                  value={userInfo.direccion}
                  maxLength="30"
                />
                <CFormLabel
                  className="col-form-label-lg"
                  htmlFor="inputDireccion"
                >
                  Direccion completa y entrecalles
                </CFormLabel>
              </CFormFloating>
            </CCol>
            <CCol md={6}>
              <CFormFloating>
                <CFormInput
                  type="text"
                  id="inputCiudad"
                  placeholder="Ciudad"
                  required
                  onChange={onChangeHandler}
                  name="ciudad"
                  value={userInfo.ciudad}
                  maxLength="20"
                />
                <CFormLabel className="col-form-label-lg" htmlFor="inputCiudad">
                  Ciudad
                </CFormLabel>
              </CFormFloating>
            </CCol>
            <CCol md={4}>
              <CFormFloating>
                <CFormInput
                  type="text"
                  id="inputCodigo"
                  placeholder="Codigo Postal"
                  required
                  onChange={onChangeHandler}
                  name="cp"
                  value={userInfo.cp}
                  pattern="[0-9]"
                  maxLength="4"
                />
                <CFormLabel htmlFor="inputCodigo" className="col-form-label-lg">
                  Codigo Postal
                </CFormLabel>
              </CFormFloating>
            </CCol>
            <CCol md={12}>
              <CFormSelect
                size="lg"
                id="inputState"
                name="provincia"
                required
                onChange={onChangeHandler}
                value={userInfo.provincia}
              >
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Catamarca">Catamarca</option>
                <option value="Chaco">Chaco</option>
                <option value="Chubut">Chubut</option>
                <option value="CABA">Ciudad Autonoma de Buenos Aires</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Corrientes">Corrientes</option>
                <option value="Entre Ríos">Entre Ríos</option>
                <option value="Formosa">Formosa</option>
                <option value="Jujuy">Jujuy</option>
                <option value="La Pampa">La Pampa</option>
                <option value="La Riojas">La Rioja</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Misiones">Misiones</option>
                <option value="Neuquén">Neuquén</option>
                <option value="Río Negro">Río Negro</option>
                <option value="Salta">Salta</option>
                <option value="San Juan">San Juan</option>
                <option value="San Lui">San Luis</option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Santiago del Estero">Santiago del Estero</option>
                <option value="Tierra del Fuego">Tierra del Fuego</option>
                <option value="Tucumán">Tucumán</option>
              </CFormSelect>
            </CCol>

            <p className="subDivisor">Tarjeta de Credito</p>

            <CCol xs={12} className="containerCards">
              <div className="tarjeta">
                <i className="fab fa-cc-visa"></i>
                <CFormCheck
                  type="radio"
                  name="tarjeta"
                  id="visa"
                  required
                  onClick={() => onSelectPay("visa")}
                />
              </div>
              <div className="tarjeta">
                <i className="fab fa-cc-mastercard"></i>
                <CFormCheck
                  type="radio"
                  name="tarjeta"
                  id="mastercard"
                  required
                  onClick={() => onSelectPay("mastercard")}
                />
              </div>
              <div className="tarjeta">
                <i className="fab fa-cc-amex"></i>
                <CFormCheck
                  type="radio"
                  name="tarjeta"
                  id="american"
                  required
                  onClick={() => onSelectPay("american")}
                />
              </div>
            </CCol>
            <CCol md={6}>
              <CFormFloating>
                <CFormInput
                  type="text"
                  id="inputTarjNum"
                  placeholder="Numero de Tarjeta"
                  required
                  value={cardNumber}
                  onInput={(e) => setCardNumber(e.target.value)}
                  pattern="[0-9]"
                  maxLength="16"
                />
                <CFormLabel
                  className="col-form-label-lg"
                  htmlFor="inputTarjNum"
                >
                  Numero de Tarjeta
                </CFormLabel>
              </CFormFloating>
            </CCol>
            <CCol md={3}>
              <CFormFloating>
                <CFormInput
                  type="text"
                  id="inputVencimiento"
                  placeholder="Numero de Vencimiento"
                  required
                  value={cardExp}
                  onInput={(e) => setCardExp(e.target.value)}
                  pattern="[0-9]"
                  maxLength="4"
                />
                <CFormLabel
                  className="col-form-label-lg"
                  htmlFor="inputVencimiento"
                >
                  Vencimiento
                </CFormLabel>
              </CFormFloating>
            </CCol>
            <CCol md={3}>
              <CFormFloating>
                <CFormInput
                  type="password"
                  id="inputCvc"
                  placeholder="CVC"
                  required
                  value={cardCvc}
                  onInput={(e) => setCardCvc(e.target.value)}
                  pattern="[0-9]"
                  maxLength="3"
                />
                <CFormLabel className="col-form-label-lg" htmlFor="inputCvc">
                  CVC
                </CFormLabel>
              </CFormFloating>
            </CCol>
            <CCol xs={12}>
              <CButton color="warning" size="lg" type="submit">
                Confirmar compra
              </CButton>
            </CCol>
          </CForm>
          <>
            <CModal
              alignment="center"
              visible={visible}
              backdrop="static"
              onClose={() => setVisible(false)}
            >
              <CModalHeader>
                <CModalTitle>Tu pago fue procesado con exito!</CModalTitle>
              </CModalHeader>

              <CModalBody>Tu ID de transaccion es: {purchaseId}</CModalBody>

              <CModalFooter>
                <Link to="/">
                  <CButton color="secondary" onClick={() => setVisible(false)}>
                    Volver al inicio
                  </CButton>
                </Link>
              </CModalFooter>
            </CModal>
          </>
        </>
      )}
    </div>
  );
};

export default Checkout;

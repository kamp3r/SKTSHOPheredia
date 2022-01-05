import React, { useContext } from "react";
import "./SignUpMail.css";
import {
  CForm,
  CFormFeedback,
  CFormInput,
  CCol,
  CButton,
  CFormLabel,
  CFormCheck,
  CAlert,
  CFormSelect,
} from "@coreui/react";
import { UserContext } from "../UserContext/UserContext";

const SignUpMail = () => {
  const {
    registered,
    setRegistered,
    validated,
    handleSign,
    errorMsg,
    changeHandler,
    userReg,
  } = useContext(UserContext);

  return (
    <div className="signInUpLog">
      <h1>{registered ? "Inicia Sesion" : "Registrate acá"}</h1>
      <CForm
        className="row g-3 needs-validation formLog"
        validated={validated}
        onSubmit={handleSign}
      >
        {registered ? (
          <>
            <CCol md={5} className="cFormContLog">
              <CFormLabel htmlFor="name">Email</CFormLabel>
              <CFormInput type="email" id="email" required size="lg" />
              <CFormFeedback valid>Correcto!</CFormFeedback>
            </CCol>
            <CCol md={5} className="cFormContLog">
              <CFormLabel htmlFor="email">Contraseña</CFormLabel>
              <CFormInput type="password" id="password" required />
              <CFormFeedback valid>Correcto!</CFormFeedback>
            </CCol>
          </>
        ) : (
          <>
            <CCol md={5} className="cFormContLog">
              <CFormLabel htmlFor="nombreReg">Nombre</CFormLabel>
              <CFormInput
                onChange={changeHandler}
                value={userReg.nombre}
                name="nombre"
                type="text"
                id="nombreReg"
                required
                maxLength="30"
              />
              <CFormFeedback valid>Correcto!</CFormFeedback>
            </CCol>
            <CCol md={5} className="cFormContLog">
              <CFormLabel htmlFor="apellidoReg">Apellido</CFormLabel>
              <CFormInput
                onChange={changeHandler}
                value={userReg.apellido}
                name="apellido"
                type="text"
                id="apellidoReg"
                required
                maxLength="30"
              />
              <CFormFeedback valid>Correcto!</CFormFeedback>
            </CCol>
            <CCol md={5} className="cFormContLog">
              <CFormLabel htmlFor="direccionReg">Direccion</CFormLabel>
              <CFormInput
                onChange={changeHandler}
                value={userReg.direccion}
                name="direccion"
                type="text"
                id="direccionReg"
                required
                maxLength="60"
              />
              <CFormFeedback valid>Correcto!</CFormFeedback>
            </CCol>
            <CCol md={5} className="cFormContLog">
              <CFormLabel htmlFor="ciudadReg">Ciudad</CFormLabel>
              <CFormInput
                onChange={changeHandler}
                value={userReg.ciudad}
                name="ciudad"
                type="text"
                id="ciudadReg"
                required
                maxLength="40"
              />
              <CFormFeedback valid>Correcto!</CFormFeedback>
            </CCol>
            <CCol md={3} className="cFormContLog">
              <CFormLabel htmlFor="cpReg">Codigo Postal</CFormLabel>
              <CFormInput
                onChange={changeHandler}
                value={userReg.cp}
                name="cp"
                type="text"
                id="cpReg"
                required
                maxLength={4}
                pattern="[0-9]{4}"
              />
              <CFormFeedback valid>Correcto!</CFormFeedback>
            </CCol>
            <CCol md={7} className="selectProv">
              <CFormLabel htmlFor="provReg">Provincia</CFormLabel>
              <CFormSelect
                onChange={changeHandler}
                value={userReg.provincia}
                name="provincia"
                size="lg"
                id="provReg"
                required
              >
                <option value="">--Elegi tu Provincia--</option>
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
            <CCol md={5} className="cFormContLog">
              <CFormLabel htmlFor="name">Email</CFormLabel>
              <CFormInput
                type="email"
                id="email"
                onChange={changeHandler}
                value={userReg.email}
                name="email"
                required
                size="lg"
                maxLength="60"
              />
              <CFormFeedback valid>Correcto!</CFormFeedback>
            </CCol>

            <CCol md={5} className="cFormContLog">
              <CFormLabel htmlFor="email">Contraseña</CFormLabel>
              <CFormInput type="password" id="password" required />
              <CFormFeedback valid>Correcto!</CFormFeedback>
            </CCol>
          </>
        )}

        <CCol md={4} className="cFormChecked">
          <CFormCheck
            id="flexCheckDefault"
            label="Confirmo que no soy un robot"
            required
          />
          <CFormFeedback invalid>Debes aplicar el tilde.</CFormFeedback>
        </CCol>
        <CCol md={12} className="buttonContainer">
          <CButton color="warning" size="lg" type="submit">
            {registered ? "Inicia Sesión" : "Registrate"}
          </CButton>
        </CCol>
        {errorMsg ? (
          <CCol xl={5}>
            <CAlert className="errorMsg" color="danger">
              {errorMsg}
            </CAlert>
          </CCol>
        ) : (
          <></>
        )}
      </CForm>
      <CCol md={12} className="buttonContainer">
        <CButton
          color="success"
          size="lg"
          onClick={() => setRegistered(!registered)}
        >
          {registered
            ? "¿No tenes cuenta? Registrate"
            : "¿Tenes tu cuenta? Inicia Sesion"}
        </CButton>
      </CCol>
    </div>
  );
};

export default SignUpMail;

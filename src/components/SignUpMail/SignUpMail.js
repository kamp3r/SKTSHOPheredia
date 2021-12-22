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
} from "@coreui/react";
import { UserContext } from "../UserContext/UserContext";

const SignUpMail = () => {
  const {
    registered,
    setRegistered,
    validated,
    handleSign,
    handleLogGoogle,
    errorMsg,
  } = useContext(UserContext);

  return (
    <div className="signInUpLog">
      <h1>{registered ? "Inicia Sesion" : "Registrate acá"}</h1>
      <CForm
        className="row g-3 needs-validation LogForm"
        noValidate
        validated={validated}
        onSubmit={handleSign}
      >
        <CCol md={5}>
          <CFormLabel htmlFor="name">Email</CFormLabel>
          <CFormInput type="email" id="email" required size="lg" />
          <CFormFeedback valid>Correcto!</CFormFeedback>
        </CCol>

        <CCol md={5}>
          <CFormLabel htmlFor="email">Contraseña</CFormLabel>
          <CFormInput type="password" id="password" required />
          <CFormFeedback valid>Correcto!</CFormFeedback>
        </CCol>

        <CCol md={4}>
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
          color="warning"
          size="lg"
          type="submit"
          onClick={() => handleLogGoogle()}
        >
          <i className="fab fa-google"></i> Acceder con Google!
        </CButton>
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

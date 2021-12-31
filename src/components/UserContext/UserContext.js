import React, { useState, createContext, useEffect } from "react";
import { auth, db } from "../../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
} from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";
export const UserContext = createContext();

const valoresIniciales = {
  nombre: "",
  apellido: "",
  email: "",
  direccion: "",
  ciudad: "",
  cp: "",
  provincia: "",
};

export const UserProvider = ({ children }) => {
  const [userReg, setUserReg] = useState(valoresIniciales);
  const [validated, setValidated] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [userMail, setUserMail] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (logFirebase) => {
      if (logFirebase) {
        setUsuarioGlobal(logFirebase);
        setUserMail(logFirebase.email);
        if (!logFirebase.emailVerified) {
          sendEmailVerification(logFirebase)
        }
      } else {
        setUsuarioGlobal(null);
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserReg({ ...userReg, [name]: value });
  };

  async function handleSign(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setValidated(true);
      if (!registered) {
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            alert(
              `Creaste tu usuario correctamente con tu email ${user.email}`
            );
            setUserMail(email);
            const nuevoUser = {
              buyerInfo: userReg,
              Date: Timestamp.fromDate(new Date()),
            };
            const userRef = collection(db, "users");
            addDoc(userRef, nuevoUser);
          })
          .catch((error) => {
            if (error.code === "auth/email-already-in-use") {
              setErrorMsg("Tu email ya se encuentra registrado");
            }
            if (error.code === "auth/weak-password") {
              setErrorMsg("Tu contraseña debe tener al menos 6 caracteres");
            }
            if (error.code === "auth/invalid-email") {
              setErrorMsg("Utiliza un email valido");
            }
          });
      } else {
        signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
          if (error.code === "auth/user-not-found") {
            setErrorMsg("Email no encontrado, registrate!");
          }
          if (error.code === "auth/wrong-password") {
            setErrorMsg("Contraseña incorrecta!");
          }
        });
      }
    }
  }

  return (
    <UserContext.Provider
      value={{
        handleSign,
        registered,
        validated,
        setRegistered,
        usuarioGlobal,
        handleSignOut,
        errorMsg,
        userMail,
        changeHandler,
        userReg,
        setUserReg,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

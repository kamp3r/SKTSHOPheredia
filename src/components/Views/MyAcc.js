import React, { useContext } from "react";
import SignUpMail from "../SignUpMail/SignUpMail";
import MyAccount from "../MyAccount/MyAccount";
import { UserContext } from "../UserContext/UserContext";

const MyAcc = () => {
  const { usuarioGlobal, userMail } = useContext(UserContext);

  return usuarioGlobal ? <MyAccount userMail={userMail} /> : <SignUpMail />;
};

export default MyAcc;

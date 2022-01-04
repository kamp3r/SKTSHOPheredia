import React,{useContext} from "react";
import Checkout from "../Checkout/Checkout";
import { UserContext } from "../UserContext/UserContext";

const CheckoutView = () => {
  const {userMail } = useContext(UserContext)
  return (
    <div>
      <Checkout mailUser={userMail}/>
    </div>
  );
};

export default CheckoutView;

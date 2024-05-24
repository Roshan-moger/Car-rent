import React from "react";

import masterCard from "../../Assets/all-images/master-card.jpg";
import paypal from "../../Assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  return (
    <>
      <div className="payment">
        <label  className="d-flex align-items-center gap-2">
          <input type="radio" name='payment' /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label  className="d-flex align-items-center gap-2">
          <input type="radio" name='payment' /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label  className="d-flex align-items-center gap-2">
          <input type="radio" name='payment' /> Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label className="d-flex align-items-center gap-2">
          <input type="radio" name='payment'  /> Paypal
        </label>

        <img src={paypal} alt="" />
      </div>
      <div className="payment text-end mt-5">
        <button>Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;
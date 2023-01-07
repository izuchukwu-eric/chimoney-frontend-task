import React from "react";
import styles from  "./Subtotal.module.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
// import { useHistory } from "react-router-dom";

function Subtotal() {
  // const history = useHistory();
  // const [{ basket }, dispatch] = useStateValue();

  // const handleClick = () => {
  //   history("/MakePayment");
  // };

  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value: any) => (
          <>
            <p>
              Subtotal 8 items:
              <strong>{value}</strong>
            </p>
            <small className={styles.subtotal__gift}>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        // value={getBasketTotal(basket)}
        displayType={"text"}
        ThousandSeperator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

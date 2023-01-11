import React, { useEffect } from "react";
import styles from  "./Subtotal.module.css";
import CurrencyFormat from "react-currency-format";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../../redux/features/cartSlice";
import { AppDispatch } from "../../redux/store";



function Subtotal() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, totalCount, totalAmount } = useSelector(
    (state: any) => state.cart
  );

  useEffect(() => {
    dispatch(getCartTotal(items));
  }, [items, dispatch]);
  // const handleClick = () => {
  //   history("/MakePayment");
  // };
  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value: any) => (
          <>
            <p>
              Subtotal {items?.length} items:
              <strong>{value}</strong>
            </p>
            <small className={styles.subtotal__gift}>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalAmount}
        displayType={"text"}
        ThousandSeperator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

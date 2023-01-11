import React, { useEffect } from "react";
import styles from "./Payment.module.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Link from "next/link"
import Footer from "../Footer/Footer";
import CurrencyFormat from "react-currency-format";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getCartTotal } from "../../redux/features/cartSlice";

function Payment() {
    const dispatch = useDispatch<AppDispatch>();
    const { items, totalAmount } = useSelector(
        (state: any) => state.cart
    );

    useEffect(() => {
        dispatch(getCartTotal(items));
    }, [items, dispatch]);

  return (
    <div className={styles.payment}>
      <div className={styles.payment__container}>
        <h1>
          Checkout (<Link href={"/checkout"}>{items?.length} items</Link>)
        </h1>
        {/* Payment section - delivery address */}
        <div className={styles.payment__section}>
          <div className={styles.payment__title}>
            <h3>Delivery Address</h3>
          </div>
          <div className={styles.payment__address}>
            <p>Hello Guest</p>
            <p>
              <input type="text" placeholder="address" required />
            </p>
          </div>
        </div>

        {/* Payment section - Review items */}
        <div className={styles.payment__section}>
          <div className={styles.payment__title}>
            <h3>Review items and delivery 🚚</h3>
          </div>
          <div className={styles.payment__items}>
            {items.map((item: any) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                price={item.price}
                rating={item.rating}
                title={item.name}
                amount={item.amount}
              />
            ))}
          </div>
        </div>

        {/* Payment section - Payment methord */}
        <div className={styles.payment__section}>
          <div className={styles.payment__title}>
            <h3>Payment Method</h3>
          </div>
          <div className={styles.payment__details}>
            <form>
              <div className={styles.payment__pricecontainer}>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={totalAmount}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"$"}
                />
                <button>
                  <span>Buy Now</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer footerStyle="main-footer" />
    </div>
  );
}

export default Payment;
import React from "react";
import styles from "./Checkout.module.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";


function Checkout() {
  const { items } = useSelector(
    (state: any) => state.cart
  );

  return (
    <div>
      <div className={styles.checkout}>
        <div className={styles.checkout__left}>
          <img
            className={styles.checkout__ad}
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          />

          <div>
            <h3>Hello, Guest</h3>
            <h2 className={styles.checkout__title}>Your Shopping Basket</h2>

            {items.map((item: any) => (
              <CheckoutProduct
                id={item?.id}
                image={item?.image}
                price={item?.price}
                rating={item?.rating}
                title={item?.name}
                amount={item?.amount}
                key={item?.id}
              />
            ))}
          </div>
        </div>
        <div className={styles.checkout__right}>
          <Subtotal />
        </div>
      </div>
      <Footer footerStyle="main-footer" />
    </div>
  );
}

export default Checkout;

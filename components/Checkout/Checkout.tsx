import React from "react";
import styles from "./Checkout.module.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import Subtotal from "../Subtotal/Subtotal";
import Footer from "../Footer/Footer";

function Checkout() {
  // const [{ basket, user }, dispatch] = useStateValue();

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

            {/* {basket.map((item: any) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                price={item.price}
                rating={item.rating}
                title={item.title}
              />
            ))} */}
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

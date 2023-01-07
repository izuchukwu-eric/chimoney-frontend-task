import React from "react";
import styles from "./CheckoutProduct.module.css";
import { useStateValue } from "../StateProvider";

interface Props {
  id: any
  image: any
  title: any
  price: any
  rating: any
}

function CheckoutProduct({ id, image, title, price, rating }: Props) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //   remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className={styles.checkoutProduct}>
      <img className={styles.checkoutProduct__image} src={image} />

      <div className={styles.checkoutProduct__info}>
        <p className={styles.checkoutProduct__title}>{title}</p>
        <p className={styles.checkoutProduct__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.checkoutProduct__rating}>
          {Array(rating)
            //@ts-ignore
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

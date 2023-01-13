import React from "react";
import styles from "./CheckoutProduct.module.css";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { remove, decrease, increase } from "../../redux/features/cartSlice";
import { toast } from "react-toastify";
import PlusIcon from "@heroicons/react/outline/PlusIcon";
import MinusIcon from "@heroicons/react/outline/MinusIcon";


interface Props {
  id: string
  image: string
  title: string
  price: number
  rating: number
  amount: number
}

function CheckoutProduct({ id, image, title, price, rating, amount }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const removeFromBasket = () => {
    dispatch(
      remove(id)
    );
    toast.success("Product has been removed from cart");
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
              <p key={i}>🌟</p>
            ))}
        </div>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={styles.decreaseButton}
            onClick={() => dispatch(decrease(id))}
          >
            <MinusIcon
              style={{ height: "20px", width: "20px", padding: 2 }}
              aria-hidden="true"
            />
          </button>
          <span style={{ paddingLeft: 5, paddingRight: 5 }}>{amount}</span>
          <button
            type="button"
            className={styles.increaseButton}
            onClick={() => dispatch(increase(id))}
          >
            <PlusIcon
              style={{ height: "20px", width: "20px", padding: 2 }}
              aria-hidden="true"
            />
          </button>
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

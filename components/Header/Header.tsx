import React from "react";
import styles from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Link  from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";


function Header() {
  const { items } = useSelector(
    (state: any) => state.cart
  );

  return (
    <div className={styles.header}>
      <Link href={"/"}>
        <Image 
          alt="logo"
          width={50}
          height={50}
          className={styles.header__logo} 
          src={require("../../assest/amazon.png")} 
        />
      </Link>
      <div className={styles.header__search}>
        <input className={styles.header__searchInput} type="text" />
        <SearchIcon className={styles.header__seachIcon} />
      </div>
      <div className={styles.header__nav}>
        <div className={styles.header__option}>
          <span className={styles.header__optionLineOne}>Returns</span>
          <span className={styles.header__optionLineTwo}>& Orders</span>
        </div>
        <div className={styles.header__option}>
          <span className={styles.header__optionLineOne}>Your</span>
          <span className={styles.header__optionLineTwo}>Prime</span>
        </div>
        <Link href={"/checkout"}>
          <div className={styles.header__optionBasket}>
            <ShoppingBasketIcon />
            <span className={styles.header__optionLineTwo}>
              {items?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

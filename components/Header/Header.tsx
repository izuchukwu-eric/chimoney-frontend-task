import React from "react";
import styles from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Link  from "next/link";
import { useStateValue } from "../StateProvider";
import Image from "next/image";

function Header() {
  // const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className={styles.header}>
      <Link href={"/"}>
        <Image 
          alt="logo"
          width={500}
          height={500} 
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
              {/* {basket?.length} */}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

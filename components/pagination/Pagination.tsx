import React from 'react'
import styles from "./Pagination.module.css"

interface Props {
    totalProducts: any,
    productPerPage: any,
    setCurrentPage: any
    currentPage: any
}
function Pagination({ totalProducts, productPerPage, setCurrentPage, currentPage  }: Props) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalProducts/productPerPage); i++) {
        pages.push(i)
    }
  return (
    <div className={styles.pagination}>
        {
            pages.map((page, index) => {
                return (
                    <button className={page === currentPage ? styles.pagination_button_active : styles.pagination_button} onClick={() => setCurrentPage(page)} key={index}>{page}</button>
                )
            })
        }
    </div>
  )
}

export default Pagination
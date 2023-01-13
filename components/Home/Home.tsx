import React, { useState, useEffect} from "react";
import  styles from "./Home.module.css";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";
import Pagination from "../pagination/Pagination";
import { PropagateLoader } from 'react-spinners'

const API_KEY = process.env.NEXT_PUBLIC_CHIMONEY_API || ""

function Home() {
  const router = useRouter();
  const [products, setProducts] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [productPerPage, setProductPerPage] = useState<number>(9)

  /**make request to chimoney api */
  useEffect(() => {
    const getData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': API_KEY
        }
      };

      const _products = await fetch('https://api.chimoney.io/v0.2/info/assets', options)
      .then(data => data.json())

      if(_products) {
        setProducts(_products?.data?.giftCardsRLD?.content)
      }
    }
    if(router.isReady){
      getData()
    }
  }, [])


  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex)

  return (
    <div>
      <div className={styles.home}>
        <div className={styles.home__container}>
          <img
            className={styles.home__image}
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />

          <div className={styles.loader}>
            {currentProducts?.length == 0 &&
              <PropagateLoader  color='white' size={30} />
            }
          </div>

          <div className={styles.home__row}>
            {currentProducts.map((item: any) => (
              <Product
                id={item?.productId}
                title={item?.name}
                price={29.99}
                image={item?.img}
                rating={5}
                key={item?.productId}
              />
            ))}
          </div>
            <Pagination totalProducts={products?.length} productPerPage={productPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
      </div>
      <Footer footerStyle="second-footer" />
    </div>
  );
}

export default Home;

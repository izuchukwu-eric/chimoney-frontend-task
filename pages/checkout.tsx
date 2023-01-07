import React from 'react'
import type { NextPage } from 'next'
import Checkout from '../components/Checkout/Checkout'
import Header from '../components/Header/Header'

const CheckoutPage: NextPage = () => {
  return (
    <div>
        <Header />
        <Checkout />
    </div>
  )
}

export default CheckoutPage
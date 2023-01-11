import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header/Header'
import Payment from '../components/Payment/payment'

const PaymentPage: NextPage = () => {
  return (
    <div>
        <Header />
        <Payment />
    </div>
  )
}

export default PaymentPage
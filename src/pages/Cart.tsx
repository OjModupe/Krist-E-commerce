// import React from 'react'
import LeftProduct from '../components/CartComponents.tsx/LeftProducts'
import TotalPayment from '../components/CartComponents.tsx/TotalPayment'

const Cart = () => {
  return (
    <div className="flex px-5 py-3">
      <LeftProduct/>
      <TotalPayment/>
    </div>
  )
}

export default Cart

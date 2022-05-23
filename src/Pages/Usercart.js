import React from 'react'
import { EmptyCart, MainCart } from '../Components/Cart'
import { useGlobalCart } from '../Contexts/Usercart'
const Usercart = () => {
  const { cart } = useGlobalCart()
  return (
    <div className='main-cart-page'>
      {cart.length === 0 ? <EmptyCart /> : <MainCart />}
    </div>
  )
}

export default Usercart

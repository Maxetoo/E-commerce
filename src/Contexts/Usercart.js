import React, { useContext, useReducer, useEffect } from 'react'
import { cartReducer } from '../Reducers/Usercart'
import { useGlobalProducts } from './Products'
const CartContext = React.createContext()

const addCartToStorage = () => {
  const addCart = localStorage.getItem('addCart')
  if (addCart) {
    return JSON.parse(localStorage.getItem('addCart'))
  } else {
    return []
  }
}

const initialCart = {
  cartProducts: [],
  cartDetails: {
    activeColor: 0,
    activeSize: 0,
    quantity: 1,
  },
  cart: addCartToStorage(),
  subtotal: 0,
  shippingTotal: 0,
  cartTotal: 0,
  test: 0,
}

const AppCartContext = ({ children }) => {
  const [cartValue, dispatch] = useReducer(cartReducer, initialCart)
  const { products } = useGlobalProducts()

  useEffect(() => {
    dispatch({ type: 'GET-CART-PRODUCTS', payload: products })
  }, [products])

  const changeColor = (index) => {
    dispatch({ type: 'CHANGE-COLOR', payload: index })
  }

  const changeSize = (index) => {
    dispatch({ type: 'CHANGE-SIZE', payload: index })
  }

  const getQuantityValue = (value) => {
    dispatch({ type: 'GET-QUANTITY-VALUE', payload: value })
  }

  const addToCart = ({
    id,
    name,
    image,
    price,
    shipping,
    size,
    colors,
    stock,
  }) => {
    dispatch({
      type: 'ADD-TO-CART',
      payload: { id, name, image, price, shipping, size, colors, stock },
    })
  }

  const deleteCartItem = (id) => {
    dispatch({ type: 'DELETE-CART-ITEM', payload: id })
  }

  const increaseAmount = (id) => {
    dispatch({ type: 'INCREASE-AMOUNT', payload: id })
  }

  const reduceAmount = (id) => {
    dispatch({ type: 'REDUCE-AMOUNT', payload: id })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR-CART' })
  }

  useEffect(() => {
    dispatch({ type: 'SHIPPING-TOTAL' })
  }, [cartValue.cart])

  useEffect(() => {
    dispatch({ type: 'CART-SUBTOTAL' })
  }, [cartValue.cart])

  useEffect(() => {
    dispatch({ type: 'CART-TOTAL' })
  }, [cartValue.subtotal, cartValue.shippingTotal])

  useEffect(() => {
    localStorage.setItem('addCart', JSON.stringify(cartValue.cart))
  }, [cartValue.cart])

  return (
    <CartContext.Provider
      value={{
        ...cartValue,
        addToCart,
        changeColor,
        changeSize,
        getQuantityValue,
        deleteCartItem,
        increaseAmount,
        reduceAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useGlobalCart = () => {
  return useContext(CartContext)
}

export { AppCartContext }

import axios from 'axios'
import React, { useState, useReducer, useContext, useEffect } from 'react'
import { productReducer } from '../Reducers/Products'
import { ECOMMERCE_DATA } from '../Services/Data'

const ProductContext = React.createContext()

const addWishlistToStorage = () => {
  const addWishlist = localStorage.getItem('addWishlist')
  if (addWishlist) {
    return JSON.parse(localStorage.getItem('addWishlist'))
  } else {
    return []
  }
}

const API_KEY = process.env.REACT_APP_ECOMMERCE_API_KEY
const URL = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}`

const initialProducts = {
  menuOpen: false,
  products: ECOMMERCE_DATA,
  featuredProducts: [],
  addedWishList: false,
  wishList: addWishlistToStorage(),
  currentRates: [],
  selectedRate: {
    code: 'NGN',
    rate: 1,
    icon: 'N',
  },
  conversionRate: 1,
}

const ProductsContext = ({ children }) => {
  const [value, dispatch] = useReducer(productReducer, initialProducts)
  const [loading, setLoading] = useState(false)
  const openMenu = () => {
    dispatch({ type: 'OPEN-MENU' })
  }

  const closeMenu = () => {
    dispatch({ type: 'CLOSE-MENU' })
  }

  useEffect(() => {
    dispatch({ type: 'FEATURED-PRODUCTS' })
  }, [])

  const addToWishlist = (id) => {
    dispatch({ type: 'ADD-WISHLIST', payload: id })
  }

  const removeWishList = (id) => {
    dispatch({ type: 'REMOVE-WISHLIST', payload: id })
  }

  const fetchCurrency = async () => {
    setLoading(true)
    try {
      const resp = await axios.get(URL)
      const rates = await resp.data
      dispatch({ type: 'ALL-RATES', payload: rates })
      setLoading(false)
    } catch (error) {
      setLoading(true)
    }
  }

  useEffect(() => {
    fetchCurrency()
  }, [])

  const pickRate = (code, icon) => {
    dispatch({ type: 'SELECT-RATE', payload: { code, icon } })
  }

  useEffect(() => {
    if (loading) {
      dispatch({ type: 'SET-DEFAULT-ERROR-RATE' })
    }
  }, [loading])

  useEffect(() => {
    localStorage.setItem('addWishlist', JSON.stringify(value.wishList))
  }, [value.wishList])

  // https://api.currencyapi.com/v3/latest?apikey=ObRIunaYiiehp8i1lWN7pzUwcCoWI2ZuoQJlZN8z

  return (
    <ProductContext.Provider
      value={{
        ...value,
        openMenu,
        closeMenu,
        addToWishlist,
        removeWishList,
        loading,
        pickRate,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useGlobalProducts = () => {
  return useContext(ProductContext)
}

export { ProductsContext }

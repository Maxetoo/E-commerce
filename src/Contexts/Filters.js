import React, { useContext, useReducer, useEffect, useState } from 'react'
import { filterProductReducer } from '../Reducers/Filter'
import { useGlobalProducts } from '../Contexts/Products'
const FilterContext = React.createContext()

const initialFilter = {
  categories: [],
  colors: [],
  filterProducts: [],
  filterResult: [],
  filterText: '',
  sort: '',
  filters: {
    category: 'All',
    color: 'All',
  },
}

const AppFilterContext = ({ children }) => {
  const { products } = useGlobalProducts()
  const [value, dispatch] = useReducer(filterProductReducer, initialFilter)

  useEffect(() => {
    dispatch({ type: 'FILL-CATEGORIES', payload: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: 'FILL-COLORS', payload: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: 'FILTER-PRODUCTS', payload: products })
  }, [products])

  const sortProductCategory = (id) => {
    dispatch({ type: 'SORT-CATEGORY', payload: id })
  }

  const sortProductColor = (id) => {
    dispatch({ type: 'SORT-COLORS', payload: id })
  }

  const searchFilter = (text) => {
    dispatch({ type: 'SEARCH-FILTER', payload: text })
  }

  const sortProducts = (sortValue) => {
    dispatch({ type: 'SORT-ORDER', payload: sortValue })
  }
  return (
    <FilterContext.Provider
      value={{
        ...value,
        sortProductCategory,
        sortProductColor,
        searchFilter,
        sortProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}

export { AppFilterContext }

import React from 'react'
import { ProductFilter, Categories, MainProducts } from '../Components/Product'

const Products = () => {
  return (
    <section className='main-product-page'>
      <ProductFilter />
      <Categories />
      <MainProducts />
    </section>
  )
}

export default Products

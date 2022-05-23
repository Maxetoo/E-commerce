import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  HomePage,
  ProductPage,
  ErrorPage,
  AboutPage,
  UserCartPage,
  SingleProduct,
  WishList,
  Settings,
  Checkout,
} from './Pages/index'
import { HomeHeader, MenuPage } from './Components/Main'

const App = () => {
  return (
    <main className='main-app section'>
      <HomeHeader />
      <MenuPage />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/cart' element={<UserCartPage />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </main>
  )
}

export default App

import React from 'react'
import {
  AdvertHeader,
  HeaderImg,
  DiscountSection,
  FeaturedProducts,
  GoalsSection,
  ContactSection,
  Footer,
} from '../Components/Home'
import Scroller from '../Components/Main/Scroll'

const Home = () => {
  return (
    <section className='main-home-section'>
      <AdvertHeader />
      <HeaderImg />
      <DiscountSection />
      <Scroller />
      <FeaturedProducts />
      <GoalsSection />
      <ContactSection />
      <Footer />
    </section>
  )
}

export default Home

import React from 'react'
import { EmptyList, WishItems } from '../Components/Wishlist'
import { useGlobalProducts } from '../Contexts/Products'

const Wishlist = () => {
  const { wishList } = useGlobalProducts()
  return (
    <div className='wish-list-section'>
      {wishList.length === 0 ? <EmptyList /> : <WishItems />}
    </div>
  )
}

export default Wishlist

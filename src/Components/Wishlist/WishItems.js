import React from 'react'
import styled from 'styled-components'
import { useGlobalProducts } from '../../Contexts/Products'
import LikedItem from './LikedItem'
import { Link } from 'react-router-dom'
import { useGlobalCart } from '../../Contexts/Usercart'

const WishItems = () => {
  const { wishList } = useGlobalProducts()
  const { addToCart } = useGlobalCart()

  return (
    <Wrapper>
      <div className='wish-list-container'>
        <div className='product-btn'>
          <Link to='/'>
            <button type='button' className='btn-back'>
              Back Home
            </button>
          </Link>
        </div>
        {wishList.length === 1 ? <h1>Wishlist</h1> : <h1>Wishlists</h1>}
        <div className='list-container'>
          {wishList.map((value) => {
            return (
              <LikedItem
                {...value}
                key={value.id}
                addToCart={() => addToCart({ ...value })}
              />
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .product-btn {
    display: none;
  }
  .wish-list-container {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
  }

  h1 {
    text-decoration: underline;
  }

  .list-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    h1 {
      margin-top: 2rem;
    }
    .list-container {
      width: 90%;
    }

    .product-btn {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
    }

    .btn-back {
      width: 200px;
      height: 50px;
      cursor: pointer;
      border: solid 1px var(--black-color);
      color: var(--black-color);
      background: none;
      border-radius: 5px;
      font-size: 1em;
    }

    .btn-back:hover {
      color: var(--white-color);
      background: var(--black-color);
      transition: 0.5s all;
    }
  }
`

export default WishItems

import React from 'react'
import styled from 'styled-components'
import FeaturedItem from './FeaturedItem'
import { useGlobalProducts } from '../../Contexts/Products'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  const { featuredProducts } = useGlobalProducts()

  return (
    <Wrapper>
      <div className='featured-products-section'>
        <h1>Featured Products</h1>
        <div className='featured-products-cont'>
          {featuredProducts.map((items) => {
            return <FeaturedItem {...items} key={items.id} />
          })}
        </div>
        <Link to='/products'>
          <button type='button' className='more-btn'>
            MORE PRODUCTS
          </button>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  a {
    text-decoration: none;
  }
  a > .more-btn {
    height: 50px;
    width: 150px;
    display: grid;
    place-content: center;
    border-radius: 5px;
    cursor: pointer;
    background: none;
    color: var(--black-color);
    border: solid 1px var(--black-color);
  }

  .more-btn:hover {
    background: var(--black-color);
    color: var(--white-color);
    transition: 1s all;
  }
  @media only screen and (max-width: 600px) {
    .featured-products-section {
      width: 100vw;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.5rem;
      margin-top: 7rem;
      background: #f5f7f9;
    }

    h1 {
      font-size: 2em;
      margin-top: 1.5rem;
    }

    .featured-products-cont {
      display: grid;
      margin-top: 4rem;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
      width: 100%;
    }

    a > .more-btn {
      margin-top: 2rem;
    }
  }

  @media only screen and (min-width: 600px) {
    .featured-products-section {
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.7rem;
      margin-top: 8rem;
      background: #f5f7f9;
    }

    h1 {
      font-size: 2.2em;
      margin-top: 1.5rem;
    }

    .featured-products-cont {
      display: grid;
      margin-top: 4rem;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
      width: 100%;
    }
    a > .more-btn {
      margin-top: 2rem;
    }
  }

  @media only screen and (min-width: 768px) {
    .featured-products-section {
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.7rem;
      margin-top: 10rem;
      background: #f5f7f9;
    }

    h1 {
      font-size: 2.2em;
      margin-top: 2rem;
    }

    .featured-products-cont {
      display: grid;
      margin-top: 4rem;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
      width: 100%;
    }
  }

  @media only screen and (min-width: 992px) {
    h1 {
      margin-bottom: 4rem;
    }

    a > .more-btn {
      margin-top: -5rem;
      width: 300px;
    }
  }
`
export default FeaturedProducts

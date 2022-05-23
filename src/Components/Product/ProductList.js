import React from 'react'
import styled from 'styled-components'
import { standardNumber } from '../../Services/Helpers'
import { Link } from 'react-router-dom'
import { useGlobalProducts } from '../../Contexts/Products'

const ProductList = ({ id, price, name, image }) => {
  const { selectedRate, conversionRate } = useGlobalProducts()
  const { icon, rate } = selectedRate
  return (
    <Wrapper>
      <Link to={`/products/${id}`}>
        <div className='product-list-container'>
          <img src={image} alt={name} />
          <div className='product-list-details'>
            <h3 className='name'>{name}</h3>
            <p className='price'>
              {icon}
              {standardNumber((price * rate) / conversionRate)}
            </p>
          </div>
        </div>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  a {
    text-decoration: none;
    color: var(--black-color);
  }
  a > .product-list-container {
    height: 250px;
    width: 100%;
    background: var(--white-smoke);
    border-radius: 5px;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
  }

  .product-list-details {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0.5rem;
  }

  .price {
    margin-top: 0.5rem;
  }

  @media only screen and (min-width: 600px) {
    a > .product-list-container {
      height: 300px;
    }
  }

  @media only screen and (min-width: 768px) {
    .name {
      font-size: 1.4em;
    }
    .price {
      font-size: 1.4em;
    }
  }

  @media only screen and (min-width: 992px) {
    a > .product-list-container {
      height: 350px;
    }

    img {
      height: 80%;
    }

    .product-list-details {
      height: 20%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
  }
`

export default ProductList

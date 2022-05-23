import React from 'react'
import styled from 'styled-components'
import { standardNumber } from '../../Services/Helpers'

import { Link } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import { useGlobalProducts } from '../../Contexts/Products'
const LikedItem = ({
  id,
  name,
  image,
  price,
  shipping,
  size,
  colors,
  stock,
  addToCart,
}) => {
  const { removeWishList, selectedRate, conversionRate } = useGlobalProducts()
  const { icon, rate } = selectedRate
  return (
    <Wrapper>
      <div className='liked-item-container'>
        <Link to={`/products/${id}`}>
          <img src={image} alt={name} />
        </Link>
        <div className='item-details-container'>
          <h3 className='name'>{name}</h3>
          <p className='price'>
            {icon}
            {standardNumber((price * rate) / conversionRate)}
          </p>
        </div>
        <div className='btn-container'>
          <p
            className='del-icon'
            onClick={() => {
              removeWishList(id)
            }}
          >
            <MdDelete />
          </p>
          <div
            className='btn-addcart'
            onClick={() =>
              addToCart(id, name, image, price, shipping, size, colors, stock)
            }
          >
            Cart
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .liked-item-container {
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;
  }

  img {
    height: 100%;
    width: 120px;
    object-fit: cover;
    border-radius: 5px;
    background: var(--white-smoke);
  }

  .item-details-container {
    width: 150px;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin-left: 1rem;
  }

  .name {
    font-size: 1.2em;
    margin-bottom: 1rem;
  }

  .price {
    font-size: 1.1em;
  }

  .btn-container {
    height: 100%;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .del-icon {
    color: red;
    font-size: 1.3em;
    cursor: pointer;
  }

  .btn-addcart {
    color: var(--white-color);
    background: var(--black-color);
    width: 70px;
    height: 30px;
    display: grid;
    place-content: center;
    cursor: pointer;
    border-radius: 5px;
  }

  @media only screen and (min-width: 600px) {
    img {
      width: 150px;
    }

    .name {
      font-size: 1.4em;
    }

    .price {
      font-size: 1.2em;
    }

    .del-icon {
      font-size: 1.4em;
    }

    .btn-addcart {
      width: 80px;
      height: 40px;
    }
  }

  @media only screen and (min-width: 768px) {
    .item-details-container {
      margin-left: -3rem;
    }

    img {
      width: 250px;
      object-fit: cover;
    }
  }
`

export default LikedItem

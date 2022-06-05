import React, { useEffect } from 'react'
import styled from 'styled-components'
import { AiOutlineShopping } from 'react-icons/ai'
import { useGlobalCart } from '../../Contexts/Usercart'
import { Link } from 'react-router-dom'

const AddCart = ({
  addToCart,
  id,
  name,
  image,
  price,
  shipping,
  size,
  colors,
  stock,
}) => {
  const { cart } = useGlobalCart()

  return (
    <Wrapper>
      <div className='add-cart-section'>
        <div className='number-items'>
          <button
            type='submit'
            onClick={() =>
              addToCart(id, name, image, price, shipping, size, colors, stock)
            }
          >
            Add To Cart
          </button>
          <div className='cart-container'>
            <Link to='/cart'>
              <p className='cart-icon'>
                <AiOutlineShopping />
              </p>
              <div className='cart-items'>{cart.length}</div>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .add-cart-section {
    margin-top: 1.5rem;
    width: 100%;
  }

  .number-items {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  button {
    height: 100%;
    width: 120px;
    color: white;
    background: black;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
  }

  button:active {
    opacity: 0.6;
  }

  .cart-container {
    height: 100%;
    margin-left: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 0.4rem;
  }

  a {
    text-decoration: none;
    color: var(--black-color);
  }

  a > .cart-icon {
    margin-top: 0.5rem;
    font-size: 2.5em;
  }
  .cart-items {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    background: var(--black-color);
    color: white;
    font-size: 0.6em;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    font-weight: bold;
  }

  @media only screen and (min-width: 768px) {
    .number-items {
      height: 50px;
    }
  }
`

export default AddCart

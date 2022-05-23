import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <Wrapper>
      <div className='empty-cart'>
        <h1>Cart Empty</h1>
        <p>Click the cart button to collect your desired products.</p>
        <p>Fill up your bag</p>
        <Link to='/products'>
          <button type='button' className='cart-empty-btn'>
            Explore
          </button>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .empty-cart {
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    text-align: center;
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1em;
  }

  .cart-empty-btn {
    width: 200px;
    height: 40px;
    margin-top: 2rem;
    border-radius: 5px;
    cursor: pointer;
    color: var(--white-color);
    background: var(--black-color);
  }

  .cart-empty-btn:hover {
    color: var(--black-color);
    background: var(--white-color);
    transition: 1s all;
  }
`

export default EmptyCart

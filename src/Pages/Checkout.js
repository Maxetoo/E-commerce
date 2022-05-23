import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useGlobalCart } from '../Contexts/Usercart'

const Checkout = () => {
  const { clearCart } = useGlobalCart()
  return (
    <Wrapper>
      <div className='checkout-section'>
        <h1>Your order has been placed</h1>
        <p>
          Your order with refrence number #{new Date().getTime().toString()} has
          been placed with success, tap on the button to continue.
        </p>
        <Link to='/'>
          <button type='button' onClick={clearCart}>
            Continue
          </button>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .checkout-section {
    width: 100vw;
    height: 90vh;
    position: absolute;
    top: 0;
    z-index: 100;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    text-align: center;
  }

  p {
    margin-top: 0.5rem;
  }

  a > button {
    margin-top: 1.5rem;
    width: 200px;
    height: 40px;
    background: var(--black-color);
    color: var(--white-color);
    border-radius: 5px;
    border: solid 1.5px var(--black-color);
    cursor: pointer;
  }

  button:hover {
    background: var(--white-color);
    color: var(--black-color);
    transition: 1s all;
  }
`

export default Checkout

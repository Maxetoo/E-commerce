import React from 'react'
import CartList from './CartList'
import styled from 'styled-components'
import { useGlobalCart } from '../../Contexts/Usercart'
import { useGlobalProducts } from '../../Contexts/Products'
import { standardNumber } from '../../Services/Helpers'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

const MainCart = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  const { cart, clearCart, subtotal, shippingTotal, cartTotal } =
    useGlobalCart()
  const { selectedRate, conversionRate } = useGlobalProducts()
  const { icon, rate, code } = selectedRate
  return (
    <Wrapper>
      <div className='main-cart-section'>
        <div className='product-btn'>
          <Link to='/'>
            <button type='button' className='btn-back'>
              Back Home
            </button>
          </Link>
        </div>
        <div className='header'>
          <h1>Cart</h1>
        </div>
        <div className='cart-list-container'>
          {cart.map((value) => {
            return <CartList {...value} key={value.id} />
          })}
        </div>
        <div className='btn-container'>
          <Link to='/products'>
            <button type='button' className='continue-btn btn'>
              Continue Shopping
            </button>
          </Link>
          <button type='button' className='clear-btn btn' onClick={clearCart}>
            Clear Cart
          </button>
        </div>
        <div className='summary-main-container'>
          <div className='summary-container'>
            <div className='subtotal'>
              <h3>Subtotal</h3>
              <span className='sub-summary'>
                <h3>
                  {icon}
                  {standardNumber((subtotal * rate) / conversionRate)}
                </h3>
                <p>{code}</p>
              </span>
            </div>
            <div className='subtotal'>
              <h3>Shipping</h3>
              <span className='sub-summary'>
                <h3>
                  {icon}
                  {standardNumber((shippingTotal * rate) / conversionRate)}
                </h3>
                <p>{code}</p>
              </span>
            </div>
            <div className='subtotal'>
              <h3>Cart Total</h3>
              <span className='sub-summary'>
                <p className='cart-total'>
                  ({cart.length} {cart.length === 1 ? 'item' : 'items'})
                </p>
                <h3>
                  {icon}
                  {standardNumber((cartTotal * rate) / conversionRate)}
                </h3>
                <p>{code}</p>
              </span>
            </div>
          </div>
          {isAuthenticated ? (
            <Link to='/checkout'>
              <button type='button' className='checkout-btn'>
                Proceed To Checkout
              </button>
            </Link>
          ) : (
            <button
              type='button'
              className='checkout-btn'
              onClick={loginWithRedirect}
            >
              Signup/Login
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .main-cart-section {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
  }

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  h1 {
    text-decoration: underline;
  }

  .cart-list-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .btn-container {
    margin-top: 3.5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  a > .continue-btn {
    width: 150px;
    height: 40px;
    border-radius: 5px;
    background: var(--black-color);
    color: var(--white-color);
    cursor: pointer;
    border: solid 1px var(--black-color);
  }

  .clear-btn {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    background: var(--black-color);
    color: var(--white-color);
    cursor: pointer;
    border: solid 1px var(--black-color);
  }

  .summary-main-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
  }

  .summary-container {
    width: 90%;
    height: 200px;
    border: solid 1px var(--black-color);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 1px 1px 5px var(--shadow);
  }

  .subtotal {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 1px var(--shadow);
    padding-bottom: 0.5rem;
  }

  .sub-summary {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .cart-total {
    margin-right: 0.5rem;
  }

  .sub-summary h3 {
    margin-right: 0.5rem;
  }

  a > .checkout-btn {
    margin-top: 1.5rem;
    width: 300px;
    height: 40px;
    background: var(--black-color);
    color: var(--white-color);
    cursor: pointer;
    border: solid 1px var(--black-color);
  }

  .checkout-btn {
    margin-top: 1.5rem;
    width: 90%;
    height: 40px;
    background: var(--black-color);
    color: var(--white-color);
    cursor: pointer;
    border: solid 1px var(--black-color);
  }

  .product-btn {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 2em;
    }
    .btn-container {
      padding: 2rem;
    }
    a > .btn {
      height: 50px;
      width: 200px;
    }
    .btn {
      height: 50px;
      width: 150px;
    }

    .summary-main-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
    }

    .summary-container {
      width: 500px;
    }

    a > .checkout-btn {
      width: 500px;
    }

    .checkout-btn {
      width: 500px;
    }

    .product-btn {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-end;
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

export default MainCart

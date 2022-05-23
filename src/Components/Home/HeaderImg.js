import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
import ImageHeader from '../../Assets/Images/Header-Img.jpg'
import {
  AiOutlineShopping,
  AiOutlineUserAdd,
  AiOutlineUserDelete,
} from 'react-icons/ai'
import { IoIosMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'

import { useGlobalProducts } from '../../Contexts/Products'
import { useGlobalCart } from '../../Contexts/Usercart'
const HeaderImg = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0()
  const { openMenu } = useGlobalProducts()
  const { cart } = useGlobalCart()
  return (
    <Wrapper>
      <div className='header-image-body'>
        <img src={ImageHeader} alt='header-img' />
        <div className='image-overlay'>
          <div className='shopping-login-cont'>
            <span className='menu' onClick={openMenu}>
              <IoIosMenu />
            </span>
            {/* cart login start  */}

            <div className='cart-login-container'>
              <div className='cart-icon-container'>
                <Link to='/cart'>
                  <AiOutlineShopping />
                  <div className='cart-items'>{cart.length}</div>
                </Link>
              </div>
              {isAuthenticated ? (
                <span className='user-login' onClick={logout}>
                  <AiOutlineUserDelete />
                </span>
              ) : (
                <span className='user-login' onClick={loginWithRedirect}>
                  <AiOutlineUserAdd />
                </span>
              )}
            </div>

            {/* end  */}
          </div>
          <div className='image-overlay-texts'>
            <h1>BUY WHAT REALLY SUITS YOU</h1>
            <p>25% Off All Products</p>
            <Link to='/products'>
              <button type='button' className='header-img-btn'>
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media only screen and (min-width: 600px) {
    .shopping-login-cont {
      display: none;
    }
    .header-image-body {
      position: relative;
      width: 100%;
      height: 80vh;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .image-overlay {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      color: var(--white-color);
      padding: 2rem;
    }

    .image-overlay-texts {
      width: 70%;
      margin-top: 3rem;
    }
    h1 {
      opacity: 1;
      font-size: 3em;
    }

    p {
      margin-top: 2rem;
      font-size: 1.4em;
    }

    a > .header-img-btn {
      text-devoration: none;
      margin-top: 2rem;
      height: 50px;
      width: 200px;
      background: none;
      border: solid 1.5px var(--white-color);
      color: var(--white-color);
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.8em;
    }

    .header-img-btn:hover {
      background: var(--white-color);
      color: var(--black-color);
      transition: all 1s;
    }
  }

  @media only screen and (max-width: 600px) {
    .shopping-login-cont {
      display: none;
    }

    .header-image-body {
      position: relative;
      width: 100%;
      height: 80vh;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .image-overlay {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      color: var(--white-color);
      padding: 1rem;
    }

    .image-overlay-texts {
      width: 70%;
      margin-top: 3rem;
    }
    h1 {
      opacity: 1;
      font-size: 3em;
    }

    p {
      margin-top: 2rem;
      font-size: 1.4em;
    }

    a > .header-img-btn {
      margin-top: 2rem;
      height: 50px;
      width: 200px;
      background: none;
      border: solid 1.5px var(--white-color);
      color: var(--white-color);
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.8em;
    }

    .header-img-btn:hover {
      background: var(--white-color);
      color: var(--black-color);
      transition: all 1s;
    }
  }

  @media only screen and (min-width: 768px) {
    .cart-login-container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    a {
      text-decoration: none;
      color: var(--white-color);
    }

    .cart-icon-container {
      margin-right: 1rem;
      display: flex;
      flex-direction: row;
      position: relative;
      margin-bottom: 0.4rem;
    }

    .cart-items {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 10;
      background: var(--white-color);
      color: var(--black-color);
      font-size: 0.6em;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      display: grid;
      place-content: center;
      font-weight: bold;
    }

    .shopping-login-cont {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-size: 1.8em;
      cursor: pointer;
      margin-top: -1rem;
    }

    .header-image-body {
      position: relative;
      width: 100%;
      height: 100vh;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .image-overlay {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      color: var(--white-color);
      padding: 3rem;
    }

    .image-overlay-texts {
      width: 70%;
      margin-top: 3rem;
    }
    h1 {
      opacity: 1;
      font-size: 3em;
    }

    p {
      margin-top: 2rem;
      font-size: 1.4em;
    }

    a > .header-img-btn {
      margin-top: 2rem;
      height: 50px;
      width: 200px;
      background: none;
      border: solid 1.5px var(--white-color);
      color: var(--white-color);
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.8em;
    }

    .header-img-btn:hover {
      background: var(--white-color);
      color: var(--black-color);
      transition: all 1s;
    }
  }

  @media only screen and (min-width: 992px) {
    .shopping-login-cont {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-size: 2em;
      cursor: pointer;
      margin-top: -1rem;
    }

    .header-image-body {
      position: relative;
      width: 100%;
      height: 100vh;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .image-overlay {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      color: var(--white-color);
      padding: 3rem;
    }

    .image-overlay-texts {
      width: 70%;
      margin-top: 3rem;
    }
    h1 {
      opacity: 1;
      font-size: 3.5em;
      font-weight: bold;
    }

    p {
      margin-top: 2rem;
      font-size: 1.7em;
    }

    a > .header-img-btn {
      margin-top: 4rem;
      height: 50px;
      width: 200px;
      background: none;
      border: solid 1.5px var(--white-color);
      color: var(--white-color);
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.8em;
    }

    .header-img-btn:hover {
      background: var(--white-color);
      color: var(--black-color);
      transition: all 1s;
    }
  }
`

export default HeaderImg

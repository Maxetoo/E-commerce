import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
import { links } from '../../Services/Links'

import { useGlobalProducts } from '../../Contexts/Products'
import { useGlobalCart } from '../../Contexts/Usercart'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import {
  AiOutlineShopping,
  AiOutlineUserAdd,
  AiOutlineUserDelete,
} from 'react-icons/ai'

const MenuPage = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0()
  const { menuOpen, closeMenu } = useGlobalProducts()
  const { cart } = useGlobalCart()

  return (
    <Wrapper
      className={`menu-page-container ${
        menuOpen ? 'active-menu-page' : 'inactive-menu-page'
      }`}
    >
      <div className='menu-page'>
        <div className='menu-close-container'>
          <span className='close-btn' onClick={closeMenu}>
            <IoMdClose />
          </span>
        </div>
        <div className='list-item-container'>
          <ul>
            {links.map((lists) => {
              const { id, title, url, icon } = lists
              return (
                <Link to={url} key={id} onClick={closeMenu}>
                  <li key={id}>
                    <p className='icon'>{icon}</p>
                    <p className='title'>{title}</p>
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
        <div className='login-profile-container'>
          <div className='cart-container'>
            <Link to='/cart' onClick={closeMenu}>
              <AiOutlineShopping />
              <div className='cart-items'>{cart.length}</div>
            </Link>
          </div>
          {isAuthenticated ? (
            <span
              className='user-profile'
              onClick={() => {
                closeMenu()
                logout()
              }}
            >
              <AiOutlineUserDelete />
            </span>
          ) : (
            <span
              className='user-profile'
              onClick={() => {
                closeMenu()
                loginWithRedirect()
              }}
            >
              <AiOutlineUserAdd />
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .menu-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    overflow: hidden;
  }

  .menu-close-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1rem;
  }

  .close-btn {
    font-size: 2.5em;
    cursor: pointer;
    color: #e00505;
    margin-top: -1rem;
  }

  .list-item-container {
    width: 100%;
    margin: 1.5rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: var(--black-color);
  }
  li {
    margin-top: 1rem;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    font-size: 1.5em;
    border-bottom: solid 1px #c9c7c7;
    cursor: pointer;
    font-weight: bold;
  }

  li:hover {
    color: var(--black-color);
    background: #f5f5f5;
  }

  p {
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .title {
    margin: 1rem;
  }

  .login-profile-container {
    width: 100%;
    margin: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    font-size: 2em;
  }

  .cart-container {
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

  .user-profile {
    cursor: pointer;
  }
  @media only screen and (min-width: 768px) {
    .login-profile-container {
      display: none;
    }
  }
`

export default MenuPage

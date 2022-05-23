import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

const NotLogged = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Wrapper>
      <div className='not-logged-page'>
        <div className='product-btn'>
          <Link to='/'>
            <button type='button' className='btn-back'>
              Back Home
            </button>
          </Link>
        </div>
        <p>You're not logged in, can't access this page</p>
        <button type='button' onClick={() => loginWithRedirect()}>
          Click To Signup/Login
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .not-logged-page {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    text-align: center;
  }

  p {
    font-size: 2em;
  }

  button {
    width: 200px;
    height: 50px;
    background: var(--black-color);
    color: var(--white-color);
    border: solid 1.5px var(--black-color);
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    margin-top: 2rem;
  }

  button:hover {
    background: var(--white-color);
    color: var(--black-color);
    transition: 1s all;
  }

  .product-btn {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .product-btn {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      margin-top: -5rem;
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

export default NotLogged

import React, { useState } from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
import { ratesData } from '../../Services/Helpers'
import RateLists from './RateLists'
import { FiChevronRight } from 'react-icons/fi'
import { GrCurrency } from 'react-icons/gr'
import { AiOutlineUserAdd, AiOutlineUserDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useGlobalProducts } from '../../Contexts/Products'
import { MdExpandMore } from 'react-icons/md'
import DefaultImage from '../../Assets/Images/DEFAULT-IMG1.jpg'

const SettingsPage = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()
  const { selectedRate } = useGlobalProducts()
  const { code } = selectedRate
  const [ratesOpen, setRatesOpen] = useState(false)

  //TOGGLE RATES OPEN AND CLOSE
  const handleRatesToggle = () => {
    if (ratesOpen) {
      setRatesOpen(false)
    } else {
      setRatesOpen(true)
    }
  }

  return (
    <Wrapper>
      {isAuthenticated && (
        <>
          {/* SETTINGS OVERALL PAGE  */}
          <div className='settings-page'>
            {/* PROFILE SECTION  */}

            <article className='profile'>
              <h1>Profile</h1>
              <div className='settings-profile'>
                <img
                  src={user.picture ? user.picture : DefaultImage}
                  alt={user.name}
                />
                <h3>{user.name}</h3>
                <p className='email'>{user.email}</p>
              </div>
            </article>

            {/* PREFRENCE SECTION  */}
            <article className='prefrence'>
              <h1>Options</h1>
              <div className='prefrence-list-container'>
                {/* CURRENCY LIST CONTAINER  */}
                <div className='list-container'>
                  <div className='list' onClick={handleRatesToggle}>
                    <span className='list-left'>
                      <GrCurrency />
                      <h4>Currency</h4>
                    </span>
                    <span className='list-right'>
                      <p className='currency'>{code}</p>
                      {ratesOpen ? <MdExpandMore /> : <FiChevronRight />}
                    </span>
                  </div>

                  {/* RATES OPTION LISTS  */}
                  {ratesOpen && (
                    <div className='list-expand'>
                      {ratesData.map((value) => {
                        return <RateLists {...value} key={value.id} />
                      })}
                    </div>
                  )}
                </div>
                {/* END  */}

                {/* LOGOUT LIST CONTAINER  */}
                <div className='list-container'>
                  <div className='list'>
                    {isAuthenticated ? (
                      <span
                        className='list-left'
                        onClick={() => {
                          logout()
                        }}
                      >
                        <AiOutlineUserDelete />
                        <h4>Logout</h4>
                      </span>
                    ) : (
                      <span
                        className='list-left'
                        onClick={() => {
                          loginWithRedirect()
                        }}
                      >
                        <AiOutlineUserAdd />
                        <h4>Login</h4>
                      </span>
                    )}
                  </div>
                </div>
                {/* START  */}
                <div className='product-btn'>
                  <Link to='/'>
                    <button type='button' className='btn-back'>
                      Back Home
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .settings-page {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    background: var(--white-smoke);
  }

  .product-btn {
    display: none;
  }

  .profile {
    margin-top: -1rem;
  }

  .settings-profile {
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: var(--white-color);
    padding: 1rem;
    margin-top 1rem;
    border-radius: 5px;
  }

  img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 50%;
    background: var(--white-color);
    cursor: pointer;
  }

  h3 {
    font-size: 1.2em;
  }

  .email {
    margin-top: -1rem;
  }

  h1 {
    font-size: 1.7em;
    margin-top:1rem;
  }

  .prefrence-list-container {
    margin-top: 1rem;
  }

  .list-container {
    background: var(--white-color);
    width: 100%;
    // height: 60px;
    margin-top: 1rem;
  }

  .list {
    width: 100%;
    height: 60px;
    padding: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 1.3em;
    cursor: pointer;
  }

  .list-expand {
    width: 100%;
    height: auto;
    padding: 1rem;
    border-top: solid 1px var(--black-color);
  }

  .list-left {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .list-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }

  h4 {
    margin-left: 1rem;
  }

  .currency {
    margin-right: 1rem;
  }

  @media only screen and (min-width: 768px) {
    .settings-page {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 3rem;
    }

    .profile {
      display: flex;
      flex-direction: column;
    }

    .prefrence {
      display: flex;
      flex-direction: column;
    }

    .settings-profile {
      height: 400px;
      width: 40vw;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    img {
      height: 180px;
      width: 180px;
    object-fit: cover;
    margin-top: -2rem;
    }

    h3 {
    font-size: 1.6em;
      margin-top: 1.5rem;
  }

  .email {
      margin-top: 1.5rem;
    font-size: 1.3em;

  }

  .list-container {
     display: flex;
      flex-direction: column;
      width: 35vw;
  }

   .product-btn {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      margin-top: 2rem;
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

export default SettingsPage

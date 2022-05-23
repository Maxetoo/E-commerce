import React from 'react'
import styled from 'styled-components'
import { IoIosMenu } from 'react-icons/io'
import { useGlobalProducts } from '../../Contexts/Products'

const Homeheader = () => {
  const { openMenu } = useGlobalProducts()

  return (
    <Wrapper className='home-header-section'>
      <div className='main-home-header'>
        <div className='header-menu-container' onClick={openMenu}>
          <p className='icon'>
            <IoIosMenu />
          </p>
          <span className='menu-title'>Menu</span>
        </div>
        <div className='header-title'>
          <h2>Feathder</h2>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
 @media only screen and (min-width: 992px) {
      .main-home-header {
        display: none;
      }
    }


 @media only screen and (min-width: 768px) {
      .main-home-header {
        display: none;
      }
    }


@media only screen and (min-width: 600px) {
  .main-home-header {
      width: 100%;
      height: 70px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem;
      border-bottom: solid 1px var(--black-color);
    }

    .header-menu-container {
      border-right: solid 0.2px var(--black-color);
      height: 70px;
      width: 30%;
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.5em;
      margin-top: 0.5rem;
    }

    .menu-title {
      font-size: 1.4em;
      margin-left: 0.5rem;
    }

    .header-title {
      height: 100%;
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6em;
    }
}


  @media only screen and (max-width: 600px) {
    .main-home-header {
      width: 100%;
      height: 70px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem;
      border-bottom: solid 1px var(--black-color);
    }

    .header-menu-container {
      border-right: solid 0.2px var(--black-color);
      height: 70px;
      width: 30%;
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.5em;
      margin-top: 0.5rem;
    }

    .menu-title {
      font-size: 1.4em;
      margin-left: 0.5rem;
    }

    .header-title {
      height: 100%;
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5em;
    }
  }


  }
`

export default Homeheader

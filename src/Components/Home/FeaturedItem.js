import React, { useState } from 'react'
import styled from 'styled-components'
import { standardNumber } from '../../Services/Helpers'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { useGlobalProducts } from '../../Contexts/Products'

const FeaturedItem = ({ image, name, price, id }) => {
  const { selectedRate, conversionRate } = useGlobalProducts()
  const { icon, rate } = selectedRate
  const [activeOverlay, setActiveOverlay] = useState(false)

  const handleOverlay = () => {
    if (activeOverlay) {
      setActiveOverlay(false)
    } else {
      setActiveOverlay(true)
    }
  }
  return (
    <Wrapper>
      <div className='featured-item'>
        <img src={image} alt={name} onClick={handleOverlay} />
        <div
          className={`image-overlay ${
            activeOverlay ? 'active-img-overlay' : 'inactive'
          }`}
          onClick={() => setActiveOverlay(false)}
        >
          <Link
            to={`/products/${id}`}
            className={`btn ${activeOverlay ? 'active-icon' : 'inactive'}`}
          >
            <AiOutlineSearch />
          </Link>
        </div>
        <div className='item-details'>
          <h3>{name}</h3>
          <p>
            {icon}
            {standardNumber((price * rate) / conversionRate)}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .featured-item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    border-radius: 5px;
    background: var(--white-smoke);
    cursor: pointer;
  }
  .item-details {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  h3 {
    font-size: 1.1em;
  }

  p {
    font-size: 1.1em;
  }

  .image-overlay {
    position: absolute;
    width: 0%;
    height: 80%;
    display: grid;
    place-content: center;
    z-index: 10;
    background: black;
    opacity: 0.65;
    border-radius: 5px;
    transition: 0.5s all;
  }

  .btn {
    color: white;
    font-size: 2.5em;
    opacity: 0;
  }

  .active-img-overlay {
    width: 100%;
  }

  .inactive {
    opacity: 0;
  }

  .active-icon {
    opacity: 1;
  }

  @media only screen and (min-width: 992px) {
    img {
      width: 100%;
      height: 60%;
      object-fit: cover;
      border-radius: 5px;
      background: var(--white-smoke);
      cursor: pointer;
    }

    .item-details {
      padding: 1rem;
      margin-top: -1rem;
    }
    h3 {
      font-size: 1.5em;
    }

    p {
      font-size: 1.3em;
    }

    .image-overlay {
      height: 60%;
      border-radius: 5px;
      transition: 0.5s all;
    }
  }
`

export default FeaturedItem

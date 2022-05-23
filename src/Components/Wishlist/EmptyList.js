import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const EmptyList = () => {
  return (
    <Wrapper>
      <div className='empty-wishlist'>
        <h1>Wishlists Empty</h1>
        <p>
          Click the heart mark on the product to start saving your favourite
          items.
        </p>
        <p>Would you like to collect wishes</p>
        <Link to='/products'>
          <button type='button' className='empty-btn'>
            Explore
          </button>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .empty-wishlist {
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

  .empty-btn {
    width: 200px;
    height: 40px;
    margin-top: 2rem;
    border-radius: 5px;
    cursor: pointer;
    color: var(--white-color);
    background: var(--black-color);
  }

  .empty-btn:hover {
    color: var(--black-color);
    background: var(--white-color);
    transition: 1s all;
  }
`

export default EmptyList

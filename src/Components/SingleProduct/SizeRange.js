import React, { useState } from 'react'
import styled from 'styled-components'
import { useGlobalCart } from '../../Contexts/Usercart'

const SizeRange = ({ size }) => {
  const { changeSize, cartDetails } = useGlobalCart()
  const { activeSize } = cartDetails

  return (
    <Wrapper>
      <div className='size-section'>
        <h3 className='size-header'>Select Size</h3>
        <div className='size-container'>
          {size.map((value, index) => {
            return (
              <div
                key={index}
                className={`item-size ${
                  activeSize === index ? 'active-sizeColor' : null
                }`}
                onClick={() => changeSize(index)}
              >
                {value}
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .size-section {
    margin-top: 1rem;
  }

  .size-header {
    font-size: 1.6em;
  }
  .size-container {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-left: -1rem;
  }

  .item-size {
    width: 50px;
    height: 50px;
    margin-left: 1rem;
    border-radius: 5px;
    cursor: pointer;
    border: solid 1px var(--black-color);
    color: var(--black-color);
    display: grid;
    place-content: center;
    font-size: 1.3em;
  }

  .active-sizeColor {
    background: var(--black-color);
    color: var(--white-color);
    transition: 0.5s all;
  }

  @media only screen and (min-width: 768px) {
    .size-section {
      margin-top: 2rem;
    }
    .size-header {
      font-size: 2em;
    }
  }
`

export default SizeRange

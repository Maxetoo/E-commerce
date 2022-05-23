import React, { useState } from 'react'
import styled from 'styled-components'
import { useGlobalCart } from '../../Contexts/Usercart'

const PickColors = ({ colors }) => {
  const { changeColor, cartDetails } = useGlobalCart()
  const { activeColor } = cartDetails

  return (
    <Wrapper>
      <div className='select-color-section'>
        <h3 className='color-header'>Select Color</h3>
        <div className='color-section'>
          {colors.map((color, index) => {
            return (
              <div
                key={index}
                className={`color ${
                  activeColor === index ? 'active-color' : null
                }`}
                style={{ background: color }}
                onClick={() => changeColor(index)}
              ></div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .select-color-section {
    margin-top: 1rem;
  }

  .color-section {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-left: -1rem;
  }

  .color-header {
    font-size: 1.6em;
  }

  .color {
    width: 40px;
    height: 40px;
    margin-left: 1rem;
    border-radius: 5px;
    opacity: 0.4;
    cursor: pointer;
  }

  .active-color {
    border: solid 2px var(--black-color);
    opacity: 0.8;
  }

  @media only screen and (min-width: 768px) {
    .color-header {
      font-size: 2em;
    }

    .color-section {
      margin-top: 1.5em;
    }
  }
`

export default PickColors

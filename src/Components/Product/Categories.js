import React from 'react'
import styled from 'styled-components'
import { setArray } from '../../Services/Helpers'
import { useFilterContext } from '../../Contexts/Filters'

const Categories = () => {
  const { categories, colors, sortProductCategory, sortProductColor, filters } =
    useFilterContext()
  const { category, color } = filters
  const categoryItems = setArray(categories)
  const categoryColors = setArray(colors)

  return (
    <Wrapper>
      <div className='category-section'>
        <h3>By Categories</h3>
        <div className='scroll-menu-container'>
          {categoryItems.map((value, index) => {
            return (
              <div
                className={`category-list ${
                  category === value ? 'active' : null
                }`}
                onClick={() => sortProductCategory(value)}
                key={index}
              >
                {value.charAt(0).toUpperCase() +
                  value.split('').slice(1).join('')}
              </div>
            )
          })}
        </div>
        <h3 className='colors-header'>By Colors</h3>
        <div className='colors-container'>
          {categoryColors.map((value, index) => {
            if (value === 'All') {
              return (
                <div
                  className={`color-all ${
                    color === value ? 'color-all-active' : null
                  }`}
                  key={index}
                  onClick={() => sortProductColor(value)}
                >
                  {value}
                </div>
              )
            }
            return (
              <div
                onClick={() => sortProductColor(value)}
                style={{ background: value }}
                className={`colors-list ${
                  color === value ? 'colors-list-active' : null
                }`}
                key={index + 1}
              ></div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .category-section {
    margin-top: 2rem;
    width: 100%;
  }

  .scroll-menu-container {
    margin-top: 1rem;
    overflow: auto;
    white-space: nowrap;
    margin-left: -1rem;
    padding-bottom: 0.5rem;
  }

  .category-list {
    display: inline-block;
    text-align: center;
    padding: 0.8rem;
    background: var(--white-smoke);
    margin-left: 1rem;
    border-radius: 10px;
    width: 100px;
    font-weight: 600;
    cursor: pointer;
  }

  .colors-header {
    margin-top: 1rem;
  }

  .colors-container {
    margin-top: 1rem;
    height: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .colors-container > div {
    width: 30px;
    height: 100%;
    border: solid 1px var(--black-color);
    margin-left: 1rem;
    border-radius: 10px;
    cursor: pointer;
    display: grid;
    place-content: center;
  }

  .colors-list {
    opacity: 0.5;
  }

  .colors-list-active {
    opacity: 1;
    border: solid 1.5px var(--black-color);
  }

  .active {
    background: var(--searchBg);
    color: var(--white-color);
  }

  .color-all-active {
    background: var(--searchBg);
    color: var(--white-color);
  }

  @media only screen and (min-width: 600px) {
    .colors-container {
      height: 35px;
    }
    .colors-container > div {
      width: 35px;
    }
  }

  @media only screen and (min-width: 768px) {
    h3 {
      font-size: 1.5em;
    }
  }
`

export default Categories

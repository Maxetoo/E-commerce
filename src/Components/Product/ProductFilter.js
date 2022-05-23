import React from 'react'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import { useFilterContext } from '../../Contexts/Filters'
import { Link } from 'react-router-dom'

const ProductFilter = () => {
  const { searchFilter, filterText, sortProducts, sort } = useFilterContext()
  return (
    <Wrapper>
      <div className='product-filter-section'>
        <div className='product-btn'>
          <Link to='/'>
            <button type='button' className='btn-back'>
              Back Home
            </button>
          </Link>
        </div>
        <div className='sort-section-container'>
          <div className='sort-section'>
            <FiSearch />
            <div className='search-input'>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type='text'
                  placeholder='search for product'
                  className='search'
                  onChange={(e) => searchFilter(e.target.value)}
                  value={filterText}
                />
              </form>
            </div>
          </div>
          <select
            className='sort-container'
            value={sort}
            onChange={(e) => sortProducts(e.target.value)}
          >
            <option value='' disabled selected>
              Sort
            </option>
            <option value='a-z'>(A-Z)</option>
            <option value='z-a'>(Z-A)</option>
          </select>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .product-filter-section {
    width: 100%;
  }

  .sort-section-container {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2em;
  }

  .sort-section {
    height: 100%;
    width: 75%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: black;
    color: white;
    border-radius: 10px;
    padding: 1rem;
    background: var(--searchBg);
  }

  .search {
    margin-left: 1rem;
    color: white;
    border: none;
    outline: none;
    width: 80%;
    background: var(--searchBg);
  }

  .sort-container {
    height: 100%;
    width: 20%;
    display: grid;
    place-content: center;
    border-radius: 10px;
    cursor: pointer;
    background: var(--white-color);
    color: var(--black-color);
  }

  .product-btn {
    display: none;
  }

  @media only screen and (min-width: 600px) {
    .sort-section-container {
      height: 60px;
    }

    .sort-container {
      height: 90%;
      width: 20%;
    }
  }

  @media only screen and (min-width: 768px) {
    .sort-section-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }

    .sort-container {
      width: 10%;
      padding: 0.5rem;
      height: 90%;
      margin-left: 1.5rem;
      background: var(--white-color);
      color: var(--black-color);
    }

    .product-btn {
      display: block;
      margin-bottom: 2rem;
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

export default ProductFilter

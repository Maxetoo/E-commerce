import React from 'react'
import styled from 'styled-components'
import ProductList from './ProductList'
import { useFilterContext } from '../../Contexts/Filters'

const MainProducts = () => {
  const { filterResult } = useFilterContext()
  return (
    <Wrapper>
      <div className='main-products'>
        <div className='main-products-header'>
          <h3>Products</h3>
          <p>{filterResult.length} Found</p>
        </div>
        {filterResult.length === 0 ? (
          <div className='no-search'>
            <h3>No Product Found!</h3>
          </div>
        ) : (
          <div className='main-products-list'>
            {filterResult.map((value) => {
              return <ProductList {...value} key={value.id} />
            })}
          </div>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .main-products {
    margin-top: 2rem;
    width: 100%;
  }

  .main-products-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .main-products-list {
    width: 100%;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }

  .no-search {
    width: 100vw;
    display: grid;
    place-content: center;
    margin-top: 1rem;
  }

  @media only screen and (min-width: 768px) {
    h3 {
      font-size: 1.5em;
    }
    p {
      font-size: 1.5em;
    }

    .main-products-list {
      width: 100%;
      margin-top: 3rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
    }
  }
`

export default MainProducts

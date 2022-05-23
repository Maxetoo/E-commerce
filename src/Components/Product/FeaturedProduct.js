import React from 'react'
import styled from 'styled-components'

const FeaturedProduct = () => {
  return (
    <Wrapper>
      <div className='featured-product'>
        <div className='featured-product-container'></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .featured-product {
    width: 100%;
    margin-top: 2rem;
  }

  .featured-product-container {
    width: 100%;
    height: 150px;
    background: var(--white-smoke);
    border-radius: 10px;
  }

  @media only screen and (min-width: 600px) {
    .featured-product-container {
      height: 200px;
    }
  }

  @media only screen and (min-width: 768px) {
    .featured-product-container {
      display: none;
    }
  }

  @media only screen and (min-width: 992px) {
    .featured-product-container {
      height: 300px;
    }
  }
`

export default FeaturedProduct

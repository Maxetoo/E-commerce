import React from 'react'
import styled from 'styled-components'
import { standardNumber } from '../../Services/Helpers'
import { useGlobalProducts } from '../../Contexts/Products'
import { useGlobalCart } from '../../Contexts/Usercart'
const ProductDetails = ({ stock, company, shipping, price }) => {
  const { selectedRate, conversionRate } = useGlobalProducts()
  const { icon, rate } = selectedRate
  const { getQuantityValue } = useGlobalCart()
  const numberOptions = (option) => {
    const optionsArray = []
    for (let i = 1; i <= option; i++) {
      optionsArray.push(i)
    }
    return optionsArray
  }
  return (
    <Wrapper>
      <div className='product-details-section'>
        <h3 className='details-header'>Details</h3>
        <div className='pro-details-container'>
          <span className='details'>
            <h5>In Stock</h5>
            <hr /> :<p>{stock}</p>
          </span>
          <span className='details'>
            <h5>Brand</h5>
            <hr />: <p>{company}</p>
          </span>
          <span className='details'>
            <h5>Free Shipping</h5>
            <hr /> :<p>{shipping ? 'Yes' : 'No'}</p>
          </span>
          <span className='details'>
            <h5>Quantity</h5>
            <hr /> :
            <select onChange={(e) => getQuantityValue(e.target.value)}>
              {numberOptions(stock).map((value, index) => {
                return (
                  <option value={value} key={index}>
                    {value}
                  </option>
                )
              })}
            </select>
          </span>
          <span className='details'>
            <h5>Price</h5>
            <hr /> :
            <h4 className='price'>
              {icon}
              {standardNumber((price * rate) / conversionRate)}
            </h4>
          </span>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .product-details-section {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .details-header {
    font-size: 1.6em;
  }

  .pro-details-container {
    margin-top: 0.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 1.4em;
  }

  .details {
    display: flex;
    width: 70%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    // border-bottom: solid 1px var(--shadow);
    margin-top: 0.2rem;
  }

  h5 {
    font-weight: 600;
    color: var(--details);
  }

  p {
    margin-left: 2rem;
  }

  .price {
    margin-left: 2rem;
  }

  select {
    width: 50px;
    height: 60%;
    text-align: center;
    font-size: 0.8em;
    font-weight: 400;
    color: black;
    border-radius: 5px;
    border: solid 0.5px var(--shadow);
    cursor: pointer;
    outline: solid 0.5px black;
    margin-left: 2rem;
  }

  select:focus {
    border: solid 0.5px black;
  }

  option {
    font-weight: 400;
  }

  @media only screen and (min-width: 768px) {
    .product-details-section {
      margin-top: 2rem;
    }

    .details-header {
      font-size: 2em;
    }

    .pro-details-container {
      font-size: 1.6em;
    }
  }
`

export default ProductDetails

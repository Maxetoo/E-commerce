import React from 'react'
import styled from 'styled-components'
import { useGlobalProducts } from '../../Contexts/Products'

const RateLists = ({ icon, code, name }) => {
  const { pickRate } = useGlobalProducts()
  return (
    <Wrapper>
      <div
        className='rates-list-container'
        onClick={() => pickRate(code, icon)}
      >
        <div className='rates-details'>
          <h3>{icon}</h3>
          <h3 className='rate-name'>{name}</h3>
        </div>
        <p>{code}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .rates-list-container {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .rates-details {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .rate-name {
    margin-left: 0.5rem;
  }
  @media only screen and (min-width: 768px) {
    .rates-details {
      font-size: 0.8em;
    }
  }
`

export default RateLists

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Wrapper>
      <div className='error-section'>
        <h1>404</h1>
        <p>Error, Page Not Found</p>
        <Link to='/'>
          <button type='button'>Back Home</button>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .error-section {
    width: 100vw;
    height: 90vh;
    position: absolute;
    top: 0;
    z-index: 200;
    background: var(--white-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 10em;
  }

  p {
    font-size: 2em;
  }

  a > button {
    width: 200px;
    height: 50px;
    background: var(--white-color);
    color: var(--black-color);
    border: solid 1px var(--black-color);
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    margin-top: 2rem;
  }

  button:hover {
    background: var(--black-color);
    color: var(--white-color);
    transition: 0.5s all;
  }
`

export default Error

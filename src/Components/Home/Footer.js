import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div className='footer'>
        <h3>Copyright © 2022 Feathder</h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .footer {
    width: 100vw;
    height: 70px;
    display: grid;
    place-content: center;
    background: #222;
    color: white;
  }
`

export default Footer

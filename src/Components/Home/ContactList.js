import React from 'react'
import styled from 'styled-components'

const ContactList = ({ url, icon, name }) => {
  return (
    <Wrapper>
      <div className='contact-list'>
        <a href={url}>
          <h3 className='icon'>{icon}</h3>
          <p className='name'>{name}</p>
        </a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .contact-list {
    display: flex;
    flex-direction: row;
    width: 100%;
    font-size: 1.3em;
    margin-top: 1rem;
    border-bottom: solid 1px var(--shadow);
    padding: 0.7rem;
  }

  a {
    text-decoration: none;
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 30px;
    color: var(--black-color);
  }

  .icon {
    margin-top: 0.3rem;
    color: black;
  }

  .name {
    margin-left: 0.5rem;
    font-size: 1.2em;
  }
`

export default ContactList

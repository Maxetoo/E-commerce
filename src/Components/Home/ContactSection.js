import React from 'react'
import styled from 'styled-components'
import ContactList from './ContactList'
import { contactData } from '../../Services/Links'

const ContactSection = () => {
  return (
    <Wrapper>
      <div className='contact-section'>
        <h1>Follow Us On</h1>
        <div className='contact-details-cont'>
          <div className='contact-list-container'>
            {contactData.map((value) => {
              return <ContactList {...value} key={value.id} />
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .contact-section {
    width: 100vw;
    padding: 2.5rem;
    margin-top: 5rem;
    background: #f5f7f9;
  }

  h1 {
    font-size: 2em;
    margin-top: 0.5rem;
  }
  .contact-details-cont {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
  }

  .contact-list-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
    margin-right: 2rem;
  }
`
export default ContactSection

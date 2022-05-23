import React from 'react'
import styled from 'styled-components'

const GoalsList = ({ icon, title }) => {
  return (
    <Wrapper>
      <div className='goals-details'>
        <p className='icon'>{icon}</p>
        <h1>{title}</h1>
        <p className='details'>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .goals-details {
    height: 250px;
    width: 100%;
    border-radius: 5px;
    background: var(--white-smoke);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    box-shadow: 1px 3px 5px var(--shadow);
  }

  .icon {
    font-size: 2.5em;
  }

  h1 {
    margin-top: 1rem;
  }

  .details {
    text-align: center;
    margin-top: 1rem;
  }

  @media only screen and (min-width: 992px) {
    .goals-details {
      height: 300px;
    }

    .icon {
      font-size: 3em;
    }
    h1 {
      margin-top: 1.5rem;
    }

    .details {
      margin-top: 3rem;
      font-size: 1.2em;
    }
  }
`

export default GoalsList

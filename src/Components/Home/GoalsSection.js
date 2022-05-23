import React from 'react'
import styled from 'styled-components'
import { goalsData } from '../../Services/Links'
import GoalsList from './GoalsList'

const GoalsSection = () => {
  return (
    <Wrapper>
      <div className='goals-section'>
        <div className='goals-section-details'>
          <h1>Come Own Your Style</h1>
          <p>
            We ensure we provide you with the best services always. ipsum dolor
            sit amet, We ensure your needs are met properly always
          </p>
          <div className='goals-descriptions'>
            {goalsData.map((value) => {
              return <GoalsList {...value} key={value.id} />
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .goals-section {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6rem;
    padding: 1.5rem;
  }

  .goals-section-details {
    width: 95%;
  }

  h1 {
    font-size: 2em;
  }

  p {
    margin-top: 1rem;
    font-size: 1.2em;
    text-align: start;
  }

  .goals-descriptions {
    display: grid;
    margin-top: 4rem;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    width: 100%;
  }

  .list {
    background: black;
    height: 250px;
    width: 100%;
    border-radius: 5px;
  }

  @media only screen and (min-width: 992px) {
    .goals-descriptions {
      display: grid;
      margin-top: 4rem;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
      width: 100%;
    }
  }
`

export default GoalsSection

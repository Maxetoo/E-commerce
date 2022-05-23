import React from 'react'
import styled from 'styled-components'
import AboutImage from '../Assets/Images/about-img.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Wrapper>
      <div className='about-section'>
        <h1>Our Story</h1>
        <div className='about-details'>
          <img src={AboutImage} alt='lady with style' />
          <p>
            We are group of creatives that always ensure the best products are
            being given to every constomer and we are really excited for you
            being part of this great and wonderful journey thus far and want to
            assure everyone that the very best of our services will be in place
            Lorem ipsum dolor sit amet for all round people.
          </p>
        </div>
        <div className='btn-container'>
          <Link to='/'>
            <button type='button'>Back Home</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .about-section {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
  }

  .about-details {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  img {
    width: 100%;
    height: 400px;
    margin-top: 2rem;
    object-fit: cover;
    background: var(--white-smoke);
  }

  p {
    margin-top: 2rem;
    font-size: 1.3em;
    font-weight: 500;
  }
  @media only screen and (max-width: 600px) {
    .btn-container {
      display: none;
    }
  }

  @media only screen and (min-width: 600px) {
    .btn-container {
      display: none;
    }
  }

  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    .about-details {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    p {
      margin-left: 4rem;
    }

    .btn-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
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
    }

    button:hover {
      background: var(--black-color);
      color: var(--white-color);
      transition: 0.5s all;
    }
  }
`

export default About

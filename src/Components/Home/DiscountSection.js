import React from 'react'
import styled from 'styled-components'
import AdvertImage1 from '../../Assets/Images/Advert_Img1.jpg'
import AdvertImage2 from '../../Assets/Images/Advert_Img2.jpg'
import AdvertImage3 from '../../Assets/Images/Advert_Img3.jpg'
import { Link } from 'react-router-dom'

const DiscountSection = () => {
  // #f1f5f8
  return (
    <Wrapper>
      <div className='discount-section'>
        <div className='image-container'>
          <div className='image-overlay'>
            <div className='overlay-title'>
              <h1>15% Off Thrift Tops</h1>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <Link to='/products'>
              <button type='button'>BUY NOW</button>
            </Link>
          </div>
          <img src={AdvertImage1} alt='Man dancing' />
        </div>
        <div className='image-container'>
          <div className='image-overlay'>
            <div className='overlay-title'>
              <h1>Get The Best From Us</h1>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <Link to='/products'>
              <button type='button'>BUY NOW</button>
            </Link>
          </div>
          <img src={AdvertImage2} alt='Lady on shades' />
        </div>
        <div className='image-container'>
          <div className='image-overlay'>
            <div className='overlay-title'>
              <h1>Have Your Own Style</h1>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <Link to='/products'>
              <button type='button'>BUY NOW</button>
            </Link>
          </div>
          <img src={AdvertImage3} alt='Lady with style' />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media only screen and (max-width: 600px) {
    .discount-section {
      margin-top: 2rem;
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--white-color);
    }

    .image-container {
      width: 90%;
      height: 250px;
      position: relative;
      margin-top: 1.5rem;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      z-index: 10;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .overlay-title {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      margin-bottom: 1rem;
    }

    h1 {
      font-weight: bolder;
      font-size: 2em;
      color: white;
    }

    a {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }

    button {
      width: 80%;
      height: 40px;
      border: none;
      cursor: pointer;
    }

    button:hover {
      background: var(--black-color);
      color: var(--white-color);
      transition: all 0.5s;
    }
  }

  @media only screen and (min-width: 600px) {
    .discount-section {
      margin-top: 4rem;
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--white-color);
    }

    .image-container {
      width: 90%;
      height: 250px;
      position: relative;
      margin-top: 1.5rem;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      z-index: 10;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .overlay-title {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      margin-bottom: 1rem;
    }

    h1 {
      font-weight: bolder;
      font-size: 2.2em;
      color: white;
    }

    a {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }

    button {
      width: 80%;
      height: 40px;
      border: none;
      cursor: pointer;
    }

    button:hover {
      background: var(--black-color);
      color: var(--white-color);
      transition: all 0.5s;
    }
  }

  @media only screen and (min-width: 768px) {
    .discount-section {
      margin-top: 4rem;
      width: 100vw;
      display: flex;
      flex-direction: row;
      align-items: center;
      color: var(--white-color);
      padding: 1rem;
    }

    .image-container {
      width: 100%;
      height: 350px;
      position: relative;
      margin-top: 2rem;
      margin: 0.5rem;
    }
  }
`

export default DiscountSection

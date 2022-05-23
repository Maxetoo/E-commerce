import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'

const AdvertHeader = () => {
  const [currentText, setCurrentText] = useState(0)
  const advertTxt = useRef(null)
  const advertTexts = [
    'Feathder',
    '25% Off On First Deposit',
    'You Can Become Part Of Our Initiative',
    'Shop As You Like',
    'Discount ends in 2days',
  ]

  useEffect(() => {
    if (currentText) {
      gsap.from('.advert-texts', {
        opacity: 0,
        x: 20,
      })
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentText < advertTexts.length) {
        setCurrentText(currentText + 1)
      }
      if (currentText >= advertTexts.length - 1) {
        setCurrentText(0)
      }
    }, 5000)

    return () => clearInterval(timer)
  }, [currentText])

  return (
    <Wrapper>
      <div className='advert-header'>
        <p className='advert-texts' ref={advertTxt}>
          {advertTexts[currentText]}
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media only screen and (max-width: 600px) {
    .advert-header {
      display: none;
    }
  }
  @media only screen and (min-width: 600px) {
    .advert-header {
      display: none;
    }
  }
  @media only screen and (min-width: 768px) {
    .advert-header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background: var(--white-color);
      color: var(--black-color);
      height: 50px;
    }

    .advert-texts {
      opacity: 1;
      font-weight: 600;
    }
  }
`

export default AdvertHeader

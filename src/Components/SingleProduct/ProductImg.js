import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const ProductImg = ({ name, imageAll }) => {
  const [activeImg, setActiveImg] = useState(0)

  const changeImage = (index) => {
    // if (image === imageAll[0]) {
    //   setActiveImg(0)
    // } else {
    //   setActiveImg(index)
    // }
    setActiveImg(index)
  }
  useEffect(() => {
    console.log(name)
  }, [])
  return (
    <Wrapper>
      <div className='product-img-section'>
        <img src={imageAll[activeImg]} alt={name} className='main-img' />
        <div className='small-img-container'>
          {imageAll.map((value, index) => {
            return (
              <img
                key={index}
                src={value}
                alt={`${name}${index}`}
                className={`small-img ${
                  activeImg === index ? 'active-img' : null
                }`}
                onClick={() => changeImage(index)}
              />
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

// ProductImg.propTypes = {
//   imageAll: PropTypes.array.isRequired,
// }

const Wrapper = styled.div`
  .product-img-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
  }

  .main-img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 5px;
    transition: 0.5s all;
    background: var(--white-smoke);
  }

  .small-img-container {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 1rem;
  }

  .small-img {
    width: 100px;
    height: 100%;
    object-fit: cover;
    margin-right: 1rem;
    border-radius: 5px;
    cursor: pointer;
    background: var(--white-smoke);
  }

  .active-img {
    border: solid 2px var(--active-img);
  }

  @media only screen and (min-width: 768px) {
    .main-img {
      height: 500px;
      object-fit: cover;
    }

    .small-img-container {
      height: 100px;
    }

    .small-img {
      width: 200px;
      object-fit: cover;
    }
  }
`

export default ProductImg

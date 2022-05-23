import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { GiCheckMark } from 'react-icons/gi'

const AddWishList = ({ wishAdded }) => {
  const [displayAlert, setDisplayAlert] = useState(false)
  useEffect(() => {
    if (wishAdded) {
      setTimeout(() => {
        setDisplayAlert(false)
      }, 1000)
    } else {
      setDisplayAlert(false)
    }
  }, [wishAdded, displayAlert])

  useEffect(() => {
    if (wishAdded) {
      setDisplayAlert(true)
    }
  }, [wishAdded])

  return (
    <Wrapper>
      {displayAlert && (
        <div className='add-wishlist-section'>
          <GiCheckMark />
          <h4>Added To Wishlist!</h4>
        </div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .add-wishlist-section {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: var(--wishlistBg);
    color: green;
  }

  h4 {
    margin-left: 0.5rem;
  }
`

export default AddWishList

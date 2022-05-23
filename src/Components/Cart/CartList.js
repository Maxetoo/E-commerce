import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { standardNumber } from '../../Services/Helpers'
import { useGlobalProducts } from '../../Contexts/Products'
import { useGlobalCart } from '../../Contexts/Usercart'
import { Link } from 'react-router-dom'

// IoClose
// MdClose
const CartList = ({ id, name, image, price, size, color, quantity, stock }) => {
  const { selectedRate, conversionRate } = useGlobalProducts()
  const { icon, rate } = selectedRate
  const { deleteCartItem, increaseAmount, reduceAmount } = useGlobalCart()
  return (
    <Wrapper>
      <div className='cart-item-container'>
        <Link
          to={`/products/${Array.from(id)
            .slice(0, -(color + size).length)
            .join('')}`}
        >
          <img src={image} alt={name} />
        </Link>
        <div className='cart-item-details'>
          <h3 className='name'>{name}</h3>
          <p className='size'>Size: {size}</p>
          <div className='color' style={{ background: color }}></div>
          <h3 className='price'>
            {icon}
            {standardNumber((price * rate) / conversionRate)}
          </h3>
        </div>
        <div className='cart-controls'>
          <p className='close' onClick={() => deleteCartItem(id)}>
            <MdClose />
          </p>
          <div className='toggle-amount'>
            <span className='toggle reduce' onClick={() => reduceAmount(id)}>
              -
            </span>
            <span className='amount'>
              {quantity < 10 ? `0${quantity}` : quantity}
            </span>
            <span
              className='toggle increase'
              onClick={() => increaseAmount(id)}
            >
              +
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .cart-item-container {
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.5rem;
  }

  a > img {
    height: 120px;
    width: 120px;
    object-fit: cover;
    border-radius: 5px;
    background: var(--white-smoke);
  }

  .cart-item-details {
    height: 100%;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 2rem;
    text-align: center;
  }

  .color {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: solid 1px var(--black-color);
  }

  .cart-controls {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }

  .close {
    cursor: pointer;
  }

  .toggle-amount {
    width: 100px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    text-align: center;
    user-select: none;
  }

  .toggle {
    width: 25px;
    height: 25px;
    border: solid 1.5px var(--black-color);
    display: grid;
    place-content: center;
    border-radius: 50%;
    cursor: pointer;
  }

  .increase {
    background: var(--black-color);
    color: var(--white-color);
  }

  .reduce {
    margin-right: 0.3rem;
  }

  .amount {
    margin-right: 0.3rem;
  }

  @media only screen and (min-width: 600px) {
    a > img {
      width: 150px;
    }

    .close {
      font-size: 1.3em;
    }

    .amount {
      font-size: 1.3em;
    }

    .toggle {
      width: 30px;
      height: 30px;
    }
  }

  @media only screen and (min-width: 768px) {
    .cart-item-container {
      padding: 2rem;
      height: 150px;
    }
    a > img {
      width: 250px;
      height: 150px;
    }

    .cart-item-details {
      height: 150px;
      width: auto;
      margin-left: -5rem;
    }

    h3 {
      font-size: 1.5em;
    }

    .close {
      font-size: 1.4em;
    }

    .amount {
      font-size: 1.3em;
    }

    .cart-controls {
      height: 150px;
    }

    .toggle-amount {
      margin-right: -1rem;
    }
    .toggle {
      width: 35px;
      height: 35px;
    }
  }
`

export default CartList

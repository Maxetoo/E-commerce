import React, { useEffect, useState } from 'react'
import {
  ProductImg,
  PickColor,
  SizeRange,
  AddWishList,
  ProductDetails,
  AddCart,
} from '../Components/SingleProduct'
import { AiOutlineHeart, AiFillHeart, AiFillStar } from 'react-icons/ai'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useGlobalProducts } from '../Contexts/Products'
import { useGlobalCart } from '../Contexts/Usercart'
import { Link } from 'react-router-dom'

const SingleProduct = () => {
  const { products, addToWishlist, wishList, removeWishList } =
    useGlobalProducts()
  const [wishAdded, setWishAdded] = useState(false)
  const { id } = useParams()
  const [productItem, setProductItem] = useState([])
  const { addToCart } = useGlobalCart()

  useEffect(() => {
    const singleProduct = products.find((value) => value.id === id)
    setProductItem(singleProduct)
  }, [id, productItem])

  useEffect(() => {
    wishList.map((value) => {
      if (value.id === id) {
        if (value.wishList) {
          setWishAdded(true)
        } else {
          setWishAdded(false)
        }
      }
    })

    if (wishList.length === 0) {
      setWishAdded(false)
    }
  }, [wishList, productItem, wishAdded])

  const {
    name,
    rating,
    imageAll,
    description,
    colors,
    size,
    price,
    image,
    shipping,
  } = productItem

  useEffect(() => {
    // console.log(id, products, name, imageAll)
  }, [id, productItem])
  return (
    <Wrapper>
      <AddWishList wishAdded={wishAdded} />
      <div className='single-product-section'>
        <div className='product-btn'>
          <Link to='/products'>
            <button type='button' className='btn-back'>
              Back To Products
            </button>
          </Link>
        </div>
        <div className='heart-container'>
          <span className='heart'>
            {wishAdded ? (
              <p>
                <AiFillHeart
                  onClick={() => {
                    setWishAdded(false)
                    removeWishList(productItem.id)
                  }}
                />
              </p>
            ) : (
              <p onClick={() => addToWishlist(productItem.id)}>
                <AiOutlineHeart />
              </p>
            )}
          </span>
        </div>
        <div className='info-container'>
          <h2 className='product-name'>{name}</h2>
          <span className='rating'>
            <AiFillStar />
            <p className='rating-info'>({rating}+ ratings)</p>
          </span>
        </div>

        <ProductImg name={name} imageAll={[imageAll].flat()} />
        <div className='description-cont'>
          <h3 className='desc-header'>Description</h3>
          <p className='description'>{description}</p>
        </div>
        <PickColor colors={[colors].flat()} />
        <SizeRange size={[size].flat()} />
        <ProductDetails {...productItem} />
        <AddCart
          addToCart={() => addToCart({ ...productItem })}
          {...productItem}
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .single-product-section {
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  .product-btn {
    display: none;
  }
  .heart-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1.5em;
    cursor: pointer;
    margin-top: -0.2rem;
  }

  .info-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product-name {
    font-size: 2em;
  }

  .rating {
    display: flex;
    align-items: center;
  }

  .rating-info {
    margin-left: 0.3rem;
  }

  .description-cont {
    margin-top: 1.5rem;
  }

  .desc-header {
    font-size: 1.6em;
  }

  .description {
    font-size: 1.2em;
    margin-top: 1rem;
  }

  @media only screen and (max-width: 600px) {
  }

  @media only screen and (min-width: 768px) {
    .info-container {
      margin-top: -2.5rem;
    }
    h3 {
      font-size: 1.75em;
    }

    .rating {
      font-size: 1.2em;
      margin-right: 1rem;
    }
    .heart-container {
      font-size: 2em;
      padding: 1rem;
    }

    .desc-header {
      margin-top: 2rem;
      font-size: 2em;
    }

    .description {
      font-size: 1.4em;
    }

    .product-btn {
      display: block;
    }

    .btn-back {
      width: 200px;
      height: 50px;
      cursor: pointer;
      border: solid 1px var(--black-color);
      color: var(--black-color);
      background: none;
      border-radius: 5px;
      font-size: 1em;
    }

    .btn-back:hover {
      color: var(--white-color);
      background: var(--black-color);
      transition: 0.5s all;
    }
  }
`

export default SingleProduct

export const cartReducer = (state, action) => {
  if (action.type === 'GET-CART-PRODUCTS') {
    return {
      ...state,
      cartProducts: action.payload,
    }
  }

  if (action.type === 'CHANGE-COLOR') {
    return {
      ...state,
      cartDetails: {
        ...state.cartDetails,
        activeColor: action.payload,
      },
    }
  }

  if (action.type === 'CHANGE-SIZE') {
    return {
      ...state,
      cartDetails: {
        ...state.cartDetails,
        activeSize: action.payload,
      },
    }
  }

  if (action.type === 'GET-QUANTITY-VALUE') {
    return {
      ...state,
      cartDetails: {
        ...state.cartDetails,
        quantity: action.payload,
      },
    }
  }
  if (action.type === 'ADD-TO-CART') {
    const { id, name, image, price, shipping, size, colors, stock } =
      action.payload
    const { activeSize, activeColor, quantity } = state.cartDetails
    const testCart = state.cart.find(
      (value) => value.id === id + colors[activeColor] + size[activeSize]
    )

    if (testCart) {
      const checkCart = state.cart.map((value) => {
        if (value.id === id + colors[activeColor] + size[activeSize]) {
          let newAmount = parseInt(value.quantity) + parseInt(quantity)
          if (newAmount > stock) {
            newAmount = stock
          }

          return { ...value, quantity: newAmount }
        } else {
          return value
        }
      })
      return { ...state, cart: checkCart }
    } else {
      const addCart = {
        id: id + colors[activeColor] + size[activeSize],
        name,
        image,
        price,
        shipping,
        size: size[activeSize],
        color: colors[activeColor],
        quantity,
        stock,
      }
      return {
        ...state,
        cart: [...state.cart, addCart],
      }
    }
  }

  if (action.type === 'DELETE-CART-ITEM') {
    const newCartItem = state.cart.filter(
      (value) => value.id !== action.payload
    )
    return {
      ...state,
      cart: newCartItem,
    }
  }

  if (action.type === 'INCREASE-AMOUNT') {
    const checkCart = state.cart.map((value) => {
      if (value.id === action.payload) {
        let amount = value.quantity + 1
        if (amount > value.stock) {
          amount = value.stock
        }

        return {
          ...value,
          quantity: amount,
        }
      } else {
        return value
      }
    })
    return {
      ...state,
      cart: checkCart,
    }
  }

  if (action.type === 'REDUCE-AMOUNT') {
    const checkCart = state.cart.map((value) => {
      if (value.id === action.payload) {
        let amount = value.quantity - 1
        if (value.quantity === 1) {
          amount = 1
        }
        return {
          ...value,
          quantity: amount,
        }
      } else {
        return value
      }
    })
    return {
      ...state,
      cart: checkCart,
    }
  }

  if (action.type === 'CLEAR-CART') {
    return {
      ...state,
      cart: [],
    }
  }

  if (action.type === 'SHIPPING-TOTAL') {
    const getShippingItems = state.cart.filter((value) => !value.shipping)
    const getShippingTotal = getShippingItems.length * 450
    return {
      ...state,
      shippingTotal: getShippingTotal,
    }
  }

  if (action.type === 'CART-SUBTOTAL') {
    let cartSubTotal = state.cart.reduce((value, index) => {
      const { price, quantity } = index
      const amount = parseInt(quantity) * parseInt(price)
      value += parseInt(amount)
      return value
    }, 0)
    cartSubTotal = parseInt(cartSubTotal)
    return {
      ...state,
      subtotal: cartSubTotal,
    }
  }

  if (action.type === 'CART-TOTAL') {
    let allCartTotal = parseInt(state.subtotal) + parseInt(state.shippingTotal)
    allCartTotal = parseInt(allCartTotal)
    return {
      ...state,
      cartTotal: allCartTotal,
    }
  }
  return state
}

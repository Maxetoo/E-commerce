export const productReducer = (state, action) => {
  if (action.type === 'OPEN-MENU') {
    return {
      ...state,
      menuOpen: true,
    }
  }

  if (action.type === 'CLOSE-MENU') {
    return {
      ...state,
      menuOpen: false,
    }
  }

  if (action.type === 'FEATURED-PRODUCTS') {
    const featuredItems = state.products.filter((item) => item.featured)
    return {
      ...state,
      featuredProducts: featuredItems,
    }
  }

  if (action.type === 'ADD-WISHLIST') {
    const findProduct = state.products.filter(
      (item) => item.id === action.payload
    )
    const addList = findProduct.map((value) => {
      if (!value.wishList) {
        return {
          ...value,
          wishList: true,
        }
      }
      return value
    })
    return {
      ...state,
      wishList: [...state.wishList, addList].flat(),
      addedWishList: true,
    }
  }

  if (action.type === 'REMOVE-WISHLIST') {
    const newWishList = state.wishList.filter(
      (value) => value.id !== action.payload
    )
    return {
      ...state,
      wishList: newWishList,
    }
  }

  if (action.type === 'ALL-RATES') {
    return {
      ...state,
      currentRates: action.payload.data,
    }
  }

  if (action.type === 'SELECT-RATE') {
    let { code, icon } = action.payload
    const getRate = state.currentRates[code].value
    const convertRate = state.currentRates['NGN'].value
    return {
      ...state,
      selectedRate: {
        code,
        rate: getRate,
        icon,
      },
      conversionRate: convertRate,
    }
  }

  if (action.type === 'SET-DEFAULT-ERROR-RATE') {
    return {
      ...state,
      selectedRate: {
        ...state.selectedRate,
        rate: 1,
      },
      conversionRate: 1,
    }
  }

  return state
}

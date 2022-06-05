export const filterProductReducer = (state, action) => {
  if (action.type === 'FILL-CATEGORIES') {
    const getCategories = action.payload.map((value) => value.category)
    return {
      ...state,
      categories: getCategories,
    }
  }

  if (action.type === 'FILL-COLORS') {
    const getColors = action.payload.map((value) => value.colors)
    return {
      ...state,
      colors: getColors.flat(),
    }
  }

  if (action.type === 'FILTER-PRODUCTS') {
    return {
      ...state,
      filterProducts: [...action.payload],
      filterResult: [...action.payload],
    }
  }

  if (action.type === 'SORT-CATEGORY') {
    const { filterProducts } = state

    let filterCategory = [...filterProducts]
    if (action.payload === 'All') {
      filterCategory = [...filterProducts]
    }

    if (action.payload !== 'All') {
      const filterCategories = filterProducts.filter(
        (value) => value.category === action.payload
      )
      filterCategory = filterCategories
    }

    return {
      ...state,
      filterResult: filterCategory,
      filters: {
        ...state.filters,
        category: action.payload,
      },
    }
  }

  if (action.type === 'SORT-COLORS') {
    const { filterProducts, filters } = state
    const { category } = filters
    let filterColors
    if (action.payload === 'All' && category !== 'All') {
      filterColors = filterProducts.filter(
        (value) => value.category === category
      )
    }
    if (action.payload === 'All' && category === 'All') {
      filterColors = [...filterProducts]
    }
    if (action.payload !== 'All') {
      const filterCategories = filterProducts.filter((value) => {
        return value.colors.find((color) => color === action.payload)
      })
      filterColors = filterCategories.filter(
        (value) => value.category === category
      )
    }

    if (category === 'All' && action.payload !== 'All') {
      filterColors = filterProducts.filter((value) => {
        return value.colors.find((color) => color === action.payload)
      })
    }

    return {
      ...state,
      filterResult: filterColors,
      filters: {
        ...state.filters,
        color: action.payload,
      },
    }
  }

  if (action.type === 'SEARCH-FILTER') {
    const { filterProducts } = state
    let filtered

    //search by name
    if (action.payload) {
      const filterNameSearch = filterProducts.filter((value) => {
        return value.name.toLowerCase().startsWith(action.payload)
      })
      filtered = filterNameSearch
    }
    //search by company
    if (action.payload) {
      const filterCompanySearch = filterProducts.filter((value) => {
        return value.company.toLowerCase().startsWith(action.payload)
      })
      filtered = filterCompanySearch
    }
    // return all products when not searching
    if (!action.payload) {
      filtered = filterProducts
    }

    return {
      ...state,
      filterText: action.payload,
      filterResult: filtered,
    }
  }

  if (action.type === 'SORT-ORDER') {
    const { filterResult } = state
    let filterNameSort = [...filterResult]
    if (action.payload === 'a-z') {
      filterNameSort = filterResult.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }
    if (action.payload === 'z-a') {
      filterNameSort = filterResult.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
    }
    return {
      ...state,
      sort: action.payload,
      filterResult: filterNameSort,
    }
  }
  return state
}


// export const fetch_products = (products) => {
//   return {
//     type: 'FETCH_PRODUCTS',
//     payload: products
//   }
// }

export const fetch_products_pending = () => {
  return {
    type: 'FETCH_PRODUCTS_PENDING'
  }
}

export const fetch_products_success = (data) => {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: data
  }
}

export const fetch_products_error = (error) => {
  return {
    type: 'FETCH_PRODUCTS_ERROR',
    error: error
  }
}


// export const fetch_categories = (categories) => {
//   return {
//     type: 'FETCH_CATEGORIES',
//     payload: categories
//   }
// }

export const fetch_categories_pending = () => {
  return {
    type: 'FETCH_CATEGORIES_PENDING'
  }
}

export const fetch_categories_success = (data) => {
  return {
    type: 'FETCH_CATEGORIES_SUCCESS',
    payload: data
  }
}

export const fetch_categories_error = (error) => {
  return {
    type: 'FETCH_CATEGORIES_ERROR',
    error: error
  }
}


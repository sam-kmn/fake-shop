export const fetch_categories = (categories) => {
  return {
    type: 'FETCH_CATEGORIES',
    payload: categories
  }
}



// export const fetch_categories_pending = () => {
//   return {
//     type: 'FETCH_CATEGORIES'
//   }
// }

// export const fetch_categories_success = (categories) => {
//   return {
//     type: 'FETCH_CATEGORIES',
//     payload: categories
//   }
// }

// export const fetch_categories_error = (error) => {
//   return {
//     type: 'FETCH_CATEGORIES',
//     error: error
//   }
// }


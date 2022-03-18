
const products = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_PRODUCTS' : return action.payload
    default : return state
  }
}



// const initialState = {
//   pending: false,
//   products: [],
//   error: null
// }

// const products = (state = initialState, action) => {
//   switch(action.type){
//     case 'FETCH_PRODUCTS_PENDING': return {...state, pending: true}
//     case 'FETCH_PRODUCTS_SUCCESS': return {...state, pending: false, products: action.payload}
//     case 'FETCH_PRODUCTS_ERROR': return {...state, pending: false, error: true}

//     default: return state
//   }
// }

export default products
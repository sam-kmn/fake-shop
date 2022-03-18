
// const categories = (state = [], action) => {
//   switch(action.type){
//     case 'FETCH_CATEGORIES' : return action.payload
//     default : return state
//   }
// }

const initialState = {
  pending: false,
  data: [],
  error: null
}

const categories = (state = initialState, action) => {
  switch(action.type){
    case 'FETCH_CATEGORIES_PENDING': return {...state, pending: true}
    case 'FETCH_CATEGORIES_SUCCESS': return {...state, pending: false, data: action.payload}
    case 'FETCH_CATEGORIES_ERROR': return {...state, pending: false, error: true}

    default: return state
  }
}

export default categories


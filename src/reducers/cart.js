
const cart = (state = [], action) => {
  switch(action.type){
    case 'ADD_TO_CART' : return [...state, {...action.payload, amount: action.amount}]
    case 'REMOVE_FROM_CART' : return state.filter(product => product.id !== action.payload.id)
    case 'CLEAR_CART' : return []
    case 'UPDATE_CART' : {
      const newState = [...state]
      const product = newState[newState.indexOf(action.payload)]
      product.amount = product.amount + action.amount
      if (product.amount < 1) product.amount = 1
      return newState
    }
    default : return state
  }
}

export default cart
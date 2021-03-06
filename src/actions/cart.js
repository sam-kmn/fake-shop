export const addToCart = (product, amount = 1) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
    amount: amount
  }
}

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product
  }
}

export const clearCart = () => {
  return {
    type: 'CLEAR_CART'
  }
}

export const updateCart = (product, amount) => {
  return {
    type: 'UPDATE_CART',
    payload: product,
    amount: amount
  }
}

// const products = (state = [], action) => {
//   switch(action.type) {
//     case 'FETCH_PRODUCTS' : return action.payload
//     default : return state
//   }
// }


const initialState = {
  pending: false,
  data: [],
  error: null,
  sort: {
    data: [],
    key: null
  }
}

const products = (state = initialState, action) => {
  switch(action.type){
    case 'FETCH_PRODUCTS_PENDING': return {...state, pending: true}
    case 'FETCH_PRODUCTS_SUCCESS': return {...state, pending: false, data: action.payload}
    case 'FETCH_PRODUCTS_ERROR': return {...state, pending: false, error: true}
    
    case 'SORT_PRODUCTS_NONE' : return {
      ...state, sort: {
        data: [],
        key: null
      }
    }

    case 'SORT_PRODUCTS_PRICE': {
      if(!state.data.length) return {...state}
      const newData = [...state.data]

      newData.sort((a, b) => {
        if(a.price > b.price)   return (action.key.split(' ')[0] === 'Lowest' ? 1 : -1);
        if(a.price === b.price)  return 0;
        if(a.price < b.price)   return (action.key.split(' ')[0] === 'Lowest' ? -1 : 1);
      })

      return {
        ...state, sort: {
          data: [...newData],
          key: action.key
        }
      }

    };

    case 'SORT_PRODUCTS_RATE': {
      if(!state.data.length) return {...state}
      const newData = [...state.data]

      newData.sort((a, b) => {
        if(a.rating.rate > b.rating.rate)   return (action.key.split(' ')[0] === 'Lowest' ? 1 : -1);
        if(a.rating.rate === b.rating.rate)  return 0;
        if(a.rating.rate < b.rating.rate)   return (action.key.split(' ')[0] === 'Lowest' ? -1 : 1);
      })

      return {
        ...state, sort: {
          data: [...newData],
          key: action.key
        }
      }

    };
    
    case 'SORT_PRODUCTS_POPULAR': {
      if(!state.data.length) return {...state}
      const newData = [...state.data]

      newData.sort((a, b) => {
        if(a.rating.count > b.rating.count)   return (action.key.split(' ')[0] === 'Lowest' ? 1 : -1);
        if(a.rating.count === b.rating.count)  return 0;
        if(a.rating.count < b.rating.count)   return (action.key.split(' ')[0] === 'Lowest' ? -1 : 1);
      })

      return {
        ...state, sort: {
          data: [...newData],
          key: action.key
        }
      }

    };

    default: return state
  }
}

export default products
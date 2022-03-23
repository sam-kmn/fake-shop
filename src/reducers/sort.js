
const sort = (state = 'None', action) => {
  switch(action.type){
    case 'SORT_PRICE': return 'Price';
    case 'SORT_RATE': return 'Rate';
    case 'SORT_POPULAR': return 'Popular';
    case 'SORT_NONE' : return 'None';
    default: return state; 
  }
}

export default sort
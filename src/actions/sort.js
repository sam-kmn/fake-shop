

export const sort_none = () => {
  return { type: 'SORT_NONE'}
}

export const sort_price = () => {
  return { type: 'SORT_PRICE'}
}

export const sort_rate = () => {
  return { type: 'SORT_RATE'}
}

export const sort_popular = () => {
  return { type: 'SORT_POPULAR'}
}

  // const actions = {
  //   'None':              {type: 'SORT_PRODUCTS_NONE'},

  //   'Lowest Price':      {type: 'SORT_PRODUCTS_PRICE', key: 'lowest'},
  //   'Highest Price':     {type: 'SORT_PRODUCTS_PRICE', key: 'highest'},

  //   'Lowest Rate':       {type: 'SORT_PRODUCTS_RATE', key: 'lowest'},
  //   'Highest Rate':      {type: 'SORT_PRODUCTS_RATE', key: 'highest'},

  //   'Lowest Popular':    {type: 'SORT_PRODUCTS_POPULAR', key: 'lowest'},
  //   'Highest Popular':   {type: 'SORT_PRODUCTS_POPULAR', key: 'highest'}
  // }
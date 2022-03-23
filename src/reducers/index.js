import products from "./products";
import categories from './categories';
import cart from './cart';
// import sort from './sort';

import { combineReducers } from "redux";

const allReducers = combineReducers({
  products, categories, cart
})

export default allReducers
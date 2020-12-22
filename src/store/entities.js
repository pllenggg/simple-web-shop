import { combineReducers } from 'redux'
import productReducers from './products'
import categoryReducers from './categories'
import cartReducers from './carts'

export default combineReducers({
  products: productReducers,
  categories: categoryReducers,
  carts: cartReducers
})

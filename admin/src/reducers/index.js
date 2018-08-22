import { combineReducers } from 'redux'
import categories from './categories'
import products from './products'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  categories,
  products,
  visibilityFilter
})

export default rootReducer

import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    EDIT_PRODUCT,
    GET_ALL_PRODUCTS
  } from '../constants/ActionTypes'
  
  const initialState = [
    {
      text: 'Use Redux',
      id: 0
    }
  ]
  
  export default function products(state = initialState, action) {
    switch (action.type) {
      case ADD_PRODUCT:
        return [
          ...state,
          {
            id: state.reduce((maxId, product) => Math.max(product.id, maxId), -1) + 1,
            text: action.text
          }
        ]
  
      case DELETE_PRODUCT:
        return state.filter(product =>
         product.id !== action.id
        )
  
      case EDIT_PRODUCT:
        return state.map(product =>
          product.id === action.id ?
            { ...product, text: action.text } :
            product
        )
    case GET_ALL_PRODUCTS:
    return action.products.map(product => product.id)
    }
  }
  
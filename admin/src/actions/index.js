import * as types from '../constants/ActionTypes'

export const addCategory = text => ({ type: types.ADD_CATEGORY, text })
export const deleteCategory = id => ({ type: types.DELETE_CATEGORY, id })
export const editCategory = (id, text) => ({ type: types.EDIT_CATEGORY, id, text })
export const getAllCategories = () => ({ type: types.GET_ALL_CATEGORIES })

export const addProduct = text => ({ type: types.ADD_PRODUCT, text })
export const deleteProduct = id => ({ type: types.DELETE_PRODUCT, id })
export const editProduct = (id, text) => ({ type: types.EDIT_PRODUCT, id, text })
export const getAllProducts = () => ({ type: types.GET_ALL_PRODUCTS })



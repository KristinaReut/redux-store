export const ADD_CATEGORY = 'ADD_CATEGORY'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'
export const EDIT_CATEGORY = 'EDIT_CATEGORY'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DELETE_PRODUCT= 'DELETE_PRODUCT'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'

export const addCategory = text => ({ type: ADD_CATEGORY, text })
export const deleteCategory = id => ({ type: DELETE_CATEGORY, id })
export const editCategory = (id, text) => ({ type: EDIT_CATEGORY, id, text })
export const getAllCategories = () => ({ type: GET_ALL_CATEGORIES })

export const addProduct = text => ({ type: ADD_PRODUCT, text })
export const deleteProduct = id => ({ type: DELETE_PRODUCT, id })
export const editProduct = (id, text) => ({ type: EDIT_PRODUCT, id, text })
export const getAllProducts = () => ({ type: GET_ALL_PRODUCTS })



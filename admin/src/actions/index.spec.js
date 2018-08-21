import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('category actions', () => {
  it('addCategory should create ADD_CATEGORY action', () => {
    expect(actions.addCategory('Use Redux')).toEqual({
      type: types.ADD_CATEGORY,
      text: 'Use Redux'
    })
  })

  it('deleteCategory should create DELETE_CATEGORY action', () => {
    expect(actions.deleteCategory(1)).toEqual({
      type: types.DELETE_TODO,
      id: 1
    })
  })

  it('editCategory should create EDIT_Category action', () => {
    expect(actions.editCategory(1, 'Use Redux everywhere')).toEqual({
      type: types.EDIT_CATEGORY,
      id: 1,
      text: 'Use Redux everywhere'
    })
  })

  it('getAllCategories should create GET_ALL_CATEGORIES action', () => {
    expect(actions.getAllCategories()).toEqual({
      type: types.GET_ALL_CATEGORIES
    })
  })


 
})

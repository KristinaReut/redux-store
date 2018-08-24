import { ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY, GET_ALL_CATEGORIES} from '../actions';
  
  const initialState = [
    {
      text: 'sfdf',
      id: 0
    }
  ]
  
  export default function categories(state = initialState, action) {
    switch (action.type) {
      case ADD_CATEGORY:
        return [
          ...state,
          {
            id: state.reduce((maxId, category) => Math.max(category.id, maxId), -1) + 1,
            text: action.text
          }
        ]
  
      case DELETE_CATEGORY:
        return state.filter(category =>
         category.id !== action.id
        )
  
      case EDIT_CATEGORY:
        return state.map(category =>
          category.id === action.id ?
            { ...category, text: action.text } :
            category
        )
    case GET_ALL_CATEGORIES:
    return action.categories.map(category => category.id)
    }
  }
  
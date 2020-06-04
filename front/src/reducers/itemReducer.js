import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'

const initialState = {
  items: [
    { id: '430c3c22-a4d0-11ea-bb37-0242ac130002', name: 'eloi'},
    { id: '494dc7c2-a4d0-11ea-bb37-0242ac130002', name: 'sarah'},
    { id: '5b63cf10-a4d0-11ea-bb37-0242ac130002', name: 'nelly'},
    { id: '60cc768c-a4d0-11ea-bb37-0242ac130002', name: 'shawn'}
  ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      }
    default:
      return state
  }
}
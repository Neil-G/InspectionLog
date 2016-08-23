import { List, fromJS } from 'immutable';

export const inspections = (state = [], action) => {
  switch (action.type){
    case 'SET_INSPECTIONS':
      return List(action.inspections)
    default:
      return state

  }
}

import { List, fromJS } from 'immutable';

let newState;

export const inspections = (state = [], action) => {
  switch (action.type){
    case 'SET_INSPECTIONS':
      return List(action.inspections)
    case 'CREATE_INSPECTION':
      return state.push(action.inspection)
    default:
      return state

  }
}

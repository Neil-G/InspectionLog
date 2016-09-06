import { List } from 'immutable'

const inspections = (state = [], action) => {
  switch (action.type) {
    case 'SET_INSPECTIONS':
      return List(action.inspections)
      break
    default:
      return state
  }
}

export default inspections

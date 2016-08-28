import { List, fromJS } from 'immutable';
import swal from 'sweetalert';

export const inspections = (state = [], action) => {
  switch (action.type){
    case 'SET_INSPECTIONS':
      return List(action.inspections)
    case 'CREATE_INSPECTION':
      swal(`Inspection ${action.inspection.DOB} created`, "", "success")
      return state.push(action.inspection)
    default:
      return state

  }
}

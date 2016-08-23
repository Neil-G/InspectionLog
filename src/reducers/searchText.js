export const searchText = (state = "", action) => {
  switch (action.type){
    case 'UPDATE_TEXT':
      return action.text
    default:
      return state

  }
}

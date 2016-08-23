export const searchText = (state = "", action) => {
  switch (action.type){
    case 'SET_TEXT':
      return List(action.text)
    default:
      return state

  }
}

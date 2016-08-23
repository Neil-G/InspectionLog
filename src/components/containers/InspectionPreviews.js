import { connect } from 'react-redux';
import { InspectionPreviews } from './../pages/InspectionPreviews'


function filter(List, text){
  console.log('filtering')
  if (text = "") return List
  return List.filter( inspection => {
    return inspection.DOB.search(text) != -1
  })
}


const mapStateToProps = (state) => {
  return {
    inspections: state.inspections.filter( inspection => {
      return(
        inspection.DOB.search(state.searchText) != -1 ||
        inspection.address.line1.search(state.searchText) != -1 ||
        inspection.address.line2.search(state.searchText) != -1
      )

    })
  }
}

export const InspectionPreviewsContainer = connect(
  mapStateToProps
)(InspectionPreviews)

import { connect } from 'react-redux';
import { InspectionPreviews } from './../pages/InspectionPreviews'

const mapStateToProps = (state) => {
  return {
    inspections: state.inspections
  }
}

export const InspectionPreviewsContainer = connect(
  mapStateToProps
)(InspectionPreviews)

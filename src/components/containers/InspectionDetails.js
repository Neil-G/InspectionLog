import { connect } from 'react-redux';
import { InspectionDetails } from './../pages/InspectionDetails'

const mapStateToProps = (state) => {
  return {
    inspections: state.inspections
  }
}

export const InspectionDetailsContainer = connect(
  mapStateToProps
)(InspectionDetails)

import parts from './../components/parts'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    inspections: state.inspections
  }
}

export const SearchResults = connect(
  mapStateToProps
)(parts.InspectionsSearchResults)

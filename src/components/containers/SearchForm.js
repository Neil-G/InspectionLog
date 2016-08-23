import { connect } from 'react-redux';
import InspectionSearchForm from './../forms/InspectionSearchForm'

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateText: (text) => {
      dispatch({ type: 'UPDATE_TEXT', text })
    }
  }
}

export const SearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(InspectionSearchForm)

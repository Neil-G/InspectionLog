import Forms from './../components/forms'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInspections: (inspections) => {
      dispatch({ type: 'SET_INSPECTIONS', inspections })
    }
  }
}

export const SearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Forms.SearchForm)

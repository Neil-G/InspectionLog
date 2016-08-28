import { connect } from 'react-redux';
import CreateInspectionForm from './../forms/CreateInspectionForm'

const mapStateToProps = (state) => {
  return {
    // searchText: state.searchText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createInspection: (inspection) => {
      dispatch({ type: 'CREATE_INSPECTION', inspection })
    }
  }
}

export const CreateForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateInspectionForm)

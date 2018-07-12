import { connect } from 'react-redux';

import { showErrorModal, hideErrorModal } from '../actions';
import ErrorModal from '../components/error-modal';

const mapStateToProps = (state) => {
  return {
    displayErrorModal: state.displayErrorModal,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showErrorModal: () => dispatch(showErrorModal()),
    hideErrorModal: () => dispatch(hideErrorModal()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorModal);
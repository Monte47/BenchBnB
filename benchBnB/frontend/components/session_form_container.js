import { connect } from 'react-redux';
import sessionForm from './session_form';
import {login, signup } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.location.pathname === '/login' ? login : signup;
  return {
    processForm: user => dispatch(action(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(sessionForm);

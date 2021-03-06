import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const _nullUser = { currentUser: null, errors: [] };

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case "RECEIVE_CURRENT_USER":
      return {
        currentUser: action.currentUser,
        errors: []
      };
    case RECEIVE_ERRORS:
      return Object.assign({}, state, {errors: action.errors});
    default:
      return state;
  }
};


export default SessionReducer;

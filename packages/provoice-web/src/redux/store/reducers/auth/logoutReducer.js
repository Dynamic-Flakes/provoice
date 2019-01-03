import * as actionTypes from "../actions/types";

const defaultState = {
  loggingOut: false,
  isLoggedIn: true,
  user: {},
};

export default function logoutReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.LOGOUT:
      return {
        ...state,
        loggingOut: true
      }
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        isLoggedIn: false,
        user: null
      }
    case actionTypes.LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false
      }
    default:
      return state;
  }
}
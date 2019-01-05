import * as actionTypes from "../../actions/types";

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
        loggingOut: true,
        isLoggedIn: true
      }
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        isLoggedIn: false,
        accessToken: null,
        user: null
      }
    case actionTypes.LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
        logoutError: action.error

      }
    default:
      return state;
  }
}
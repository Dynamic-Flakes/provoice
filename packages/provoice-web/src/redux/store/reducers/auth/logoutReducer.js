import * as actionTypes from "../actions/types";

const defaultState = {
  loggingOut: false,
  isLoggedIn: true,
  user: {},
};

export default function logoutReducer(state = defaultState, action) {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        loggingOut: true
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        isLoggedIn: false,
        user: null
      }
    case LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false
      }
  }
}
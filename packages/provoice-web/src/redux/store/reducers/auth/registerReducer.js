import * as actionTypes from "../actions/types";

const defaultState = {
  isSigningUp: false,
  user: {},
  error: ""
};

export default function registerReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SIGNUP:
      return {
        ...state,
        isSigningUp: true
      }
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        user: action.result
      }
    case actionTypes.SIGNUP_FAIL: {
      let error = null

      switch (action.error.status) {
        case 409:
          error = 'Conflict.'
          break
        default:
          error = 'Při registraci došlo k neznámé chybě.'
      }
      return {
        ...state,
        isSigningUp: false,
        user: null,
        error
      }
    }
  }
}
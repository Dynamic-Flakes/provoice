import * as actionTypes from "../../actions/types";

export const getInitialData = () => ({
  isSigningUp: false,
  user: {},
  error: ""
});

export default function registerReducer(state = getInitialData(), action) {
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
    case actionTypes.SIGNUP_FAIL: 
      return {
        ...state,
        isSigningUp: false,
        user: null,
        error:action.error

      }
    default:
      return state;
  }
}
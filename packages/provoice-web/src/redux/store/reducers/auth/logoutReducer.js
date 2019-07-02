import * as actionTypes from "../../actions/types";

export const getInitialData = () => ({
  loggingOut: false,
  isLoggedIn: true,
  user: {},
});
export default function logoutReducer(state = getInitialData(), action) {
  switch (action.type) {
    case actionTypes.LOGOUT_REQUEST:
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
    case actionTypes.LOGOUT_FAILURE:
      return {
        ...state,
        loggingOut: false,
        logoutError: action.error

      }
    default:
      return state;
  }
}
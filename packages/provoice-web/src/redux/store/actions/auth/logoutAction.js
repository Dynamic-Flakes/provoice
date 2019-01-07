import { push } from 'react-router-redux';

import { removeItemFromStorage } from 'src/helpers/localStorage';
import setAuthorizationHeader from "../utils/setAuthorizationHeader";
import * as actionTypes from "../../actions/types";

/**
 * ## Logout actions
 */
export function logoutRequest () {
  return {
    type: actionTypes.LOGOUT_REQUEST
  }
}

export function logoutSuccess () {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  }
}
export function logoutFailure (error) {
  return {
    type: actionTypes.LOGIN_FAILURE,
    payload: error
  }
}

export const logout = () => dispatch => {
  dispatch(logoutRequest)
  // clear localStorage
  removeItemFromStorage('provoice');
  setAuthorizationHeader();
  dispatch(push('/'));
  dispatch(logoutSuccess);
};


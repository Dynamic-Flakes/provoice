import { push } from 'react-router-redux';

import { storeItem } from 'src/helpers/localStorage';
import * as actionTypes from "../../actions/types";
import { doLogin } from  '../../../../api/Services'
import setAuthorizationHeader from "../utils/setAuthorizationHeader";



/**
 * ## login actions
 */
export function loginRequest () {
    return {
      type: actionTypes.LOGIN_REQUEST
    }
  }
  export function loginSuccess (data) {
    return {
      type: actionTypes.LOGIN_SUCCESS,
      payload: data
    }
  }
  export function loginFailure (error) {
    return {
      type: actionTypes.LOGIN_FAILURE,
      payload: error
    }
  }

  // redux async action
  export function login(data) {
    return dispatch => {
      dispatch(loginRequest())
       doLogin(data)
        .then(response => {
          dispatch(loginSuccess( response.data.token));
          storeItem('provoice', response.data.token);
          setAuthorizationHeader(response.data.token);
          dispatch(push('/'));
        })
      .catch(err => {
          dispatch(loginFailure(err.response.data.error));
      });
};
};


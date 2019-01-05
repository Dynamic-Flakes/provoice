import { push } from 'react-router-redux';

import { storeItem } from 'src/helpers/localStorage';
import * as actionTypes from "../../actions/types";
import { doRegister } from  '../../../../api/Services'


/**
 * ## Signup actions
 */
export function signupRequest () {
    return {
      type: actionTypes.SIGNUP
    }
  }
  export function signupSuccess (json) {
    return {
      type: actionTypes.SIGNUP_SUCCESS,
      payload: json
    }
  }
  export function signupFailure (error) {
    return {
      type: actionTypes.SIGNUP_FAIL,
      payload: error
    }
  }

  // redux async action
  export function signup (data) {
    return dispatch => {
      dispatch(signupRequest())
        doRegister(data)
        .then(response => {
          dispatch(signupSuccess(response.username));
          storeItem('provoice', response.data.token);
          dispatch(push('/'));
        })
      .catch(err => {
          dispatch(signupFailure(err.response.data.error));
      });
};
};


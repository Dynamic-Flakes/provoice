import { push } from 'react-router-redux';

import * as actionTypes from "../../actions/types";
import { doResetPassword } from  '../../../../api/Services'

/**
 * ## ResetPassword actions
 */
export function resetPasswordRequest () {
    return {
      type: actionTypes.RESET_PASSWORD_REQUEST
    }
  }
  
  export function resetPasswordSuccess (message) {
    return {
      type: actionTypes.RESET_PASSWORD_SUCCESS,
      message
    }
  }
  
  export function resetPasswordFailure (error) {
    return {
      type: actionTypes.RESET_PASSWORD_FAILURE,
      payload: error
    }
  }

  // redux async action
  export function resetPassword (email) {
    return dispatch => {
      dispatch(resetPasswordRequest())
      doResetPassword(email)
        .then(response => {
          dispatch(resetPasswordSuccess(response.message));
          dispatch(push('/'));
        })
      .catch(err => {
          dispatch(resetPasswordFailure(err.response.data.error));
      });
};
};


import * as actionTypes from "../../actions/types";

const defaultState = {
  fetchingLangOptions: false,
  langOptions: {},
  error: ""
};

export default function languageOptionsReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.LANGUAGE_OPTIONS_REQUEST:
      return {
        ...state,
        fetchingLangOptions: true
      }
    case actionTypes.LANGUAGE_OPTIONS_REQUEST_SUCCESS:
      return {
        ...state,
        fetchingLangOptions: false,
        langOptions: action.result
      }
    case actionTypes.LANGUAGE_OPTIONS_REQUEST_FAIL: {
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
        fetchingLangOptions: false,
        langOptions: null,
        error
      }
    }
    default:
      return state;
  }
}
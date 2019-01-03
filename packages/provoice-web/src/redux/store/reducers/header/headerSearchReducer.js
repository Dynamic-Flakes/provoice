import * as actionTypes from "../../actions/types";

const defaultState = {
  isSearching: false,
  searchItem: {},
  error: ""
};

export default function headerSearchReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_REQUEST:
      return {
        ...state,
        isSearching: true
      }
    case actionTypes.SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        isSearching: false,
        searchItem: action.result
      }
    case actionTypes.SEARCH_REQUEST_FAIL: {
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
        isSearching: false,
        searchItem: null,
        error
      }
    }
    default:
      return state;
  }
}
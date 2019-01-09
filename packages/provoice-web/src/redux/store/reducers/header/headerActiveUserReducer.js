import * as actionTypes from "../../actions/types";

const defaultState = {
    fetchingUser: false,
    activeUser: {},
    error: ""
};

export default function headerActiveUserReducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.ACTIVE_USER_REQUEST:
            return {
                ...state,
                fetchingUser: true
            }
        case actionTypes.ACTIVE_USER_REQUEST_SUCCESS:
            return {
                ...state,
                fetchingUser: false,
                activeUser: action.result
            }
        case actionTypes.ACTIVE_USER_REQUEST_FAIL: 
            return {
                ...state,
                fetchingUser: false,
                activeUser: null,
                error:action.error

            }
        default:
            return state;
    }
}
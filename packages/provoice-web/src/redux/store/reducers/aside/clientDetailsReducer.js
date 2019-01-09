import * as actionTypes from "../../actions/types";

const defaultState = {
    fetchingClientInfo: false,
    clientInfo: {},
    error: ""
};

export default function clientDetailsReducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CLIENT_DETAILS_REQUEST:
            return {
                ...state,
                fetchingClientInfo: true
            }
        case actionTypes.CLIENT_DETAILS_REQUEST_SUCCESS:
            return {
                ...state,
                fetchingClientInfo: false,
                clientInfo: action.result
            }
        case actionTypes.CLIENT_DETAILS_REQUEST_FAIL: {
            return {
                ...state,
                fetchingClientInfo: false,
                clientInfo: null,
                error:action.error
            }
        }
        default:
            return state;
    }
}

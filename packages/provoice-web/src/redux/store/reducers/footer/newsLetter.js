import * as actionTypes from "../../actions/types";

const defaultState = {
    isSending: false,
    message: {},
    error: ""
};

export default function headerSearchReducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.SUBSCRIBE_REQUEST:
            return {
                ...state,
                isSending: true
            }
        case actionTypes.SUBSCRIBE_REQUEST_SUCCESS:
            return {
                ...state,
                isSending: false,
                message: action.result
            }
        case actionTypes.SUBSCRIBE_REQUEST_FAIL: 
            return {
                ...state,
                isSending: false,
                message: null,
                error:action.error

            }
        
        default:
            return state;
    }
}
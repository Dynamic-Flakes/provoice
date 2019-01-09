import * as actionTypes from "../../actions/types";

const defaultState = {
    fetchingNotification: false,
    notifications: {},
    error: ""
};

export default function headerNotificationReducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.NOTIFICATION_REQUEST:
            return {
                ...state,
                fetchingNotification: true
            }
        case actionTypes.NOTIFICATION_REQUEST_SUCCESS:
            return {
                ...state,
                fetchingNotification: false,
                notifications: action.result
            }
        case actionTypes.NOTIFICATION_REQUEST_FAIL: 
            return {
                ...state,
                fetchingNotification: false,
                notifications: null,
                error:action.error
            }
        
        default:
            return state;
    }
}
import * as actionTypes from "../actions/types";

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
        case actionTypes.NOTIFICATION_REQUEST_FAIL: {
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
                fetchingNotification: false,
                notifications: null,
                error
            }
        }
    }
}
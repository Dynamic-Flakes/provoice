import * as actionTypes from "../actions/types";

const defaultState = {
    gettingNotification: false,
    notifications: {},
    error: ""
};

export default function headerNotificationReducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.NOTIFICATION_REQUEST:
            return {
                ...state,
                gettingNotification: true
            }
        case actionTypes.NOTIFICATION_REQUEST_SUCCESS:
            return {
                ...state,
                gettingNotification: false,
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
                gettingNotification: false,
                notifications: null,
                error
            }
        }
    }
}
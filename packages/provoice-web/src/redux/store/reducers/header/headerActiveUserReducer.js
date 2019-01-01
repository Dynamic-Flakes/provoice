import * as actionTypes from "../actions/types";

const defaultState = {
    gettingUser: false,
    activeUser: {},
    error: ""
};

export default function headerActiveUserReducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.ACTIVE_USER_REQUEST:
            return {
                ...state,
                gettingUser: true
            }
        case actionTypes.ACTIVE_USER_REQUEST_SUCCESS:
            return {
                ...state,
                gettingUser: false,
                activeUser: action.result
            }
        case actionTypes.ACTIVE_USER_REQUEST_FAIL: {
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
                gettingUser: false,
                activeUser: null,
                error
            }
        }
    }
}
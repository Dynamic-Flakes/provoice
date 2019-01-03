import * as actionTypes from "../actions/types";

const defaultState = {
    fetchingStatInfo: false,
    statInfo: {},
    error: ""
};

export default function statCardReducers(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.STAT_INFO_REQUEST:
            return {
                ...state,
                fetchingStatInfo: true
            }
        case actionTypes.STAT_INFO_REQUEST_SUCCESS:
            return {
                ...state,
                fetchingStatInfo: false,
                statInfo: action.result
            }
        case actionTypes.STAT_INFO_REQUEST_FAIL: {
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
                fetchingStatInfo: false,
                statInfo: null,
                error
            }
        }
        default:
            return state;
    }
}

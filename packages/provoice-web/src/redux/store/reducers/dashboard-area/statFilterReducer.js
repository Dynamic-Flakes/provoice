import * as actionTypes from "../../actions/types";

const defaultState = {
    fetchingStatFilterItems: false,
    statFilterItems: {},
    error: ""
};

export default function statCardReducers(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.STAT_FILTER_ITEMS_REQUEST:
            return {
                ...state,
                fetchingStatFilterItems: true
            }
        case actionTypes.STAT_FILTER_ITEMS_REQUEST_SUCCESS:
            return {
                ...state,
                fetchingStatFilterItems: false,
                statFilterItems: action.result
            }
        case actionTypes.STAT_FILTER_ITEMS_REQUEST_FAIL: {
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
                fetchingStatFilterItems: false,
                statFilterItems: null,
                error
            }
        }
        default:
            return state;
    }
}

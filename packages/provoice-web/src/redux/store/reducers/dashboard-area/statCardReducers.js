import * as actionTypes from "../actions/types";

const defaultState = {
    fetchingStatCardData: false,
    statCardData: {},
    error: ""
};

export default function statCardReducers(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.STAT_CARD_DATA_REQUEST:
            return {
                ...state,
                fetchingStatCardData: true
            }
        case actionTypes.STAT_CARD_DATA_REQUEST_SUCCESS:
            return {
                ...state,
                fetchingStatCardData: false,
                statCardData: action.result
            }
        case actionTypes.STAT_CARD_DATA_REQUEST_FAIL: {
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
                fetchingStatCardData: false,
                statCardData: null,
                error
            }
        }
        default:
            return state;
    }
}

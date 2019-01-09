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
        case actionTypes.STAT_FILTER_ITEMS_REQUEST_FAIL: 
            return {
                ...state,
                fetchingStatFilterItems: false,
                statFilterItems: null,
                error:action.error
            }
        
        default:
            return state;
    }
}

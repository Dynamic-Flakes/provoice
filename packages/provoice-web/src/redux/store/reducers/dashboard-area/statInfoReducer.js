import * as actionTypes from "../../actions/types";

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
        case actionTypes.STAT_INFO_REQUEST_FAIL: 
            return {
                ...state,
                fetchingStatInfo: false,
                statInfo: null,
                error:action.error

            }
        
        default:
            return state;
    }
}

import * as actionTypes from "../../actions/types";

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
        case actionTypes.STAT_CARD_DATA_REQUEST_FAIL: 
            return {
                ...state,
                fetchingStatCardData: false,
                statCardData: null,
                error:action.error
            }
        
        default:
            return state;
    }
}

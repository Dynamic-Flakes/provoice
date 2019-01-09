import * as actionTypes from "../../actions/types";

const defaultState = {
    fetchingMenuItems: false,
    menuItems: {},
    error: ""
};

export default function topMenuReducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.TOP_MENU_REQUEST:
            return {
                ...state,
                fetchingMenuItems: true
            }
        case actionTypes.TOP_MENU_REQUEST_SUCCESS:
            return {
                ...state,
                fetchingMenuItems: false,
                menuItems: action.result
            }
        case actionTypes.TOP_MENU_REQUEST_FAIL: 
            return {
                ...state,
                fetchingMenuItems: false,
                menuItems: null,
                error:action.error

            }
        
        default:
            return state;
    }
}

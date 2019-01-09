import * as actionTypes from "../../actions/types";

const defaultState = {
    fetchingMenuItems: false,
    menuItems: {},
    error: ""
};

export default function asideMenuReducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.ASIDE_MENU_ITEM_REQUEST:
            return {
                ...state,
                fetchingMenuItems: true
            }
        case actionTypes.ASIDE_MENU_ITEM_REQUEST_SUCCESS:
            return {
                ...state,
                fetchingMenuItems: false,
                menuItems: action.result
            }
        case actionTypes.ASIDE_MENU_ITEM_REQUEST_FAIL: {
            return {
                ...state,
                fetchingMenuItems: false,
                menuItems: null,
                error:action.error
            }
        }
        default:
            return state;
    }
}

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
        case actionTypes.TOP_MENU_REQUEST_FAIL: {
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
                fetchingMenuItems: false,
                menuItems: null,
                error
            }
        }
        default:
            return state;
    }
}

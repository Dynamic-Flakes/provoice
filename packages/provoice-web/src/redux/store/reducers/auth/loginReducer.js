import * as actionTypes from "../../actions/types";

const defaultState = {
    isLoggingIn: false,
    isLoggedIn: false,
    user: {},
    loginError: ""
};

export default function loginReducer(state = defaultState, action) {
    console.log("this is action ", action)
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isLoggingIn: false,
                loginError: "",
                accessToken: action.result.accessToken,
                user: action.payload
            };
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                isLoggingIn: false,
                loginError: action.error
            };
        case actionTypes.RESET_LOGIN_STATE:
            return defaultState;
        default:
            return state;
    }
}
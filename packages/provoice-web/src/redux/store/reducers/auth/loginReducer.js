import * as actionTypes from "../../actions/types";

export const getInitialData = () => ({
    isLoggingIn: false,
    isLoggedIn: false,
    user: {},
    loginError: "",
    loginDate: null,

});

export default function loginReducer(state = getInitialData(), action) {
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
                accessToken: action.result.accessToken,
                refreshToken: action.result.refresh_token,
                user: action.payload,
                loginDate: new Date(),

            };
        case actionTypes.LOGOUT_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                isLoggingIn: false,
                loginError: action.error
            };
        case actionTypes.RESET_LOGIN_STATE:
            return getInitialData();
        default:
            return state;
    }
}
import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return {
                loading: true
            };
        case LOGIN_USER_SUCCESS:
            return {
                loading: true,
                userInfo: action.payload
            };
        case LOGIN_USER_FAILURE:
            return {
                loading: false,
                error: action.payload
            };
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
}
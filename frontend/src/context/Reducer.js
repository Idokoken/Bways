import {
    FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, POST_PRODUCT_FAILURE,
    POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS, REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, LOGOUT_USER, UPDATE_USER_BEGIN, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR,
} from './action'

import { initialState } from "./AppContext";

const Reducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case FETCH_PRODUCT_REQUEST:
            return { ...state, loading: true };
        case FETCH_PRODUCT_SUCCESS:
            console.log('getting product', payload)
            return { ...state, loading: false, posts: payload, error: null };
        case FETCH_PRODUCT_FAILURE:
            return { ...state, loading: false, error: payload };

        case POST_PRODUCT_REQUEST:
            return { ...state, loading: true };
        case POST_PRODUCT_SUCCESS:
            console.log('getting product', payload)
            return { ...state, loading: false, posts: [...state.posts, payload], error: null };
        case POST_PRODUCT_FAILURE:
            return { ...state, loading: false, error: payload };

        //user registeration
        case REGISTER_USER_BEGIN:
            return { ...state, loading: true };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                token: action.payload.token,
            };

        default:
            throw new Error(`No such action ${type}`)
        // return state
    }
}

export default Reducer
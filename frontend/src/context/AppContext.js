import React, { useReducer, useContext } from "react";
import axios from "axios";
import Reducer from "./Reducer";

import {
    LOGIN_USER_BEGIN, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER_BEGIN,
    REGISTER_USER_ERROR, REGISTER_USER_SUCCESS
} from "./action";


export const user = localStorage.getItem("user");
const token = localStorage.getItem("token");


export const AppContext = React.createContext();

export const initialState = {
    user: user ? JSON.parse(user) : null,
    token: token,
    loading: false,
    error: null,
    bookings: [],
    plane: []
};

export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    // const [state, dispatch] = useReducer(Reducer);

    const addUserToLocalStorage = ({ user, token, location }) => {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        localStorage.setItem("location", location);
    };

    const removeUserRemoveLocalStorage = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("location");
    };

    const registerUser = async (currentUser) => {
        //console.log(currentUser);
        dispatch({ type: REGISTER_USER_BEGIN });
        try {
            const resp = await axios.post("/api/v1/auth/register", currentUser);
            console.log(resp);
            console.log("hello register");
            const { user, token, location } = resp.data;
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: { user, token, location },
            });
            addUserToLocalStorage({ user, token, location });
        } catch (error) {
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: { msg: error.resp.data.msg },
            });
            console.log(error.resp);
        }
        // clearAlert();
    };

    //login user
    const loginUser = async (userDetail) => {
        // console.log(userDetail);
        dispatch({ type: LOGIN_USER_BEGIN });
        try {
            const resp = await axios.post("/api/v1/auth/login", userDetail);
            console.log(resp);
            console.log("hello Login ");
            const { user, token, location } = resp.data;
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: { user, token, location },
            });
            addUserToLocalStorage({ user, token, location });
        } catch (error) {
            dispatch({
                type: LOGIN_USER_ERROR,
                payload: { msg: error.resp.data.msg },
            });
            console.log(error.resp);
        }
        // clearAlert();
        window.location = "/";
    };

    const logoutUser = () => {
        dispatch({ type: LOGOUT_USER });
        removeUserRemoveLocalStorage();
    };


    return (
        <AppContext.Provider value={{
            ...state,
            registerUser,
            loginUser,
            logoutUser,

        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext)

    if (context === undefined) {
        throw new Error("useAppContext must be used within AppContext")
    }

    return context
}

// export default useAppContext

import { createContext, useState, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";
//observer-context
import {
    onAuthStateChangedListener,
    // signOutUser,
    createUserDocumentFromAuth
} from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null

});
export const USER_ACTION_TYPES = {
    "SET_CURRENT_USER": "SET_CURRENT_USER",
}

const userReducer = (state, action) => {

    const { type, payload } = action
    // console.log("dispatched")
    // console.log(action)

    switch (type) {
        // case 'SET_CURRENT_USER':
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`unhandled type ${type} in userReducer.`)
        // return {
        //     currentUser: payload
        // }
    }
}

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null);1-cut:
    // const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);2-cut:direct destructure currentuser
    // const { currentUser } = state ;2-cut
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)
    const setCurrentUser = (user) => {
        // dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
        dispatch(
            createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
        )
        // console.log(currentUser)
    }
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            // console.log(user);
            setCurrentUser(user)
        });
        return unsubscribe;
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
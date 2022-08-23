import { createContext, useState, useEffect } from "react";
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
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    // monment when the userprovider mount run signoutuser
    // signOutUser();
    // signOutUser();
    //observer-context
    useEffect(() => {
        //mod 7-2-video
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            // console.log(user);
            setCurrentUser(user)
        })
        return unsubscribe;
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
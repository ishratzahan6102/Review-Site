import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider , onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const createUser = ( email, password ) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateProfile = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser , profile) 
    }

    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log("current user inside state change ", currentUser)
            setUser(currentUser)
            setLoading(false)
        })
            return () => unSubscribe()
    }, [])






    const authInfo = { 
            user,
         loading, 
         createUser, 
         signIn, 
         logOut, 
         signInWithGoogle, 
         updateProfile}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
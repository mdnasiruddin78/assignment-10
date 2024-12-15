import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase.config";

export const  authContext = createContext()

const Authprovider = ({children}) => {

    const [user,setUser] = useState()
    const googleProvider = new GoogleAuthProvider()
    const [loading,setLoding] = useState(true)
    const [loadedMovie,setLoadedMovie] = useState([])
    
    const createUsers = (email,password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUsers = (email,password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logoutUser = () => {
        setLoding(true)
        return signOut(auth)
    }

    const googleLogin = () => {
        setLoding(true)
        return signInWithPopup(auth,googleProvider)
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser,updatedData)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUsers => {
            // console.log(currentUsers)
            setUser(currentUsers)
            setLoding(false)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        setUser,
        loading,
        createUsers,
        signInUsers,
        googleLogin,
        logoutUser,
        setLoding,
        loadedMovie,
        setLoadedMovie,
        updateUserProfile,
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
   

    // create user
    const createUser = (email, password) => {
         
        return createUserWithEmailAndPassword(auth, email, password);
    }
  // google log in
    const googleSignIn = (provider) => {
       return signInWithPopup(auth, provider);
    }

    //update user

    const updateUser = (userInfo) => {
        
        return updateProfile(user, userInfo)
    }
    // user login

    const logIn = (email, password) => {
        
       return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        return signOut(auth);
    }
    //observer for user

    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
       
            console.log(currentUser);
            setUser(currentUser);
        });

        return () => {
            return unsubscribe();
        }
    },[])
    
    const authInfo = { user,  createUser, googleSignIn, logIn, logOut, updateUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
           
        </AuthContext.Provider>
    );
};

export default AuthProvider;
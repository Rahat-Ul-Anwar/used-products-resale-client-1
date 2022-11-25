import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
   

    // create user
    const createUser = (email, password) => {
        setLoading(true);
         
        return createUserWithEmailAndPassword(auth, email, password);
    }
  // google log in
    const googleSignIn = (provider) => {
        setLoading(true);
       return signInWithPopup(auth, provider);
    }

    //update user

    const updateUser = (userInfo) => {
      
        
        return updateProfile(user, userInfo)
    }
    // user login

    const logIn = (email, password) => {
        setLoading(true);
        
       return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    //observer for user

    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
       
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        }
    },[])
    
    const authInfo = { user, loading, createUser, googleSignIn, logIn, logOut, updateUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
           
        </AuthContext.Provider>
    );
};

export default AuthProvider;
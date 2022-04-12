import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init'
import { useEffect, useState } from "react";

const auth =getAuth(app)
const GoogleProvider = new GoogleAuthProvider();
const useFirbase =()=>{
    const [user, setUser] =useState([])
    
    const signInWithGoogle =()=>{
      signInWithPopup(auth, GoogleProvider)
      .then(result=>{
          const user= result.user
          setUser(user)
          console.log(user)
      })
      
    }
    const handleSignOut=()=>{
        signOut(auth)
    }
    useEffect(()=>{
        onAuthStateChanged(auth , user=>{
            setUser(user)
        })
      },[])
    return {
        user,
        handleSignOut,
        signInWithGoogle
    }
}
export default useFirbase;
import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app)
const Login = () => {
   const [signInWithGoogle] = useSignInWithGoogle(auth)
   const location = useLocation()
   const navigate =useNavigate()
  
   const from = location?.state?.from?.pathname || '/'
   const handleSignInGoogle =()=>{
       signInWithGoogle()
       .then(()=>{
           navigate(from, {replace:true})
       })
   }
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{marginBottom:'20px'}}>
            <button onClick={handleSignInGoogle}>Google Sign In</button>
            </div>
            <br />
            <input type="Email" name="" id="" placeholder='Your Email'/>
            <br />
            <input type="password" name="" id="" />
            <br />
            <input type="submit" value="Login" />
        </div>
    );
};

export default Login;
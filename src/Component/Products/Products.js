import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const Products = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>Who is the Man</h1>
            <h5>{user?.displayName && user.displayName}</h5>
        </div>
    );
};

export default Products;
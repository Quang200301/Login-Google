import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth} from '../Component/Config';
import React from 'react';
const Login = () => {
    const handleLogin =()=>{
        const providers = new FacebookAuthProvider();
        signInWithPopup(auth,providers)
        .then((re)=>{
            console.log(re );
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
    return (
        <div>
            <button onClick={handleLogin}>Login with Facebook</button>
        </div>
    );
};

export default Login;
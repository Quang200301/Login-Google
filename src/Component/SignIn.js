import React, { useEffect, useState } from 'react';
import { auth,provider } from './Config';
import {signInWithPopup} from "firebase/auth";
import Home from '../cpn/Home';
const SignIn = () => {
    const [value,setValue]=useState('');
    const handleClick = ()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    },[]);
    return (
        <div>
            {value?<Home/>:
            <button onClick={handleClick}> <img className='google'style={{width:"100px", height:"40px"}} src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Google_1998_logo.png'/><span>SignIn with Google</span></button>
            
            }
          
        </div>
    );
};

export default SignIn;
import React, { useState } from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import googPic from '../../../images/google.png'
import githubPic from '../../../images/github (1).png'
import fbPic from '../../../images/facebook (1).png'
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate();
    if(user){
        navigate('/home');
    }
    let errorElement;
    if(error){
        return errorElement= <p>{error}</p>
    }
    return (
       <div>
          
           <h2>{errorElement}</h2>
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-info d-block w-50 mx-auto my-2'>
                <img  src={googPic} alt=''></img>
                <span className='px-3'>Google SignIn</span>
            </button>
        </div>
    );
};

export default SocialLogin;
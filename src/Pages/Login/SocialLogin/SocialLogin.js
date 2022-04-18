import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import googPic from '../../../images/google.png'
import githubPic from '../../../images/github (1).png'
import fbPic from '../../../images/facebook (1).png'

const SocialLogin = () => {
    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const [signInWithGoogle, user3, loading3, error3] = useSignInWithGoogle(auth);
    let errorElement;
    if(error || error2 || error3){
       return  errorElement=<p>{error} {error2} {error3}</p>
    }
    return (
       <div>
           {errorElement}
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-info d-block w-50 mx-auto my-2'>
                <img  src={googPic} alt=''></img>
                <span className='px-3'>Google SignIn</span>
            </button>
            <button
                onClick={()=>signInWithFacebook()}
                className='btn btn-info d-block w-50 mx-auto my-2'>
                <img height={'40px'} src={fbPic} alt=''></img>
                <span className='px-3'>FaceBook</span>
            </button>
            <button
                onClick={() => signInWithGithub()}
                className='btn btn-info d-block w-50 mx-auto my-2'>
                <img className='ms-3' height={'40px'} src={githubPic} alt=''></img>
                <span className='px-3'>Github SignIn</span>
            </button>
        </div>

    
    );
};

export default SocialLogin;
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {
    const [name, setName] = useState('');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [agree, setArgree] = useState(false);
    //create user hook
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
      const navigate=useNavigate();
      const location=useLocation();
    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleEmailBlur = event => {
        SetEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        SetPassword(event.target.value);
    }

    const handleRegister = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
        console.log(email, password);
    }
    if (user) {
        console.log('user creeatrerd');
        console.log(user);
        navigate('/home')
        
    } else {
        console.log('sorry ')
    }

    const handleAgree = () => {
        setArgree(!agree)
    }
    return (
        <div className='register-form'>
            <h2 className='text-primary text-center mt-3'>Please Register</h2>
            <form onSubmit={handleRegister} className='mt-3'>
                <input type='text' onBlur={handleNameBlur} name='name' id='' placeholder='Your Name'></input><br />
                <input type='email' onBlur={handleEmailBlur} name='email' id='' placeholder='Your Email Address' required></input><br />
                <input type='password' onBlur={handlePasswordBlur} name='password' id='' placeholder='Set Your Password' required></input><br />
                <input onClick={handleAgree} type='checkbox' name='terms' id='terms'></input>
                {/* <label className={agree?'text-primary':'text-danger'} htmlFor='terms'> Accept terms and condition</label> */}
                <label className={`ps-2 ${agree ? 'text-primary' : ' '}`} htmlFor='terms'> Accept terms and condition</label>
                <input disabled={!agree} className='w-50 mx-auto btn btn-primary mt-2' type='submit' value='Register'></input>
            </form>
            <p>Already Registered? <Link to='/login' className='pe-auto text-primary text-decoration-none'>Login</Link> </p>
            <h1 className='text-center text-secondary'>Or</h1>
           <div>
           <SocialLogin></SocialLogin>
           </div>
        </div>

    );
};

export default Register;
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    //sing in state
    const [
        signInWithEmailAndPassword,
        user2,
        loading2,
        error2,
      ] = useSignInWithEmailAndPassword(auth);
    const [user, loading, error] = useAuthState(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    //state for email,password & error
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');

    const handleEmailBlur = event => {
        SetEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        SetPassword(event.target.value);
    }
    const handleLogin = event => {
        event.preventDefault();
        console.log(email, password)
        signInWithEmailAndPassword(email, password);
    }
    const navigate=useNavigate();
    const location=useLocation();
    console.log(location.state);
    // let from = location.state?.from?.pathname || "/";
    // console.log(from);
    if(user){
    navigate('/cheakOut')
        }
    // const location=useLocation();
//    let from=location?.state?.pathname || "/"
    // useEffect(()=>{
    //     if(user){
    //         navigate(from);
    //     }
    // },[user])
    const resetPassword = async () => {
        await sendPasswordResetEmail(email);
        if (email === '') {
            alert('enter your email')
        }
    }
    let errorElement;
    if (error) {
        errorElement=
            <>
                <p className='text-danger'>{error.message}</p>
            </>
    }
    if (loading) {
        return <p>loading</p>
    }
    
    return (
        <div className='text-center'>
            <h2 className='text-primary mt-5'>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='w-50 mx-auto mt-5' onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='w-50 mx-auto mt-5' onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>
                {errorElement}
                <Button variant="primary d-block w-50 mx-auto mb-2" type="submit">
                    Login
                </Button>
            </Form>
            <p>Already Create an account? <Link to='/register' className='pe-auto text-primary text-decoration-none'>Register now</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
            <h1 className='text-secondary mt-5 mb-5'>Or</h1>
            <SocialLogin></SocialLogin>
        </div>
        
    );
};

export default Login;
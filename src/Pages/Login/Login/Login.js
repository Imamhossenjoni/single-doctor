import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {

    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state.form.pathname || '/';
    return (
        <div className='text-center'>
            <h2 className='text-primary'>Please Login</h2>
            <form>
            <input className='' type='email' placeholder='Enter Your Email'></input><br/>
            <input className='mt-2 w-50' type='password' placeholder='Enter Your password'></input><br/>
            <button className='btn btn-primary mt-2'>Login</button>
            </form>
        </div>
    );
};

export default Login;
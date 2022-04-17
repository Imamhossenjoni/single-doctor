import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';

const PrivatePage = () => {
    const {serviceId}=useParams();
    return (
        <div className='text-center orange mt-3'>
            <h2 className='text-center'>WelCome to Service:{serviceId}</h2>
            <p className='blue'>Take my crodial love. At first, I wanna giving thanks you for come here and selected me for solve your issue</p>
            <p className='blue fs'>Please Click the this button and take my Service</p>
            <Link to='/cheakOut'>
                <button className='btn btn-primary'>Go to Service</button> 
            </Link>
        </div>
    );
};

export default PrivatePage;
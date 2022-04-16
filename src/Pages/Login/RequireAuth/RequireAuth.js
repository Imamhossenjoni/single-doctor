import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const RequireAuth = ({ childred }) => {
    const navigate = useNavigate();
    const location = useLocation();
    // if (!user) {
    //   return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    // }
    return childred;
};

export default RequireAuth;
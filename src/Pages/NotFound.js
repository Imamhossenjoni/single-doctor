import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center text-danger'>
            <h1>404</h1>
            <h2>Your search result didn't match with route.</h2>
            <p className='text-orange'>Please Try again</p>
        </div>
    );
};

export default NotFound;
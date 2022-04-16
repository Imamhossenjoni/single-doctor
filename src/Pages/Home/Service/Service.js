import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {img,about,name,price}=service;
    return (
        <div className='service-container text-center mx-auto'>
            <img src={img} alt=''></img>
            <div className='service-info'>
            <h4 className=''>Name:{name}</h4>
            <h4><span className='text-primary'>Price:</span>{price}</h4>
            <p><span className='text-primary'>Description:</span>{about}</p>
            <button className='btn btn-primary '>Service Now</button>
            </div>
        </div>
    );
};

export default Service;
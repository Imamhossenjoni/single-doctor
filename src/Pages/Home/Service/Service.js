import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { img, about, name, price,id } = service;
    const navigate=useNavigate();
    const handleNavigateToDetails=(id)=>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container text-center mx-auto'>
            <img src={img} alt=''></img>
            <div className='service-info'>
                <p className='text-left'><span className='text-success fs-2'>Name:</span><span className='name'>{name}</span></p>
                <h4><span className='text-primary'>Price:</span><span className='orange'>{price}</span></h4>
                <p><span className='text-primary'>Description:</span>{about}</p>
            </div>
            <button className='btn btn-primary' onClick={()=>handleNavigateToDetails(id)}>Service Now</button>
        </div>
    );
};
export default Service;
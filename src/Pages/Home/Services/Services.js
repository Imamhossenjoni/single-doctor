import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services])
    return (
        <div className='container mx-auto'>
            <h2 className='text-center'>SERVICES</h2>
            <p className='text-center'>CHECK HERE HOW CAN I HELP YOU</p>
            <div className='services-container row'>
                {
                    services.map(service => <Service
                        key={service.id} service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
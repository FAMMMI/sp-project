import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h1 className='font-bold text-secondary text-4xl text-center'>Our Courses</h1>
            <div className='grid grid-cols-3 gap-4 mx-10 my-10'>
                {
                    services?.map(service => <Service
                        key={service.id}
                        service={service}
                    >

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;
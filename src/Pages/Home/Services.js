import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Service from './Service';
import ServiceDetails from './ServiceDetails';

const Services = () => {
    // const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`services.json`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h1 className='font-bold text-secondary text-4xl text-center'>Our Courses</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-10 my-10'>
                {
                    services?.map(service => <Service
                        key={service.id}
                        service={service}
                        setCourse={setCourse}
                    >

                    </Service>)
                }
            </div>
            {
                course && <ServiceDetails
                    course={course}
                    setCourse={setCourse}
                ></ServiceDetails>
            }
        </div>
    );
};

export default Services;
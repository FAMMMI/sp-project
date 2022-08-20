import React, { useEffect, useState } from 'react';
import Expert from './Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch(`experts.json`)
            .then(res => res.json())
            .then(data => setExperts(data));
    }, [])
    return (
        <div>
            <h1 className='font-bold text-secondary text-4xl text-center'>Our Experts</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-10 my-10'>
                {
                    experts?.map(expert => <Expert
                        key={expert.id}
                        expert={expert}

                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;
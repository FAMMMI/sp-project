import React from 'react';
import { Link } from 'react-router-dom';

const Details = () => {
    return (
        <div className='px-auto'>
            <p className='text-2xl font-semibold px-10 py-10'>We have more than <b className='text-3xl font-bold text-velvet'>60+ courses</b>  and a lots of resources on various subjects and topics which may be help you to grow up as a good learner and a complete engineer. We also have many <b className='text-3xl font-bold text-velvet'>experts</b>  who can help you to solve problems . Also we have more than <b className='text-3xl font-bold text-velvet'>200+ tasks and assignments</b> to develop your skills. <br></br>

            </p>

            <Link to="/services" className='btn btn-secondary rounded font-bold text-white my-6 mx-10 px-10'>Learn with us !</Link>
        </div>
    );
};

export default Details;
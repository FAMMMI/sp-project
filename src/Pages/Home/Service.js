import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Service = ({ service, setCourse }) => {
    const { id, name, price, Description, img } = service;
    const [user, loading] = useAuthState(auth);

    return (

        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10 ">
                <img src={img} alt="Shoes" class="rounded-xl w-250px h-50px" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p className='font-bold'>${price}</p>
                <p className='px-10'>{Description}</p>

                {
                    user ? <label

                        onClick={() => setCourse(service)}
                        htmlFor="booking-modal" className="btn btn-secondary  text-white uppercase bg-gradient-to-r from-secondary to-primary btn-sm">Enroll Now</label> : <Link to="/login" className='btn btn-secondary text-white text-bold text-xl text-velvet'>Please Login to enroll</Link>
                }

            </div>

        </div>


    );
};

export default Service;
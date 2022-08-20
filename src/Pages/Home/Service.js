import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service, setCourse }) => {
    const { id, name, price, Description, img } = service;
    const navigate = useNavigate();
    const navigateToDetails = id => {
        navigate(`/service/${id}`);
    }
    return (

        <div class="card w-96 h-full bg-base-100 shadow-xl">
            <figure class="px-10 pt-10 ">
                <img src={img} alt="Shoes" class="rounded-xl w-250px h-50px" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p className='font-bold'>${price}</p>
                <p className='px-10'>{Description}</p>
                <div >
                    <label

                        onClick={() => setCourse(service)}

                        htmlFor="booking-modal" className="btn btn-secondary  text-white uppercase bg-gradient-to-r from-secondary to-primary btn-sm">Enroll Now</label>
                </div>
            </div>

        </div>


    );
};

export default Service;
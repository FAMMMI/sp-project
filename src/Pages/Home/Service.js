import React from 'react';

const Service = ({ service }) => {
    const { name, price, Description, img } = service;
    return (

        <div class="card w-96 h-full bg-base-100 shadow-xl">
            <figure class="px-10 pt-10 ">
                <img src={img} alt="Shoes" class="rounded-l w-250px h-50px" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p className='font-bold'>${price}</p>
                <p className='px-10'>{Description}</p>
                <div class="items-center">
                    <button class="btn btn-secondary text-white">Enroll Now</button>
                </div>
            </div>

        </div>


    );
};

export default Service;
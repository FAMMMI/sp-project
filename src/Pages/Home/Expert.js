import React from 'react';
import { useNavigate } from 'react-router-dom';

const Expert = ({ expert }) => {
    const { id, name, img, background } = expert;

    return (

        <div class="card w-96 h-full bg-base-100 shadow-xl">
            <div class="avatar">
                <div class="w-24 mx-auto my-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} />
                </div>
            </div>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p className='font-bold'>{background}</p>

            </div>

        </div>


    );
};

export default Expert;
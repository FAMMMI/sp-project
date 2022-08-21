import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
const ServiceDetails = ({ course, setCourse, refetch }) => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    const { id, name, price, Description, img } = course;
    const handleBooking = event => {
        event.preventDefault();

        // navigate(`/servicedetails/${id}`);
        toast.success(`Successfully enrolled for ${name} and $${price} is paid`)
        refetch();
        setCourse(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary pb-4 text-center">Booking for {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 justify-items-center '>
                        <img className='rounded-xl my-6' src={img} alt="" />
                        <input type="text" name="name" disabled readOnly value={name} className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="name" disabled readOnly value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="email" disabled readOnly value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="name" disabled readOnly value={price} className="input input-bordered w-full max-w-xs" />
                        <input type="Submit" value="Pay" className="btn btn-secondary text-white w-full max-w-xs" />
                    </form>

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ServiceDetails;
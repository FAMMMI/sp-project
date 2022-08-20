import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
// import './Register.css';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import SocialLogin from '../Login/SocialLogin';
// import { Card } from 'react-bootstrap';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (
        <div class="card w-96 bg-base-100 shadow-xl my-10 mx-auto">
            <p className='registration-header mt-4 mb-3 text-center'>Welcome To Massive Lift-Up</p>
            <div className='login-signup-container'>
                <div className='register-form'>
                    <h2 className='register-header' style={{ textAlign: 'center' }}>Please Register</h2>
                    <form className='card-body items-center text-center' onSubmit={handleRegister}>
                        <div className="input-group form-control">
                            <label className='label' htmlFor='name'>
                                <span className="label-text">Name</span>
                            </label>
                            <input className='input input-bordered' type="name" name="name" required />
                        </div>
                        <div className="input-group form-control">
                            <label className='label' htmlFor='email'>
                                <span className="label-text">Email</span>
                            </label>
                            <input className='input input-bordered' type="email" name="email" required />
                        </div>
                        <div className="input-group form-control">
                            <label className='label' htmlFor='address'>
                                <span className="label-text">Address</span>
                            </label>
                            <textarea className='input input-bordered' type="text" name="address" required />
                        </div>
                        <div className="input-group form-control">
                            <label className='label' htmlFor='phone'>
                                <span className="label-text">Phone</span>
                            </label>
                            <input className='input input-bordered' type="number" name="phone" required />
                        </div>
                        <div className="input-group form-control">
                            <label className='label' htmlFor='password'>
                                <span className="label-text">Password</span>
                            </label>
                            <input className='input input-bordered' type="password" name="password" />
                        </div>
                        <div className="input-group form-control">
                            <label className='label' htmlFor='confirmPassword'>
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input className='input input-bordered' type="password" name="confirmPassword" required />
                        </div>
                        <div className='flex gap-2'>
                            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                            <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions</label>
                        </div>
                        <input
                            disabled={!agree}
                            className='w-50 mx-auto btn  mt-2 register-btn'
                            type="submit"
                            value="Sign Up" />


                    </form>
                    <p className='text-center d-flex'>
                        Already have an account? <Link className='form-link ' to='/login'><span className='text-primary'>Login</span></Link>
                    </p>
                    <SocialLogin></SocialLogin>

                </div>
            </div>
        </div>
    );
};

export default Register;
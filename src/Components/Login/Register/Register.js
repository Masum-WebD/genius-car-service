import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [email , setEmail]=useState()
    const [password , setPassword]=useState()
    const [ 
        createUserWithEmailAndPassword,
         user,
    ]=useCreateUserWithEmailAndPassword(auth)
    const navigate= useNavigate()
    if(user) {
        navigate('/home')
    }
    const handleRegister=(event) => {
        event.preventDefault();
        navigate('/login')
    }
    return (
        <div className='register-container'>
            <h2 className='text-center text-primary'>Please Register</h2>
            <form onClick={() => createUserWithEmailAndPassword(email, password)} className="register">
                <label htmlFor="Name"> Your Name </label>
                <input type="text"  placeholder="Name"/>
                <label htmlFor="Name" > Email </label>
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" required />
                <label htmlFor="Name" placeholder='password' required> Password </label>
                <input  onChange={(e) => setPassword(e.target.value)} type="text"placeholder='password' required />
                <input  className="bg-primary register-btn" type="button" value="Register " />
                <p className='text-center'>Already have a account? <Link to='/login' onClick={handleRegister} className=' text-decoration-none text-danger pe-auto'>Please Register</Link></p>
            </form>
            <SocialLogin></SocialLogin>
            
        </div>
    );
};

export default Register;
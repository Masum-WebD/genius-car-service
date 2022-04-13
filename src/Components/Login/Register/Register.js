import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate= useNavigate()
    const handleRegister=(event) => {
        event.preventDefault();
        navigate('/login')
    }
    return (
        <div className='register-container'>
            <h2 className='text-center text-primary'>Please Register</h2>
            <form className="register">
                <label htmlFor="Name"> Your Name </label>
                <input type="text"  placeholder="Name"/>
                <label htmlFor="Name" > Email </label>
                <input type="text" placeholder="Email" required />
                <label htmlFor="Name" placeholder='password' required> Password </label>
                <input type="text"placeholder='password' required />
                <input className="bg-primary register-btn" type="button" value="Register " />
                <p className='text-center'>Already have a account? <Link to='/login' onClick={handleRegister} className=' text-decoration-none text-danger pe-auto'>Please Register</Link></p>
            </form>
            
        </div>
    );
};

export default Register;
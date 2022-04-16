import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate=useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const handleLoginPage=event=>{
        event.preventDefault();
        const email= emailRef.current.value
        const password= passwordRef.current.value
        signInWithEmailAndPassword(email,password);
    }
    if(user){
      navigate(from, { replace: true });
    }
    if(loading){
      return <Loading></Loading>
  }
    let errorMessage;
    if (error) {
      errorMessage=
        <div>
          <p style={{color: 'red'}}>Error: {error?.message}</p>
        </div>
     
    }
    const handleReg=()=>{
        navigate('/register')
    }
    const handleResetPass=async ()=>{
      const email= emailRef.current.value;
      if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
      }else{
       toast('Please enter your email address')
      }
      
      
     
    }
  return (
    <div className='w-50 mx-auto mt-4 '>
      <h2 className='text-center text-primary'>Please Login</h2>
      <Form onSubmit={handleLoginPage}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Button className='w-50 mx-auto d-block mb-2 p-2 fs-5' variant="primary" type="submit">
         Login
        </Button>
        {errorMessage}
        <p className='text-center'>New to Genius car? <Link to='/register' onClick={handleReg} className='text-danger pe-auto'>Please Register</Link></p>
        <p className=' text-center'>Forget password? <button  onClick={handleResetPass} className='btn btn-link text-primary pe-auto'>Reset password</button></p>
      </Form>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;

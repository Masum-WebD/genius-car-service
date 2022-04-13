import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const handleLoginPage=event=>{
        event.preventDefault();
        const email= emailRef.current.value
        const password= passwordRef.current.value
        console.log(email,password);
    }
    const handleReg=()=>{
        navigate('/register')
    }
  return (
    <div className='w-50 mx-auto mt-4 '>
      <h2 className='text-center text-primary'>Please Login</h2>
      <Form onSubmit={handleLoginPage}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p className='text-center'>New to Genius car? <Link to='/register' onClick={handleReg} className='text-danger pe-auto'>Please Register</Link></p>
      </Form>
    </div>
  );
};

export default Login;

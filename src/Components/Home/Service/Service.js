import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id,img,description,name,price} = service

    const navigate =useNavigate()

    const handleServiceDetails=id=>{
        navigate(`/service/${id}`)
    }

    return (
        <div className='service-container'>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <h4>Price: {price}</h4>
            <p className='w-75'>{description}</p>
            <button onClick={()=>handleServiceDetails(id)} className='bg-primary'>Book:{name}</button>
        </div>
    );
};

export default Service;
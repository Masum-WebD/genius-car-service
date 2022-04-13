import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {img,description,name,price} = service
    return (
        <div className='service-container'>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <h4>{price}</h4>
            <p className='w-75'>{description}</p>
        </div>
    );
};

export default Service;
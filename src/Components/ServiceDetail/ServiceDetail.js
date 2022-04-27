import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

const ServiceDetail = () => {
    const {serviceId}=useParams()
    const [service,setService]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/service/${serviceId}`)
        .then(res=>res.json())
        .then(data =>setService(data))

    },[])
    return (
        <div>
            <h2>Item Details page:{service.name}</h2>
            <div className="text-center">
                <Link to='/checkOut' className="btn btn-primary text-decoration-none">GO Check out</Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
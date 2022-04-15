import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams()
    return (
        <div>
            <h2>Item Details page:{serviceId}</h2>
            <div className="text-center">
                <Link to='/checkOut' className="btn btn-primary text-decoration-none">GO Check out</Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
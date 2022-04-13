import React from 'react';

const Expart = ({expert}) => {
    const {img,name,}=expert
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Expart;
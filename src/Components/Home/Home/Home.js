import React from 'react';
import Experts from '../Exparts/Exparts';
import Services from '../Services/Services';
import SlideShow from '../SlideShow/SlideShow';

const Home = () => {
    return (
        <div>
            <SlideShow></SlideShow>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;
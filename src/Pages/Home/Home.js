import React from 'react';
import About from '../About/About';
import Banner from './Banner';
import Details from './Details';
import Experts from './Experts';
import Services from './Services';
import Title from './Title';

const Home = () => {
    return (
        <div className=''>
            <Title></Title>
            <Banner></Banner>
            <Details></Details>
            <Services></Services>
            <Experts></Experts>
            <About></About>
        </div>
    );
};

export default Home;
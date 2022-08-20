import React from 'react';
import Banner from './Banner';
import Details from './Details';
import Services from './Services';
import Title from './Title';

const Home = () => {
    return (
        <div className=''>
            <Title></Title>
            <Banner></Banner>
            <Details></Details>
            <Services></Services>
        </div>
    );
};

export default Home;
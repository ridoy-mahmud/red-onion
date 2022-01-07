import React from 'react';
import Facility from '../Facility/Facility';
import Dinner from '../Foods/Dinner/Dinner';
import Lunch from '../Foods/Lunch/Lunch';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Lunch></Lunch>
            <Dinner></Dinner>
            <Facility></Facility>
        </div>
    );
};

export default Home;
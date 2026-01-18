import React from 'react';
import HeroSection from './HeroSection';
import Test from './Test';
import PopulerMovies from './PopulerMovies';
import Upcomming from './Upcomming';

const Home = () => {
    return (
        <div className='bg-[#090833]'>
            <HeroSection />
            <Test />
            <PopulerMovies />
            <Upcomming />
        </div>
    );
};

export default Home;
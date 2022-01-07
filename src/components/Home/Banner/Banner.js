import React from 'react';
import bgimg from "../../../Images/bannerbackground.png"
import "./Banner.css"
const Banner = () => {
    return (
        <div>
            <img className='w-100' src={bgimg} alt="" />
        </div>
    );
};

export default Banner;
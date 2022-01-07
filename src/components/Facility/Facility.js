import React from 'react';
import "./Facility.css";
import img1 from "../../Images/Image-e/adult-blur-blurred-background-687824.png";
import img2 from "../../Images/Image-e/chef-cook-food-33614.png";
import img3 from "../../Images/Image-e/architecture-building-city-2047397.png"
import icon1 from "../../Images/ICON/Group 204.png"
import icon2 from "../../Images/ICON/Group 1133.png"
import icon3 from "../../Images/ICON/Group 245.png"

const Facility = () => {
    return (
        <div className='container mt-4'>
            <div className='d-flex justify-content-center mb-5'>
                <button className='check-btn'>Checkout Your Foods</button>
            </div>
            <h3 className='fw-bold mb-4'>Why you choose us</h3>
            <p className='w-75 mb-4'> <small>We bring our diverse background of advertising, design, branding, public relations, research and strategic planning to work for your company. Not only will your materials look great – they will get results.Yes, we have won awards for our work. But we don’t create concepts in a vacuum – they fit into the standards.</small> </p>
            {/* <div className='d-flex justify-content-between w-100 mt-4'> */}
            <div className='row'>
                <div className=' col-sm-4'>
                    <img className='img-fluid' src={img1} alt="" />
                    <div className='d-flex mt-3 mb-3'>
                        <img src={icon1} alt="" />
                        <h5 className='ms-2 my-auto'>Fast Delivery</h5>
                    </div>
                    <p className='w-100'><small className=''>We bring our diverse background of advertising, design, branding, public relations, research and strategic planning to work for your company. Not only will your materials look great – they will get results</small></p>
                </div>
                <div className=' col-sm-4'>
                    <img className='img-fluid' src={img2} alt="" />
                    <div className='d-flex mt-3 mb-3'>
                        <img src={icon2} alt="" />
                        <h5 className='ms-2 my-auto'>A good auto responder</h5>
                    </div>
                    <p className='w-100'><small>We bring our diverse background of advertising, design, branding, public relations, research and strategic planning to work for your company. Not only will your materials look great – they will get results</small></p>
                </div>
                <div className='col-sm-4'>
                    <img className='img-fluid' src={img3} alt="" />
                    <div className='d-flex mt-3 mb-3'>
                        <img src={icon3} alt="" />
                        <h5 className='ms-2 my-auto'>Home Delivery</h5>
                    </div>
                    <p className='w-100'><small>We bring our diverse background of advertising, design, branding, public relations, research and strategic planning to work for your company. Not only will your materials look great – they will get results</small></p>
                </div>
            </div>
        </div>
    );
};

export default Facility;
import React from 'react';
import "./Footer.css";
import img1 from "../../../Images/logo.png"

const Footer = () => {
    return (
        <div className='footer-b row mt-5'>
            <div className='item1 col-sm-7'>
                <div className=''>
                    <img className='logo1 mt-4 ms-5' src={img1} alt="" />
                </div>
                <div className=''>
                    <p><small className='ms-5 text-white'>© Copyright Agency and contributors 2022.</small></p>
                </div>
            </div>
            <div className='col-sm-5 d-flex mt-4 mb-4'>
                <div>
                    <ul style={{ listStyleType: "none", fontFamily: "arial", lineHeight: "2.2" }} className='text-white'>
                        <li><small>About online foods </small></li>
                        <li><small>Read out Blogs </small></li>
                        <li><small>Sign up to Deliver</small></li>
                        <li><small>Add your Restourent</small></li>
                    </ul>
                </div>
                <div className=''>
                    <ul style={{ listStyleType: "none", fontFamily: "arial", lineHeight: "2.2" }} className='text-white'>
                        <li><small>About online foods </small></li>
                        <li><small>Read out Blogs </small></li>
                        <li><small>Sign up to Deliver</small></li>
                        <li><small>Add your Restourent</small></li>
                    </ul>
                    {/* <p className='text-white mb-3 fw-normal'><small>Serach for the service you want to know...</small></p> */}
                    {/* <input className='p-1' type="text" /> <button className='btn btn-danger'>Search</button> */}
                    <div className='text-white d-flex mt-4'>
                    <p><small>Privacy</small></p>
                    <p className='ms-4'><small>@Copyright</small></p>
                    <p className='ms-4'><small>Terms and Conditions</small></p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
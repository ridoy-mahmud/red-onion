import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from "../../../Images/logo2.png"
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='d-flex w-100 container justify-content-between my-3'>
            <div>
                <Link to="/home"><img  style={{width:"165px"}} src={pic1} alt="" /></Link>
            </div>
            <div>
                <Link className='text-black'><FontAwesomeIcon icon={faCartPlus} /></Link>
                <Link to="/login" className='me-4 ms-4 fw-bold text-black text-decoration-none '>Login</Link>
                <Link to="/signup" className='me-4 fw-bold text-black text-decoration-none '>
                    <button className='btn btn-danger'>Signup</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
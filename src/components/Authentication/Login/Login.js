import React from 'react';
import "./Login.css"

const Login = () => {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className="card22 p-3">
                <div className="card-body ms-4 mt-3">
                    <h3 className="card-title mb-4">Please <span className='text-danger'>Login</span> Here</h3>
                    <h6>Email</h6>
                    <input className='mb-4 p-2' type="text" placeholder='Enter your email' />
                    <h6>Password</h6>
                    <input className='mb-5 p-2' type="password" placeholder='Enter your password' />
                    <div>
                        <button className='btn btn-danger me-2'>Login</button>
                        <button className='btn btn-outline-danger'>Google Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
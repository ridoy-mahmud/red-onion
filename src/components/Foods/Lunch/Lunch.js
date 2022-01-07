import React from 'react';
import "./Lunch.css"
import img1 from "../../../Images/lunch/lunch1.png"
import img2 from "../../../Images/lunch/lunch2.png"
import img3 from "../../../Images/lunch/lunch3.png"
import img4 from "../../../Images/lunch/lunch4.png"
import img5 from "../../../Images/lunch/lunch5.png"
import img6 from "../../../Images/lunch/lunch6.png"

const Lunch = () => {
    return (
        <div>
            <h4 className='text-center mt-5 fw-bold mb-3'>Some Of Our Lunch Items</h4>
            <div className='d-flex justify-content-around  mt-3 row'>
                <div className="card2 col-sm-1 col-lg-4 px-4 pt-3 " style={{ width: "18rem" }}>
                    <img className="card-img-top" src={img1} alt="" />
                    <div className="card-body">
                        <p className='fw-bold text-center'>Healty meal plan</p>
                        <p className='fw-small text-center'> <small>How we dream about our future</small> </p>
                        <h4 className='fw-bold text-center'>$25.76</h4>
                    </div>
                </div>
                <div className="card2 col-sm-1 col-lg-4 px-4 pt-3 " style={{ width: "18rem" }}>
                    <img className="card-img-top" src={img2} alt="" />
                    <div className="card-body">
                        <p className='fw-bold text-center'>Fried Chiken Bento</p>
                        <p className='fw-small text-center'> <small>How we dream about our future</small> </p>
                        <h4 className='fw-bold text-center'>$25.76</h4>
                    </div>
                </div>
                <div className="card2 col-sm-1 col-lg-4 px-4 pt-3 " style={{ width: "18rem" }}>
                    <img className="card-img-top" src={img3} alt="" />
                    <div className="card-body">
                        <p className='fw-bold text-center'>Taragon-Rubbed-Salamon</p>
                        <p className='fw-small text-center'> <small>How we dream about our future</small> </p>
                        <h4 className='fw-bold text-center'>$6.90</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lunch;
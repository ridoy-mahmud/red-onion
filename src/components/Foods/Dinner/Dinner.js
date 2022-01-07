import React from 'react';
import "./Dinner.css"
import img1 from "../../../Images/Dinner/dinner1.png"
import img2 from "../../../Images/Dinner/dinner2.png"
import img3 from "../../../Images/Dinner/dinner3.png"
import img4 from "../../../Images/Dinner/dinner4.png"
import img5 from "../../../Images/Dinner/dinner5.png"
import img6 from "../../../Images/Dinner/dinner6.png"

const Dinner = () => {
    return (
        <div>
            <h4 className='text-center mt-5 fw-bold mb-3'>Some Of Our Dinner Items</h4>
            <div className='d-flex justify-content-around  mt-3 row'>
                <div className="card2 col-sm-1 px-4 pt-3 " style={{ width: "18rem" }}>
                    <img className="card-img-top" src={img1} alt="" />
                    <div className="card-body">
                        <p className='fw-bold text-center'>Healty meal plan</p>
                        <p className='fw-small text-center'> <small>How we dream about our future</small> </p>
                        <h4 className='fw-bold text-center'>$25.76</h4>
                    </div>
                </div>
                <div className="card2 col-sm-1 px-4 pt-3" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={img2} alt="" />
                    <div className="card-body">
                        <p className='fw-bold text-center'>Fried Chiken Bento</p>
                        <p className='fw-small text-center'> <small>How we dream about our future</small> </p>
                        <h4 className='fw-bold text-center'>$25.76</h4>
                    </div>
                </div>
                <div className="card2 col-sm-1 px-4 pt-3" style={{ width: "18rem" }}>
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

export default Dinner;
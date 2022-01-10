import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    <div className="col-md-12">
                        <h3 className="title text-center fw-bold">
                            Best foods wating for your bally
                        </h3>

                        <div className="input-group mb-3 mt-4 w-25 mx-auto ">
                            <input style={{ borderRadius: "30px 0px 0px 30px" }} type="text" className="form-control p-2" placeholder="Search for foods" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <span style={{ borderRadius: "0px 30px 30px 0px" }} className="input-group-text p-2 search-b  btn-danger" id="basic-addon2">Search</span>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-md-12"></div> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;
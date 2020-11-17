import React from 'react';
import './ChooseUs.css';
import img1 from '../../../resources/Images/Group 87.png';
import img2 from '../../../resources/Images/Group 88.png';
import img3 from '../../../resources/Images/gift-2.png';

const ChooseUs = () => {
  return (
    <div className="container workOut">
            <h3 className="d-flex justify-content-center choose">WHY <span className="text-warning">CHOOSE US</span></h3>
            <div className="row ">
                <div className="col-md-4">
                    <div className="card text-center ">
                        <div className="card-body d-flex align-items-center cardStyle ">
                            <div>
                                <img src={img1} alt="" />
                                <h6 className="text-black card-title">FREE FITNESS TRAINING</h6>
                                <p className="text-black">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body d-flex align-items-center cardStyle">
                            <div>
                                <img src={img2} alt="" />
                                <h6 className="card-title text-warning">TONS OF CARDIO AND STRENTH</h6>
                                <p className="text-black">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body d-flex align-items-center cardStyle">
                            <div>
                                <img src={img3} alt="" />
                                <h6 className="text-black card-title">NO COMMITMENT MEMBERSHIPS</h6>
                                <p className="text-black">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default ChooseUs;
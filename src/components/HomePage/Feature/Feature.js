import React from 'react';
import './Feature.css';
import img1 from '../../../resources/Images/Group 80.png';
import img2 from '../../../resources/Images/Group 81.png';
import img3 from '../../../resources/Images/Group 82.png';

const Workout = () => {
    return (
        <div className="container workOut d-flex align-items-center">
            <div className="row ">
                <div className="col-md-4">
                    <div className="card text-center ">
                        <div className="card-body img-1 d-flex align-items-center ">
                            <div>
                                <img src={img1} alt="" />
                                <h2 className="card-title">PROGRESSION</h2>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body img-2 d-flex align-items-center">
                            <div>
                                <img src={img2} alt="" />
                                <h2 className="card-title text-warning">WORKOUT</h2>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body img-3 d-flex align-items-center">
                            <div>
                                <img src={img3} alt="" />
                                <h2 className="card-title">NUTRITION</h2>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Workout;
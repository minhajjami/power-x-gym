import React from "react";
import "./OurClasses.css";
import firstTraining from "../../../resources/Images/01 phsco Training.png";
import CardioTraining from "../../../resources/Images/cardio Traning.jpg";
import selfDefence from "../../../resources/Images/rsz_self_defence.jpg";
import advanceGym from "../../../resources/Images/rsz_advance_gym.jpg";
import strengthTraining from "../../../resources/Images/rsz_strength_traning.jpg";
import lastTraining from "../../../resources/Images/phsco training.jpg";
import Navbar from "../../HomePage/Navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";

const OurClasses = () => {
  return (
    <>
      <Navbar />
      <section className="container py-5">
        <div className="card-deck mb-4">
          <div className="card">
            <img className="card-img-top" src={firstTraining} alt="" />
            <div className="card-footer">
              <button className="btn-warning btn">PHYCHO TRAINING</button>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={selfDefence} alt="" />
            <div className="card-footer">
              <button className="btn-warning btn">SELF DEFENCE</button>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={advanceGym} alt="" />
            <div className="card-footer">
              <button className="btn-warning btn">ADVANCE GYM</button>
            </div>
          </div>
        </div>
        <div className="card-deck">
          <div className="card">
            <img className="card-img-top " src={CardioTraining} alt="" />
            <div className="card-footer">
              <button className="btn-warning btn">CARDIO TRAINING</button>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={strengthTraining} alt="" />
            <div className="card-footer">
              <button className="btn-warning btn">STRENGTH TRANING</button>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={lastTraining} alt="" />
            <div className="card-footer">
              <button className="btn-warning btn">PHYSCHO TRANING</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OurClasses;

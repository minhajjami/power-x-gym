import React from "react";
import "./TrainingSession.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../../resources/Images/bruce-mars-gJtDg6WfMlQ-unsplash.png";
import img2 from "../../../resources/Images/img2.png";
import { Link } from "react-router-dom";

const TrainingSession = () => {
  return (
    <div className="container fourth-part mt-5 mb-5">
      <h1 className="text-body text-uppercase font-weight-bold text-center mb-5">
        Training <span style={{ color: "#fcd842" }}>Programs</span>
      </h1>
      <div className="row mt-5 mb-5">
        <div className="col-md-6 textDesign">
          <img className="img-fluid" src={img1} alt="fourth-part1" />
          <Link to="/" className="text-body text-uppercase">
            Yoga training session <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="col-md-6 textDesign">
          <img className="img-fluid" src={img2} alt="fourth-part2" />
          <Link to="/" className="text-body text-uppercase">
            Cardio training session <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainingSession;

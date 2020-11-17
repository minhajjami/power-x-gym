import React from "react";
import "./Aboutus.css";
import img from "../../../resources/Images/wells-chan-H-vAxuWxmi8-unsplash.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <div className="container workOut">
        <div className="row">
          <div className="col-md-6 imgSize">
            <img src={img} alt="" />
          </div>
          <div className="col-md-6 right">
            <h1>About Us</h1>
            <h2>
              <span className="text-warning">WE ARE HERE TO DREAM!</span> <br />{" "}
              OUR TEAM IS HERE SURVE YOU.
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
              libero magnam enim fugit quibusdam iusto harum, dicta aliquam illo
              natus sapiente pariatur fugiat, dignissimos assumenda quasi est
              sed soluta voluptas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

import React from "react";
import youtube from "../../../resources/Images/bxl-youtube.png";
import fb from "../../../resources/Images/bxl-facebook.png";
import insta from "../../../resources/Images/bxl-instagram.png";
import twitter from "../../../resources/Images/bxl-twitter.png";
import whatsapp from "../../../resources/Images/bxl-whatsapp.png";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-block">
      <div className="row pt-4">
        <div className="col-3">
          <h4>
            POWER <strong className="text-yellow">X</strong>
          </h4>
        </div>
        <div className="col-2">
          <Link className="font-weight-bold" to="/">
            Need Help?
          </Link>
          <br />
          <Link to="/">Help Center</Link>
          <br />
          <Link to="/">Email Support</Link>
          <br />
          <Link to="/">Live Chat</Link>
          <br />
          <Link to="/">Gift Certificates</Link>
          <br />
          <Link to="/">Send Us Feedback</Link>
          <br />
        </div>
        <div className="col-2">
          <Link className="font-weight-bold" to="/">
            Digital Resources
          </Link>
          <br />
          <Link to="/">Articles</Link>
          <br />
          <Link to="/">E-books</Link>
          <br />
        </div>
        <div className="col-2">
          <Link className="font-weight-bold" to="/">
            Contact With Us
          </Link>
          <br />
          <Link to="/">
            <img src={youtube} alt="" />
          </Link>
          <Link to="/">
            <img src={fb} alt="" />
          </Link>
          <Link to="/">
            <img src={insta} alt="" />
          </Link>
          <Link to="/">
            <img src={twitter} alt="" />
          </Link>
          <Link to="/">
            <img src={whatsapp} alt="" />
          </Link>
          <br />
          <Link to="/">Forum</Link>
          <br />
        </div>
        <div className="col-2">
          <Link className="font-weight-bold" to="/">
            Join Our Newsletter
          </Link>
          <br />
          <p>
            Get exclusive news,features, and updates from The Shredder Weight
            Loss Academy.
          </p>
        </div>
      </div>
      <p className="text-center text-secondary">
        <small>Copyright © 2020 POWER-X</small>
      </p>
    </div>
  );
};

export default Footer;

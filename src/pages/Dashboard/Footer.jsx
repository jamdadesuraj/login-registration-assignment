import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link to="#">Web design</Link>
                  </li>
                  <li>
                    <Link to="#">Development</Link>
                  </li>
                  <li>
                    <Link to="#">Hosting</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link to="#">Web design</Link>
                  </li>
                  <li>
                    <Link to="#">Development</Link>
                  </li>
                  <li>
                    <Link to="#">Hosting</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <Link to="#">Company</Link>
                  </li>
                  <li>
                    <Link to="#">Team</Link>
                  </li>
                  <li>
                    <Link to="#">Careers</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 item text">
                <h3>suraj-jamdade.com</h3>
                <p>welcome to my company.</p>
              </div>
              <div className="col item social">
                <Link to="#">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-google"></i>
                </Link>
              </div>
            </div>
            <p className="copyright">suraj-jamdade.com © 2022</p>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;

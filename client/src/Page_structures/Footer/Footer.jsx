import "./Footer.css";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="_footer">
        <div className="_footer_1">
          <img
            src="./Project_images/Logos/barista-coffee-high-resolution-logo-transparent.png"
            className="logo"
            alt="logo"
          />
          <p className="description">
            We reside at the heart of the Chitwan district in Bharatpur city.
            Visit us for the best coffee.
          </p>
        </div>
        <div className="_footer_2">
          <span className="title">Contact Us</span>
          <span className="address">Address: Bharatpur, Chitwan</span>
          <span className="email">
            <Link
              to="mailto:Barista@gmail.com"
              target="_blank"
              aria-label="email to barista"
            >
              Email: Barista@gmail.com
            </Link>
          </span>
          <span className="phone">Phone: 056-520***</span>
        </div>
        <div className="_footer_3_4">
          <div className="_footer_3">
            <span className="title">
              <span style={{ cursor: "auto" }}>Quick Links</span>
            </span>
            <Scroll to="home" spy={true} smooth={true} className="quick-link">
              <span>Home</span>
            </Scroll>
            <Scroll to="menu" spy={true} smooth={true} className="quick-link">
              <span>Menu</span>
            </Scroll>
            <Scroll to="about" spy={true} smooth={true} className="quick-link">
              <span>About</span>
            </Scroll>
          </div>
          <div className="_footer_4">
            <span className="title">Social Links</span>
            <FaFacebook className="social-icon" style={{ cursor: "pointer" }} />
            <FaLinkedin className="social-icon" style={{ cursor: "pointer" }} />
            <FaInstagramSquare
              className="social-icon"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

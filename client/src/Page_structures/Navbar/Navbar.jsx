import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Navbar.css";
import { HiBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  // get the cart products from the store
  const cartProducts = useSelector((state) => state.products.cartProducts);

  const [isNavOpen, setIsNavOpen] = useState(true);
  const [activeLink, setActiveLink] = useState("");

  // close the open nav when touch outside the nav
  const navRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        window.innerWidth < 768
      ) {
        setIsNavOpen(false);
      }
    };

    if (isNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpen]);

  //use scroll animation
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  // update the navbar to animate on mount
  useEffect(() => {
    const isMounted = sessionStorage.getItem("isNavbar");
    if (!isMounted) {
      const navbar = document.querySelector(".navbar");
      navbar.classList.add("animate");
      sessionStorage.setItem("isNavbar", "true");
    }
  }, []);

  const toggleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleNavForSmallScreen = () => {
    if (window.innerWidth < 768) {
      setIsNavOpen(!isNavOpen);
    }
  };

  // set the active nav
  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  // update the nav based on the screen width
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsNavOpen(false);
    }
    const handleResize = () => {
      setIsNavOpen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // scroll to where you left the position. works for all the component.
  const handleScrollPosition = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  };

  return (
    <motion.div className="navbar" style={{ y }}>
      <div className="logoimage">
        <Link to="/">
          <img
            src="./Project_images/Logos/barista-coffee-high-resolution-logo-transparent.png"
            alt="logo"
          />
        </Link>
        <div className="barscross">
          {isNavOpen ? (
            <span>
              <LiaTimesSolid
                onClick={toggleNavOpen}
                style={{ fontSize: "20px" }}
              />
            </span>
          ) : (
            <span>
              <HiBars3BottomRight
                onClick={toggleNavOpen}
                style={{ fontSize: "20px" }}
              />
            </span>
          )}
        </div>
      </div>
      {isNavOpen && (
        <div className={`navcart ${isNavOpen ? "open" : ""}`} ref={navRef}>
          <div className="navtext">
            <Scroll
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              onSetActive={handleSetActive}
              activeClass={activeLink === "home" ? "active" : ""}
            >
              <span onClick={toggleNavForSmallScreen}>Home</span>
            </Scroll>
            <Scroll
              to="menu"
              spy={true}
              smooth={true}
              offset={-70}
              onSetActive={handleSetActive}
              activeClass={activeLink === "menu" ? "active" : ""}
            >
              <span onClick={toggleNavForSmallScreen}>Menu</span>
            </Scroll>
            <Scroll
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              onSetActive={handleSetActive}
              activeClass={activeLink === "about" ? "active" : ""}
            >
              <span onClick={toggleNavForSmallScreen}>About</span>
            </Scroll>
            <Scroll
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              onSetActive={handleSetActive}
              activeClass={activeLink === "contact" ? "active" : ""}
            >
              <span onClick={toggleNavForSmallScreen}>Contact</span>
            </Scroll>
          </div>
          <div className="icons" onClick={handleScrollPosition}>
            <div className="itemcount">
              <Link to="/cart">
                <IoCartOutline
                  className="carticon"
                  style={{ fontSize: "35px", cursor: "pointer" }}
                  onClick={toggleNavForSmallScreen}
                />
              </Link>
              {cartProducts.length > 0 && <span>{cartProducts.length}</span>}
            </div>
            <Link to="/giftcards">
              <button
                className="button cursor-pointer w-32 px-1 py-2 rounded-md bg-alloy hover:bg-dark-brown"
                onClick={toggleNavForSmallScreen}
              >
                Gift Cards
              </button>
            </Link>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;

import { useState, useEffect, useRef } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
  const [navopen, setNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const navRef = useRef(null);

  const cartProducts = useSelector((state) => state.products.cartProducts);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavOpen(false);
      }
    };

    if (navopen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navopen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 769) {
        setNavOpen(false);
      } else {
        setNavOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle = () => {
    setNavOpen(!navopen);
  };

  const toggleNavForSmallScreen = () => {
    if (window.innerWidth < 768) {
      setNavOpen(!navopen);
    }
  };

  // scroll to where you left the position. works for all the component.
  const handleScrollPosition = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  };

  return (
    <div className="navbar">
      <div className="nav_image">
        <img
          className="nav_logo_image"
          src="./public/Project_images/Logos/barista-coffee-high-resolution-logo-transparent.png"
        />
        <span className="bars">
          {navopen ? (
            <RxCross2
              onClick={toggle}
              style={{ fontSize: "20px", cursor: "pointer" }}
            />
          ) : (
            <FaBarsStaggered
              onClick={toggle}
              style={{ fontSize: "20px", cursor: "pointer" }}
            />
          )}
        </span>
      </div>

      <div className={`nav_links_cart ${navopen ? "open" : ""}`} ref={navRef}>
        <div className="nav_links">
          <div className="nav_links_texts">
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
          <div className="nav_cart">
            <div className="itemcount" onClick={handleScrollPosition}>
              <Link to="/cart">
                <IoCartOutline
                  className="carticon"
                  style={{ fontSize: "25px", cursor: "pointer" }}
                />
              </Link>
              {cartProducts.length > 0 && (
                <span className="products_count">{cartProducts.length}</span>
              )}
            </div>
            <Link to="/giftcards">
              <button
                className="button cursor-pointer w-32 px-1 py-2 rounded-md bg-alloy hover:bg-dark-brown"
                onClick={handleScrollPosition}
              >
                Gift Cards
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

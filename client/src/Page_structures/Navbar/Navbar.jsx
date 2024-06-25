import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { HiBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useSelector} from "react-redux";

const Navbar = () => {

    const cartProducts = useSelector(state => state.products.cartProducts);

    const [isNavOpen, setIsNavOpen] = useState(true);
    const [activeLink, setActiveLink] = useState('');

    const toggleNavOpen = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleSetActive = (to) => {
        setActiveLink(to);
    };

    useEffect(() => {
        if(window.innerWidth<768){
            setIsNavOpen(false);
        }
        const handleResize = () => {
            setIsNavOpen(window.innerWidth > 768);
        };
        window.addEventListener("resize", handleResize);
        return () => (
            window.removeEventListener("resize", handleResize)
        );
    }, []);

    return (
            <div className='navbar'>
                <div className='logoimage'>
                    <Link to="/">
                    <img src='./Project_images/Logos/barista-coffee-high-resolution-logo-transparent.png' alt='logo' />
                    </Link>
                    <div className='barscross'>
                        {isNavOpen ? (
                            <span><LiaTimesSolid onClick={toggleNavOpen} style={{ fontSize: "20px" }} /></span>
                        ) : (
                            <span><HiBars3BottomRight onClick={toggleNavOpen} style={{ fontSize: "20px" }} /></span>
                        )}
                    </div>
                </div>
                {isNavOpen && (
                    <div className='navcart'>
                        <div className='navtext'>
                            <Scroll
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                onSetActive={handleSetActive}
                                activeClass={activeLink === "home" ? 'active' : ''}
                            ><span>Home</span></Scroll>
                            <Scroll
                                to="menu"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                onSetActive={handleSetActive}
                                activeClass={activeLink === "menu" ? 'active' : ''}
                            ><span>Menu</span></Scroll>
                            <Scroll
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                onSetActive={handleSetActive}
                                activeClass={activeLink === "about" ? 'active' : ''}
                            ><span>About</span></Scroll>
                            <Scroll
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                onSetActive={handleSetActive}
                                activeClass={activeLink === "contact" ? 'active' : ''}
                            ><span>Contact</span></Scroll>
                        </div>
                        <div className='icons'>
                            <div className='itemcount'>
                                <Link to="/cart">
                                <IoCartOutline className='carticon' style={{ fontSize: "35px", cursor: 'pointer' }} />
                                </Link>
                                {cartProducts.length > 0 && (
                            <span>
                                {cartProducts.length}
                            </span>
                        )}
                            </div>
                            <Link to='/giftcards'>
                            <button className='button cursor-pointer w-32 px-1 py-2 rounded-md bg-alloy hover:bg-dark-brown'>Gift Cards</button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
    )
}

export default Navbar;
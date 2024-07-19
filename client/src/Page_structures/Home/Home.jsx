import { useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 400], [0, -200]);

  useEffect(() => {
    const isMounted = sessionStorage.getItem("isMounted");
    if (!isMounted) {
      const homeContent = document.querySelector(".home_content");
      homeContent.classList.add("animate");
      sessionStorage.setItem("isMounted", "true");
    }

    const handleScroll = () => {
      const homeContent = document.querySelector(".home_content");
      const rect = homeContent.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        controls.start({ y: -50 });
      } else {
        controls.start({ y: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const shop = () => {
    alert("Shop not available right now");
  };

  return (
    <div
      className="h-screen flex flex-row items-center justify-center text-white"
      id="home"
    >
      <div className="home_image h-full w-full flex flex-col">
        <Navbar />
        <motion.div
          className="home_content h-full w-full flex flex-col"
          style={{ y }}
        >
          <h1 className="home_h1 md:text-5xl text-4xl">
            BARISTA
            <br />
            DELICIOUS
            <br />
            COFFEE
          </h1>
          <span className="home_quote font-bold text-sm mt-3">
            Relish the flavor, taste the excellence
          </span>
          <span className="home_desc text-sm">
            Indulge in a selection from Barista's brews or savor one of our
            mouthwatering coffee creations.
          </span>
          <span className="home_buttons mt-6 flex items-center flex-row gap-4 text-sm">
            <a href="https://play.google.com/store/apps?hl=en" target="_blank">
              <button className="button cursor-pointer w-32 px-1 py-2 rounded-md bg-alloy hover:bg-dark-brown">
                Download App
              </button>
            </a>
            <span className="shop_link cursor-pointer text-sm" onClick={shop}>
              COFFEE SHOP
            </span>
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

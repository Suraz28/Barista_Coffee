import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div
      className="h-auto bg-[url('https://i.pinimg.com/564x/eb/cb/67/ebcb67be0dd2c71eb8d974a0a74a2dc4.jpg')] bg-repeat bg-center flex flex-row items-center justify-center text-white"
      id="about"
    >
      <div className="md:h-[90%] md:min-h-screen md:w-[90%] w-full bg-black rounded-md flex flex-col gap-5 p-8 md:py-10">
        <div className="_about_heading flex items-center justify-evenly gap-10 py-10 w-full h-1/4">
          <motion.img
            src="./Project_images/Logos/barista-coffee-high-resolution-logo-transparent.png"
            className="h-20"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.h1
            className="md:text-3xl md:pl-5 sm:text-2xl text-xl font-bold text-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Know the Story of Barista
          </motion.h1>
        </div>
        <div className="_about w-full items-center justify-start h-3/4">
          <div className="_about_image h-full md:w-1/2 w-full flex items-start justify-center">
            <motion.img
              src="./Project_images/Graphics/Coffee_graphic-1.jpg"
              className="h-60 rounded-md"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="_about_content h-full flex flex-col gap-5 p-4">
            <motion.p
              className="_paragraph text-sm text-justify"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Barista Coffee is more than just a coffee shop; it is a testament
              to the passion, dedication, and vision of its founders. Through
              their unwavering commitment to quality, community, and
              sustainability, they have created a brand that resonates with
              coffee lovers in Nepal and beyond.
              <br />
              <br />
              Each cup of coffee served at Barista Coffee is a celebration of
              the rich heritage of Nepali coffee and the hard work of the
              farmers in Kavrepalanchok. Whether you're a coffee connoisseur or
              a casual drinker, Barista Coffee offers an experience that is both
              enriching and unforgettable.
            </motion.p>
            <Link to="/barista_story">
              <button className="button cursor-pointer w-32 px-1 py-2 rounded-md bg-alloy hover:bg-dark-brown">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

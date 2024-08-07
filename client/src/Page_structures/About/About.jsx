import { useEffect } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const imgControls1 = useAnimation();
  const imgControls2 = useAnimation();
  const buttonControls = useAnimation();

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: false,
    threshold: 0.3, // Adjust this value to control the threshold for the paragraph
  });
  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjust this value to control the threshold for the paragraph
  });

  useEffect(() => {
    if (sectionInView) {
      controls.start("visible");
      imgControls1.start("visible");
      imgControls2.start("visible");
      buttonControls.start("visible");
    } else {
      controls.start("hidden");
      imgControls1.start("hidden");
      imgControls2.start("hidden");
      buttonControls.start("hidden");
    }
  }, [controls, imgControls1, imgControls2, buttonControls, sectionInView]);

  return (
    <div
      className="h-auto bg-[url('https://i.pinimg.com/564x/eb/cb/67/ebcb67be0dd2c71eb8d974a0a74a2dc4.jpg')] bg-repeat bg-center flex flex-row items-center justify-center text-white"
      id="about"
    >
      <div className="md:h-[90%] md:min-h-screen md:w-[90%] w-full bg-black rounded-md flex flex-col gap-5 p-8 md:py-10">
        <div
          ref={sectionRef}
          className="_about_heading flex items-center justify-evenly gap-10 py-10 w-full h-1/4"
        >
          <motion.img
            src="./Project_images/Logos/barista-coffee-high-resolution-logo-transparent.png"
            alt="logo"
            className="h-20"
            initial={{ opacity: 0, y: -100 }}
            animate={controls}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -100 },
            }}
          />
          <motion.h1
            className="md:text-3xl md:pl-5 sm:text-2xl text-xl font-bold text-center"
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
          >
            Know the Story of Barista
          </motion.h1>
        </div>
        <div className="_about w-full items-center justify-start h-3/4">
          <div className="_about_image h-full md:w-1/2 w-full flex items-start justify-center">
            <motion.img
              src="./Project_images/Graphics/Coffee_graphic-1.jpg"
              alt="coffee cup"
              className=" h-60 rounded-md"
              initial={{ opacity: 0, y: -100 }}
              animate={imgControls1}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1.5, y: 0 },
                hidden: { opacity: 0, y: -100 },
              }}
            />
          </div>
          <div className="_about_content h-full flex flex-col gap-5 p-4">
            <motion.p
              ref={paragraphRef}
              className="_paragraph text-sm text-justify"
              initial={{ opacity: 0, y: 100 }}
              animate={paragraphInView ? "visible" : "hidden"}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
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
              enriching and unforgettable....
            </motion.p>
            <Link to="/barista_story" aria-label="link to barista story">
              <motion.button
                className="button cursor-pointer w-32 px-1 py-2 rounded-md bg-alloy hover:bg-dark-brown"
                ref={buttonRef}
                initial={{ opacity: 0, y: 100 }}
                animate={buttonInView ? "visible" : "hidden"}
                transition={{ duration: 1, delay: 0.4 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100 },
                }}
              >
                Read More
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

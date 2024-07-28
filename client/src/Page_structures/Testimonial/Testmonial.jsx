import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    id: 1,
    text: "Not only is the coffee outstanding, but the service is impeccable. The barista is knowledgeable and friendly, always ready to recommend the perfect brew. The quality of the coffee beans and the precision in brewing make this place a standout. Five stars without hesitation!",
    author: "Leslie Alexander",
    role: "Freelance React Developer",
    avatar:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
  },
  {
    id: 2,
    text: "The perfect balance of strength and smoothness! The coffee here is expertly brewed, with a blend that is both robust and refined. The barista's attention to detail and passion for coffee truly shine through. A must-visit for anyone seeking a top-notch coffee experience.",
    author: "Jacob Jones",
    role: "Digital Marketer",
    avatar:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
  },
  {
    id: 3,
    text: "Absolutely the best coffee I've ever had! The rich, bold flavor and enticing aroma make every cup a delightful experience. The barista's skill in crafting each brew is evident in every sip. Highly recommended for all coffee lovers!",
    author: "John Doe",
    role: "Software Engineer",
    avatar: "https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1.jpg",
  },
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  arrows: false,
};

const Testimonial = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      className="h-auto flex flex-col items-center justify-center w-full"
      id="home"
    >
      <div className="w-full md:w-[90%] h-auto md:h-[100%] rounded-md flex flex-col">
        <section className="py-12 w-full h-auto bg-background sm:py-16 lg:py-20">
          <div className="h-auto px-4 mx-auto max-w-7xl lg:px-8">
            <div className="h-auto flex flex-col items-center">
              <div className="text-center">
                <motion.h2
                  className="text-3xl p-5 pb-10 font-bold text-gray-900 sm:text-4xl xl:text-5xl"
                  ref={ref}
                  initial={{ opacity: 0, y: 100 }}
                  animate={controls}
                  transition={{ duration: 0.8 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 100 },
                  }}
                >
                  What clients say about us
                </motion.h2>
              </div>
              <div className="relative mt-2 md:order-2">
                <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                  <div
                    className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter shadow-md"
                    style={{ background: "" }}
                  ></div>
                </div>
                <Slider
                  {...settings}
                  className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-1"
                >
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="flex flex-col overflow-hidden shadow-md"
                    >
                      <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                        <div className="flex-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-[#FDB241]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>

                          <blockquote className="flex-1 mt-8">
                            <p className="md:text-lg text-sm leading-relaxed text-gray-900">
                              {testimonial.text}
                            </p>
                          </blockquote>
                        </div>

                        <div className="flex items-center mt-8">
                          <div className="ml-4 w-full items-center flex flex-col justify-center">
                            <img
                              className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                              src={testimonial.avatar}
                              alt={testimonial.author}
                            />
                            <p className="text-base font-bold text-gray-900">
                              {testimonial.author}
                            </p>
                            <p className="mt-0.5 text-sm text-gray-600">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonial;

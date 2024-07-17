import React, { useRef, useState, useEffect } from "react";
import "./Member.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Member = () => {
  const form = useRef();
  const [member, setMember] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation each time element comes into view
    threshold: 0.2, // Trigger when 20% of element is in view
  });

  // get the member detail from the local storage
  useEffect(() => {
    const isMember = localStorage.getItem("member") === "true";
    setMember(isMember);
  }, []);

  // email validation
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Email is required");
      setTimeout(() => {
        setEmailError(null);
      }, 3000);
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Invalid email");
      setTimeout(() => {
        setEmailError(null);
      }, 3000);
      return;
    }
    setEmailError(null);
    setMember(true);
    // store the member detail to the local storage
    localStorage.setItem("member", "true");
    setEmail("");
  };

  return (
    <div
      className="_member h-[70vh] flex flex-row items-center justify-center text-black"
      id="member"
    >
      <div
        className="member_image bg-cover bg-center md:h-[100%] md:w-[90%] w-full h-full bg-white rounded-md flex flex-col md:flex-row"
        ref={ref}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
      >
        <div className="flex flex-col w-full md:pl-20 h-full items-center justify-center md:items-end md:justify-center md:pr-20 gap-5">
          {member ? (
            <motion.h1
              className="font-bold text-xl sm:text-2xl md:text-3xl"
              initial={{ opacity: 0, y: 100 }}
              animate={controls}
              transition={{ duration: 0.8 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
            >
              Thank you
              <br />
              for becoming
              <br />a valuable member.
              <br />
            </motion.h1>
          ) : (
            <>
              <motion.h1
                className="font-bold text-xl sm:text-2xl md:text-3xl"
                initial={{ opacity: 0, y: 100 }}
                animate={controls}
                transition={{ duration: 0.8 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100 },
                }}
              >
                Be a member at Barista
                <br />
                and get exciting offers
                <br />
                and discounts
              </motion.h1>
              <motion.div
                className="_member_input_div flex flex-col gap-5 items-center md:items-start"
                initial={{ opacity: 0, y: 100 }}
                animate={controls}
                transition={{ duration: 0.8, delay: 0.4 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100 },
                }}
              >
                <form
                  onSubmit={handleSubmit}
                  ref={form}
                  className="flex flex-col gap-5 items-center md:items-start"
                >
                  <motion.input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    className="_input border border-none focus focus:outline-none md:p-3 p-2 text-sm rounded-md w-[350px] bg-teal-900 text-white"
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 100 },
                    }}
                  />
                  {emailError && (
                    <motion.p
                      style={{ color: "red" }}
                      className="text-sm"
                      initial={{ opacity: 0, y: 100 }}
                      animate={controls}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 },
                      }}
                    >
                      {emailError}
                    </motion.p>
                  )}
                  <motion.button
                    className="button cursor-pointer text-white w-32 px-1 py-2 rounded-md bg-alloy hover:bg-dark-brown"
                    type="submit"
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 100 },
                    }}
                  >
                    Submit
                  </motion.button>
                </form>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Member;

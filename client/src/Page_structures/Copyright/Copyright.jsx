import React from "react";
import "./Copyright.css";
// import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div
      className="h-auto flex flex-row items-center justify-center text-white"
      id="contact"
    >
      <div className="copyright p-2 md:h-[100%] md:w-[90%] w-full h-full flex bg-black items-center gap-1 justify-center text-[10px]">
        © 2024 Barista Coffee. All rights reserved.
        {/* <Link to='/claim' className='underline text-blue-500'>Claim</Link> */}
      </div>
    </div>
  );
};

export default Copyright;

import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div
      className="h-screen bg-white flex flex-row items-center justify-center text-white"
      id="home"
    >
      <div className="home_image md:h-[100%] md:w-[90%] rounded-md flex flex-col items-center justify-center gap-5">
        <div className="md:w-[50%] w-full h-full md:h-[50%] rounded-md flex flex-col items-center justify-center bg-teal-950">
          <IoIosCheckmarkCircleOutline style={{ fontSize: "90px" }} />
          <span>Payment Success</span>
        </div>
        <Link
          to="/cart"
          aria-label="to cart page"
          className="text-sm md:text-lg button cursor-pointer px-1 py-2 rounded-md bg-alloy hover:bg-dark-brown"
        >
          <button>Go to cart</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;

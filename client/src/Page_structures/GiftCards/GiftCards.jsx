import { Link, useNavigate } from "react-router-dom";

const GiftCards = () => {
  const navigate = useNavigate();

  // When navigating back from cart page to the original position
  const handleGoBack = () => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }
    navigate(-1); // Navigate back to the previous page
  };

  const handleGiftButton = () => {
    alert("Under Development");
  };
  return (
    <div
      className="h-auto flex flex-row items-center justify-center"
      id="about"
    >
      <div className='md:h-[90%] md:min-h-screen md:w-[90%] w-full bg-[url("https://i.pinimg.com/originals/e6/db/d1/e6dbd1b8384e7c0240db405301dc31db.jpg")] bg-repeat bg-center rounded-md flex flex-col items-center justify-start gap-5 p-8 md:py-10'>
        <span className="w-full h-1/4 flex items-center justify-center">
          <img
            src="./Project_images/Logos/barista-coffee-high-resolution-logo-transparent.png"
            alt="logo"
            className=" w-1/4 mb-10"
          />
        </span>
        <div className="h-full w-full flex md:flex-row flex-col items-center justify-center gap-16">
          <div className="rounded-md p-10 h-[300px] md:h-full md:w-2/5 space-y-10 w-4/5 flex flex-col items-center justify-center bg-lightish">
            <h1 className="text-2xl font-bold">Coffee</h1>
            <span className="text-sm flex text-center">
              Buy to generate QR code
            </span>
            <span className="text-xl font-bold">Rs 300</span>
            <button
              className="button cursor-pointer w-32 px-1 py-2 rounded-md bg-alloy hover:bg-dark-brown hover:text-white"
              onClick={handleGiftButton}
            >
              Buy
            </button>
          </div>
          <div className="rounded-md p-10 h-[300px] md:h-full md:w-2/5 space-y-10 w-4/5 flex flex-col items-center justify-center bg-lightish">
            <h1 className="text-2xl font-bold">Dessert</h1>
            <span className="text-sm flex text-center">
              Buy to generate QR code
            </span>
            <span className="text-xl font-bold">Rs 300</span>
            <button
              className="button cursor-pointer w-32 px-1 py-2 rounded-md bg-alloy hover:bg-dark-brown hover:text-white"
              onClick={handleGiftButton}
            >
              Buy
            </button>
          </div>
        </div>
        <span className="text-white w-full flex items-center md:justify-end justify-center cursor-pointer">
          <Link to="/" aria-label="to home" onClick={handleGoBack}>
            Go back
          </Link>
        </span>
      </div>
    </div>
  );
};

export default GiftCards;

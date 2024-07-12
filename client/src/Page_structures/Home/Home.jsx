import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  const shop = () => {
    alert("Shop not available right now");
  };

  return (
    <div
      className=" h-screen flex flex-row items-center justify-center text-white"
      id="home"
    >
      <div className="home_image h-full w-full flex flex-col">
        <Navbar style />
        <div className="home_content h-full w-full flex flex-col">
          <h1 className="home_h1 md:text-5xl text-4xl">
            BARISTA
            <br />
            DELICIOUS
            <br />
            COFFEE
          </h1>
          <span className="font-bold text-sm mt-3">
            Relish the flavor, taste the excellence
          </span>
          <span className="text-sm">
            Indulge in a selection from Barista's brews or savor one of our
            mouthwatering coffee creations.
          </span>
          <span className="mt-6 flex items-center flex-row gap-4 text-sm">
            <a href="https://play.google.com/store/apps?hl=en" target="_blank">
              <button className="button cursor-pointer w-32 px-1 py-2 rounded-md bg-alloy hover:bg-dark-brown">
                Download App
              </button>
            </a>
            <span className="shop_link cursor-pointer text-sm" onClick={shop}>
              COFFEE SHOP
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AboutStory = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, [location]);

  const handleGoBack = () => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }
    navigate(-1);
  };

  return (
    <div className="h-auto flex flex-row items-center justify-center text-white">
      <div className="md:h-[90%] md:w-[90%] w-full bg-black rounded-md flex flex-col gap-5">
        <div className="h-auto bg-gray-900 text-white flex flex-col items-center justify-center p-4">
          <img
            src="./Project_images/Logos/barista-coffee-high-resolution-logo-transparent.png"
            alt="Barista Coffee Logo"
            className="md:h-32 h-20 mb-8"
          />

          <div className="w-full max-w-4xl space-y-8">
            <div className="text-center mb-8">
              <h1 className="md:text-4xl text-3xl font-bold">
                The Story of Barista Coffee
              </h1>
              <p className="text-sm mt-4 text-justify">
                Barista Coffee, a cozy and aromatic haven, began its journey in
                the heart of Kathmandu, Nepal. The dream was simple yet
                profound: to create a space where coffee lovers could gather and
                enjoy the finest brews while soaking in the rich culture of
                Nepal. The founders, a group of passionate coffee enthusiasts,
                wanted to bring the world-class coffee experience to their
                homeland, emphasizing quality, sustainability, and community.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center">
              <img
                src="./Project_images/About_images/about_1.jpg"
                alt="Kavrepalanchok"
                className="w-full md:w-1/2 rounded-md"
              />
              <div className="md:ml-8 md:w-1/2 mt-4 md:mt-0">
                <h2 className="md:text-3xl sm:text-2xl text-xl font-bold mb-2">
                  Kavrepalanchok: The Heart of Coffee Production
                </h2>
                <p className="text-sm text-justify">
                  Kavrepalanchok, located in the central part of Nepal, is the
                  heart of coffee production for Barista Coffee. The region's
                  elevation, ranging from 800 to 1,600 meters above sea level,
                  provides the perfect environment for Arabica coffee plants.
                  The climate, characterized by warm days and cool nights,
                  allows the coffee cherries to mature slowly, developing
                  complex flavors.
                  <br />
                  <br />
                  The farmers of Kavrepalanchok practice sustainable farming
                  methods, using organic fertilizers and traditional techniques
                  to nurture the coffee plants. This dedication to sustainable
                  agriculture not only preserves the environment but also
                  ensures the highest quality beans.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center md:flex-row-reverse">
              <img
                src="./Project_images/About_images/about_2.jpg"
                alt="Coffee Aroma"
                className="w-full md:w-1/2 rounded-md"
              />
              <div className="md:mr-8 md:w-1/2 mt-4 md:mt-0">
                <h2 className="md:text-3xl sm:text-2xl text-xl font-bold">
                  The Aroma of Barista Coffee
                </h2>
                <p className="text-sm text-justify">
                  The aroma of Barista Coffee is one of its most distinguishing
                  features. It begins with the meticulous selection of beans
                  from Kavrepalanchok, a region renowned for its ideal
                  coffee-growing conditions. The altitude, climate, and soil
                  composition of Kavrepalanchok contribute to the unique and
                  rich aroma of the coffee beans. The beans are carefully
                  handpicked by local farmers, ensuring only the highest quality
                  cherries are selected.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center md:flex-row">
              <img
                src="./Project_images/About_images/about_3.jpg"
                alt="Brand Building"
                className="w-full md:w-1/2 rounded-md"
              />
              <div className="md:ml-8 md:w-1/2 mt-4 md:mt-0">
                <h2 className="md:text-3xl sm:text-2xl text-xl font-bold mb-2">
                  Building the Brand
                </h2>
                <p className="text-sm text-justify">
                  From the outset, Barista Coffee was committed to crafting a
                  unique and memorable brand. They focused on three key pillars:
                  quality, community, and sustainability. By sourcing the finest
                  coffee beans from the lush hills of Kavrepalanchok, they
                  ensured that their coffee had a distinct and superior flavor
                  profile. The brand identity was built around the idea of a
                  welcoming and inclusive space where people could come
                  together, share stories, and create lasting memories over a
                  cup of coffee.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center md:flex-row-reverse">
              <img
                src="./Project_images/About_images/about_4.jpg"
                alt="Roasting and Quality"
                className="w-full md:w-1/2 rounded-md"
              />
              <div className="md:mr-8 md:w-1/2 mt-4 md:mt-0">
                <h2 className="md:text-3xl sm:text-2xl text-xl font-bold mb-2">
                  Roasting and Quality
                </h2>
                <p className="text-sm text-justify">
                  At Barista Coffee, the roasting process is treated as an art
                  form. They employ a team of skilled roasters who understand
                  the nuances of each bean variety. The beans are roasted in
                  small batches to ensure consistency and to bring out the
                  optimal flavors and aromas. The roasting profiles are
                  meticulously developed to highlight the natural
                  characteristics of the beans, whether they are fruity, nutty,
                  or chocolaty.
                  <br />
                  <br />
                  Quality control is a cornerstone of Barista Coffee's
                  philosophy. Each batch of coffee undergoes rigorous testing
                  and tasting to ensure it meets the highest standards. The shop
                  offers a variety of grades, from the light and floral to the
                  dark and bold, catering to the diverse preferences of their
                  customers.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full text-center">
                <h2 className="md:text-3xl sm:text-2xl text-xl font-bold mb-2">
                  The Experience
                </h2>
                <p className="text-sm text-justify">
                  Walking into Barista Coffee, customers are greeted by the
                  inviting scent of freshly brewed coffee. The warm and rustic
                  interior, adorned with local art and comfortable seating,
                  creates an ambiance that is both relaxing and stimulating. The
                  baristas, trained extensively in the art of coffee making,
                  engage with customers, sharing their knowledge and passion.
                  <br />
                  <br />
                  The menu at Barista Coffee is carefully curated, offering a
                  range of espresso-based drinks, pour-overs, cold brews, and
                  signature creations. Each cup is prepared with precision,
                  ensuring that the quality and taste are consistently
                  exceptional.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full text-center">
                <h2 className="md:text-3xl sm:text-2xl text-xl font-bold mb-2">
                  Community and Sustainability
                </h2>
                <p className="text-sm text-justify">
                  Barista Coffee is deeply committed to supporting the local
                  community and promoting sustainability. They work closely with
                  farmers in Kavrepalanchok, providing fair wages and investing
                  in community development projects. By sourcing beans directly
                  from local farmers, they ensure that a significant portion of
                  the profits returns to the community, fostering economic
                  growth and development.
                  <br />
                  <br />
                  In addition to supporting local farmers, Barista Coffee is
                  dedicated to environmental sustainability. They use
                  eco-friendly packaging, promote recycling within their shops,
                  and implement energy-efficient practices.
                </p>
              </div>
            </div>
          </div>
          <Link
            to="/"
            className="mt-8 text-sm underline"
            aria-label="barista story"
          >
            <span
              className="w-full flex items-end justify-end md:pr-3"
              onClick={handleGoBack}
            >
              Go back
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;

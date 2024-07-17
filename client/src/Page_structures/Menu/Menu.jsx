import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Slices/CartSlice";
import { SyncLoader } from "react-spinners";
import { motion, useScroll, useTransform } from "framer-motion";

// menu items to show
const menu = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cappuccino",
    description: "A rich and foamy cappuccino.",
    price: "Rs 399",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Espresso",
    description: "A strong and bold espresso.",
    price: "Rs 320",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1604298458655-ae6e04213678?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Macchiato",
    description: "A sweet and creamy macchiato.",
    price: "Rs 450",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1530373239216-42518e6b4063?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mocha",
    description: "A chocolaty mocha delight.",
    price: "Rs 500",
  },
];

// dessert items to show
const dessert = [
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyb3duJTIwY29va2llfGVufDB8fDB8fHww",
    title: "Brown Cookie",
    description: "Crunchy Delight, Irresistible Bite!",
    price: "Rs 320",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Caramel",
    description: "Golden Sweetness in Every Bite!",
    price: "Rs 399",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Chocolate Cake",
    description: "Indulge in Pure Chocolate Bliss!",
    price: "Rs 500",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1543512601-f0b56be2147e?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Doughnut",
    description: "Deliciously Round, Perfectly Sweet!",
    price: "Rs 450",
  },
];

// settings applied for slider
const coffee_settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 470,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const dessert_settings = {
  ...coffee_settings,
  slidesToScroll: -1,
};

const Menu = () => {
  const { scrollY } = useScroll();
  const xMenu = useTransform(scrollY, [0, 600], [-300, 0]);
  const opacityMenu = useTransform(scrollY, [0, 100], [0, 1]);

  // get the cartproducts from store
  const cartProducts = useSelector((state) => state.products.cartProducts);
  const dispatch = useDispatch();

  // add the item to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // check if the item is in the cart
  const isInCart = (id) => {
    return cartProducts.some((product) => product.id === id);
  };

  // state to track if the image is loaded
  const [imageLoaded, setImageLoaded] = useState({});

  // update the loaded image
  const handleImageLoad = (id) => {
    setImageLoaded((prev) => ({ ...prev, [id]: true }));
  };

  const handleImageError = (id) => {
    setImageLoaded((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div
      className="min-h-screen h-auto flex flex-row items-center justify-center text-black"
      id="menu"
    >
      <div className="md:h-[90%] md:w-[90%] w-full bg-background rounded-md flex flex-col p-4">
        <div className=" h-auto w-full flex flex-col items-center justify-center p-3">
          <motion.h1
            className="active text-dark-brown text-xl font-bold mt-10"
            style={{ x: xMenu, opacity: opacityMenu }}
            transition={{ duration: 2 }}
          >
            Our Menu
          </motion.h1>
          <Slider {...coffee_settings} className="w-full">
            {menu.map((coffee) => (
              <div key={coffee.id} className="px-4 py-8">
                <div className="flex flex-col items-start bg-white rounded-md">
                  <div className="relative h-[250px] w-full">
                    {!imageLoaded[coffee.id] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <SyncLoader size={10} color="#f6a453" />
                      </div>
                    )}
                    <img
                      src={coffee.image}
                      alt={coffee.title}
                      className={`object-cover rounded-t-md h-full w-full ${
                        !imageLoaded[coffee.id] ? "hidden" : "block"
                      }`}
                      onLoad={() => handleImageLoad(coffee.id)}
                      onError={() => handleImageError(coffee.id)}
                    />
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <span className="font-bold text-md">{coffee.title}</span>
                    <span className="text-gray-700 mb-2 text-sm">
                      {coffee.description}
                    </span>
                    <div className="flex flex-row justify-between items-center w-full">
                      <span className="text-md font-bold">{coffee.price}</span>
                      <button
                        className={
                          "bg-brown hover:bg-dark-brown text-white px-2 py-1 rounded "
                        }
                        onClick={() => handleAddToCart(coffee)}
                        disabled={isInCart(coffee.id)}
                      >
                        {isInCart(coffee.id) ? "Added" : "Add to cart"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className=" h-auto w-full flex flex-col items-center justify-center p-3">
          <h1 className="active text-dark-brown text-xl font-bold mt-10">
            Dessert Service
          </h1>
          <Slider {...dessert_settings} className="w-full">
            {dessert.map((dessert) => (
              <div key={dessert.id} className="px-4 py-8">
                <div className="flex flex-col items-start bg-white rounded-md">
                  <div className="relative h-[250px] w-full">
                    {!imageLoaded[dessert.id] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <SyncLoader size={10} color="#f6a453" />
                      </div>
                    )}
                    <img
                      src={dessert.image}
                      alt={dessert.title}
                      className={`object-cover rounded-t-md h-full w-full ${
                        !imageLoaded[dessert.id] ? "hidden" : "block"
                      }`}
                      onLoad={() => handleImageLoad(dessert.id)}
                      onError={() => handleImageError(dessert.id)}
                    />
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <span className="font-bold text-md">{dessert.title}</span>
                    <span className="text-gray-700 mb-2 text-sm">
                      {dessert.description}
                    </span>
                    <div className="flex flex-row justify-between items-center w-full">
                      <span className="text-md font-bold">{dessert.price}</span>
                      <button
                        className={
                          "bg-brown hover:bg-dark-brown text-white px-2 py-1 rounded"
                        }
                        onClick={() => handleAddToCart(dessert)}
                        disabled={isInCart(dessert.id)}
                      >
                        {isInCart(dessert.id) ? "Added" : "Add to cart"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Menu;

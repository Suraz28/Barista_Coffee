import React, { useState, useEffect } from 'react';
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../Slices/CartSlice";
import { loadStripe } from '@stripe/stripe-js';

const Cart = () => {
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  // import the cart products form store
  const cartProducts = useSelector(state => state.products.cartProducts);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (index) => {
    dispatch(increaseQuantity(index));
  };

  const handleDecreaseQuantity = (index) => {
    dispatch(decreaseQuantity(index));
  };

  const handleRemoveFromCart = (index) => {
    dispatch(removeFromCart(index));
  };

  // calculate the sub-total price
  const calculateSubtotal = (price, count) => {
    return parseFloat(price.replace('Rs ', '')) * count;
  };

  // calculate the total price
  const total = cartProducts.reduce((acc, product) => {
    return acc + calculateSubtotal(product.price, product.count);
  }, 0);

  // coupon code for discount
  const couponCode = () => {
    if (coupon === 'barista_coffee') {
      setDiscount(75);
    } else {
      setDiscount(0);
    }
  };

  // check the responsiveness of screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsModalVisible(true);
      } else {
        setIsModalVisible(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // introduce the payment gateway
  const makePayment = async () => {
    const stripePublicKey = import.meta.env.VITE_REACT_APP_STRIPE_PUBLIC_KEY;
  
  if (!stripePublicKey) {
    throw new Error("Stripe public key is not defined in environment variables");
  }

  const stripe = await loadStripe(stripePublicKey);

    const body = {
      products: cartProducts,
      total: total - discount,
    };
    const headers = {
      "Content-Type": "application/json"
    };

    try {
      const response = await fetch("https://barista-coffee-server.vercel.app/api/create-checkout-session", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });

      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="h-screen flex flex-row items-center justify-center text-black" id="home">
      <div className='md:h-[100%] md:w-[90%] h-full w-full bg-white rounded-md flex flex-col p-2'>
        <div className='cart_nav flex flex-row px-4 w-full items-center justify-between p-3'>
          <Link to='/'>
            <img src='./Project_images/Logos/logo.png' className='h-8 md:h-10 ' alt="Logo" />
          </Link>
          <h1 className='text-2xl md:text-3xl mb-1 flex items-center justify-center active text-black'>My cart</h1>
          <Link to='/'>
            <span className='flex items-center justify-center underline text-sm'>Go back</span>
          </Link>
        </div>
        {cartProducts.length === 0 ? (
          <div className="text-gray-300 text-xl font-bold w-full h-full flex items-center justify-center">Your cart is empty</div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-start overflow-y-auto text-white">
            <div className="flex h-auto flex-col w-full p-4">
              <table className="w-full table-auto">
                <thead className={`${isModalVisible ? 'text-right' : 'text-center'}`}>
                  <tr className="bg-dark-brown text-sm">
                    <th className="px-4 py-2">Item</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Sub-total</th>
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>
                {cartProducts.map((product, index) => (
                  <tbody className="text-black text-sm" key={product.id}>
                    <tr className="text-center bg-lightish border border-b-2">
                      <td className="px-4 py-2 flex flex-col items-center justify-center">
                        <img src={product.image} className="h-24" alt={product.title} />
                        <span className="text-sm">{product.title}</span>
                      </td>
                      <td className="px-4 py-2">{product.price}</td>
                      <td className="px-4 py-2">
                        <button className="px-3 py-0 border border-black md:hover:bg-dark-brown md:hover:text-white" onClick={() => handleDecreaseQuantity(index)}>
                          -
                        </button>
                        <span className="mx-2 px-2">{product.count}</span>
                        <button className="px-3 py-0 border border-black md:hover:bg-dark-brown md:hover:text-white" onClick={() => handleIncreaseQuantity(index)}>
                          +
                        </button>
                      </td>
                      <td className="px-4 py-2">Rs {calculateSubtotal(product.price, product.count)}</td>
                      <td className="px-4 py-2">
                        <button className="px-2 py-1 text-3xl md:hover:bg-dark-brown rounded-full md:hover:shadow-md text-red-500" onClick={() => handleRemoveFromCart(index)}>
                          <MdOutlineDelete />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        )}
        {cartProducts.length > 0 && (
          <div>
            <div className='flex flex-col md:flex-row items-center justify-between w-full my-4 gap-2 px-4 text-sm'>
              <input className='w-full p-3 border-none focus:outline-none bg-lightish' placeholder='Coupon Code = barista_coffee' value={coupon} onChange={(e) => setCoupon(e.target.value)} />
              <button className='button cursor-pointer w-full md:w-80 px-1 py-3 bg-lightish hover:bg-dark-brown hover:text-white md:hover:shadow-md' onClick={couponCode}>Apply Discount</button>
              <span className='flex flex-row items-center justify-around gap-5 w-full md:w-1/2'>
                <button className='button cursor-pointer w-full md:w-80 px-1 py-3 bg-lightish hover:bg-dark-brown hover:text-white md:hover:shadow-md' onClick={makePayment}>Checkout</button>
              </span>
            </div>
            <div className='bg-dark-brown text-white p-4 flex flex-col md:flex-row items-start md:items-center justify-around mx-4 text-sm'>
              <span>Discount: Rs {discount}</span>
              <span>Shipping Fee: No Shipping Fee</span>
              <span>Total: Rs {total - discount}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
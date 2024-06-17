import React, { useRef, useState, useEffect } from 'react';
import "./Member.css";

const Member = () => {
  const form = useRef();
  const [member, setMember] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);

  useEffect(() => {
    const isMember = localStorage.getItem('member') === 'true';
    setMember(isMember);
  }, []);

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Email is required');
      setTimeout(() => {
        setEmailError(null);
      }, 3000);
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Invalid email');
      setTimeout(() => {
        setEmailError(null);
      }, 3000);
      return;
    }
    setEmailError(null);
    setMember(true);
    localStorage.setItem('member', 'true');
    setEmail('');
  };

  return (
    <div className="_member h-[70vh] flex flex-row items-center justify-center text-black" id="member">
      <div className='member_image bg-cover bg-center md:h-[100%] md:w-[90%] w-full h-full bg-white rounded-md flex flex-col md:flex-row'>
        <div className='flex flex-col w-full md:pl-20 h-full items-center justify-center md:items-end md:justify-center md:pr-20 gap-5'>
          {member ? (
            <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>
              Thank you<br/>for becoming<br/>a valuable member.<br/>
            </h1>
          ) : (
            <>
              <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>
                Be a member at Barista<br/>and get exciting offers<br/>and discounts
              </h1>
              <div className='_member_input_div flex flex-col gap-5 items-center md:items-start'>
                <form onSubmit={handleSubmit} ref={form} className='flex flex-col gap-5 items-center md:items-start'>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    className='_input border border-none focus focus:outline-none md:p-3 p-2 text-sm rounded-md w-[350px] bg-teal-900 text-white'
                  />
                  {emailError && <p style={{ color: 'red' }} className='text-sm'>{emailError}</p>}
                  <button className='button cursor-pointer text-white w-32 px-1 py-2 rounded-md bg-alloy hover:bg-dark-brown' type='submit'>
                    Submit
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Member;

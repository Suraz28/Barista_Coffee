import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Claim = () => {

  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, [location]);

  
  return (
    <div className="h-auto flex items-center justify-center  text-white">
      <div className="w-full md:w-[90%] bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
        <div className="text-base leading-relaxed">
          <p className="mb-4">
            Images credit goes to the respective owners.
          </p>

          <div className="mt-6">
            <h2 className="font-semibold mb-2">Coffee images:</h2>
            <ul className="space-y-3">
              <li>
                <span className="font-medium">Cappuccino</span><br />
                <a href='https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' target='_blank' className='text-blue-400 hover:underline'>Cappuccino Image</a>
              </li>
              <li>
                <span className="font-medium">Espresso</span><br />
                <a href='https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' target='_blank' className='text-blue-400 hover:underline'>Espresso Image</a>
              </li>
              <li>
                <span className="font-medium">Macchiato</span><br />
                <a href='https://images.unsplash.com/photo-1604298458655-ae6e04213678?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' target='_blank' className='text-blue-400 hover:underline'>Macchiato Image</a>
              </li>
              <li>
                <span className="font-medium">Mocha</span><br />
                <a href='https://images.unsplash.com/photo-1530373239216-42518e6b4063?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' target='_blank' className='text-blue-400 hover:underline'>Mocha Image</a>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="font-semibold mb-2">Dessert images:</h2>
            <ul className="space-y-3">
              <li>
                <span className="font-medium">Brown Cookie</span><br />
                <a href='https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyb3duJTIwY29va2llfGVufDB8fDB8fHww' target='_blank' className='text-blue-400 hover:underline'>Brown Cookie Image</a>
              </li>
              <li>
                <span className="font-medium">Chocolate Cake</span><br />
                <a href='https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D' target='_blank' className='text-blue-400 hover:underline'>Chocolate Cake Image</a>
              </li>
              <li>
                <span className="font-medium">Caramel</span><br />
                <a href='https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' target='_blank' className='text-blue-400 hover:underline'>Caramel Image</a>
              </li>
              <li>
                <span className="font-medium">Doughnut</span><br />
                <a href='https://images.unsplash.com/photo-1543512601-f0b56be2147e?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' target='_blank' className='text-blue-400 hover:underline'>Doughnut Image</a>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="font-semibold mb-2">Others:</h2>
            <ul className="space-y-3">
              <li>
                <span className="font-medium">Background</span><br />
                <a href='https://unsplash.com/photos/coffee-beans-beside-coffee-powder-on-brown-wooden-board-KixfBEdyp64' target='_blank' className='text-blue-400 hover:underline'>Background Image</a>
              </li>
              <li>
                <span className="font-medium">Background</span><br />
                <a href='https://i.pinimg.com/originals/e6/db/d1/e6dbd1b8384e7c0240db405301dc31db.jpg' target='_blank' className='text-blue-400 hover:underline'>Background Image</a>
              </li>
              <li>
                <span className="font-medium">Coffee beans</span><br />
                <a href='https://i.pinimg.com/564x/eb/cb/67/ebcb67be0dd2c71eb8d974a0a74a2dc4.jpg' target='_blank' className='text-blue-400 hover:underline'>Coffee Beans Image</a>
              </li>
            </ul>
          </div>

          <div className="mt-6 text-center">
            <Link to='/' className='text-blue-400 underline hover:text-blue-500'>Go back</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Claim

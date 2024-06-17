import React from 'react'
import { Link } from 'react-router-dom'

const Claim = () => {
  return (
    <div className="h-auto flex flex-row items-center justify-center text-black" id="home">
        <div className='md:h-[100%] md:w-[90%] rounded-md bg-background flex flex-col'>
    <div className=' text-sm flex flex-col gap-4'>I do not own any of the images used. Image credit goes to the respective owners
    <div className='h-auto w-auto flex flex-col mt-3'>
        <span>coffee images:</span>
        <ul>
        <li>
            <span>Cappuccino</span><br/>
        <a href='https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' target='_blank' className='text-blue-700 underline'>https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D</a><br/>
            <span>Espresso</span><br/>
        <a href='https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' target='_blank' className='text-blue-700 underline'>https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D</a><br/>
            <span>Macchiato</span><br/>
        <a href='https://images.unsplash.com/photo-1604298458655-ae6e04213678?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' target='_blank' className='text-blue-700 underline'>https://images.unsplash.com/photo-1604298458655-ae6e04213678?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D</a><br/>
            <span>Mocha</span><br/>
        <a href='https://images.unsplash.com/photo-1530373239216-42518e6b4063?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' target='_blank' className='text-blue-700 underline'>https://images.unsplash.com/photo-1530373239216-42518e6b4063?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D</a>
        </li>
        </ul>
    </div>
    <div className='h-auto w-auto flex flex-col mt-5'>
        <span>Dessert images:</span>
        <ul>
        <li>
            <span>Brown Cookie</span><br/>
        <a href='https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyb3duJTIwY29va2llfGVufDB8fDB8fHww' target='_blank' className='text-blue-700 underline'>https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyb3duJTIwY29va2llfGVufDB8fDB8fHww</a><br/>
            <span>Chocolate Cake</span><br/>
        <a href='https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D' target='_blank' className='text-blue-700 underline'>https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D</a><br/>
            <span>Caramel</span><br/>
        <a href='https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' target='_blank' className='text-blue-700 underline'>https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D</a><br/>
            <span>Doughnut</span><br/>
        <a href='https://images.unsplash.com/photo-1543512601-f0b56be2147e?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' target='_blank' className='text-blue-700 underline'>https://images.unsplash.com/photo-1543512601-f0b56be2147e?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D</a>
        </li>
        </ul>
    </div>
    <span className=''>
    <Link to='/' className='underline text-black'>Go back</Link> 
    </span>
    </div>
    </div>
    </div>
  )
}

export default Claim
import React from 'react'
import img from '../../assets/images/home_1.jpeg'
import './Home.css'

function Home() {
  return (
        <div className='mt-8 p-8 inline-flex'>
          <span className="mr-4">
            <img src={img} alt="mind going bong"/>
          </span>
          <span className='flex justify-center'>
            <p className=' text-2xl font-semibold'>
              Welcome to Think Better💪
            </p>
          </span>  
        </div>
  )
}

export default Home
import React from 'react'
import img from '../../assets/images/home_1.jpeg'
import './Home.css'

function Home() {
  return (
        <div className='p-8 flex'>
          <div className="mr-4 w-7/12">
            <img src={img} alt="mind going bong " className='' />
          </div>
          <div className='flex-grow flex justify-center'>
            <h5 className=' text-2xl font-semibold inline-block'>
              Welcome to Think Better💪
            </h5>
            {/* <p className='text-sm text-justify overflow-hidden  ' >
                Introducing a revolutionary new web application designed to help you improve your mental health by recording your thoughts and recommending blogs on better mental health practices.
                Our web app offers a simple and intuitive interface that allows you to easily record your thoughts, feelings, and emotions in a safe and private space. Whether you're struggling with anxiety, depression, or just feeling stressed out, our app can help you gain a deeper understanding of your mental state and track your progress over time.

                In addition to providing a space for self-reflection, our app also recommends blogs and articles on better mental health practices tailored to your specific needs and interests. Whether you're interested in meditation, mindfulness, or cognitive behavioral therapy, our app can help you find the resources you need to improve your mental well-being.

                With our web app, you'll have everything you need to take control of your mental health and start living your best life. So why wait? Sign up today and start your journey towards better mental health!
            </p> */}
          </div>  
        </div>
  )
}

export default Home
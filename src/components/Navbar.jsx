import React from 'react'
import Home from '../pages/home/Home'
import About from '../pages/about/about'
import Blog from '../pages/blogs/blog'
import Diary from "../pages/thought_diary/index"
import {BrowserRouter,Routes,Route, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <BrowserRouter>
        <div class="bg-gray-800 px-8 py-2">
            <div class="flex items-center justify-between">
                <div class="text-white font-bold">Think Better💪</div>
                    <div class="flex">
                        <a href="#"><Link to="/" class="text-gray-300 hover:text-white px-3 py-2">Home</Link></a>
                        <a href="#"><Link to="/about" class="text-gray-300 hover:text-white px-3 py-2">About</Link></a>
                        <a href="#"><Link to="/blog" class="text-gray-300 hover:text-white px-3 py-2">Blogs</Link></a>
                        <a href="#"><Link to="/diary" class="text-gray-300 hover:text-white px-3 py-2">Thought Diary</Link></a>
                    </div>
                    <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/about" element={<About/>} />
                      <Route path="/blog" element={<Blog/>} />
                      <Route path="/diary" element={<Diary/>}/> 
                    </Routes>
             </div>
        </div>
    </BrowserRouter>
    </>
  )
}
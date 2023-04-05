import React from 'react'
import {Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <div class="bg-gray-800 px-8 py-4 mb-4">
            <div class="flex items-center justify-between">
                <div class="text-white font-bold text-lg">Think Better💪</div>
                    <div class="flex">
                        <a href="#"><Link to="/" class="text-gray-300 hover:text-white px-3 py-2 text-lg">Home</Link></a>
                        <a href="#"><Link to="/about" class="text-gray-300 hover:text-white px-3 py-2 text-lg">About</Link></a>
                        <a href="#"><Link to="/blog" class="text-gray-300 hover:text-white px-3 py-2 text-lg">Blogs</Link></a>
                        <a href="#"><Link to="/diary" class="text-gray-300 hover:text-white px-3 py-2 text-lg">Thought Diary</Link></a>
                    </div>
             </div>
        </div>
    </>
  )
}
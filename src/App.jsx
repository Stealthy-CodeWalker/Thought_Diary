import './App.css'
import React from 'react'
import Nav from './components/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/about'
import Blog from './pages/blogs/blog'
import Diary from './pages/thought_diary/Index'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />              <Route path="/diary" element={<Diary/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

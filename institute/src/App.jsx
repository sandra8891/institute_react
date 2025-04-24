// import { useState } from 'react'
import React from 'react'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
// import About from './components/About'
// import Courses from './components/Courses'
// import Placements from './components/Placements'
// import Contact from './components/Contact'
import Navbar from './components/Navbar'
// import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/about' element={<About/>} /> */}
        {/* <Route path='/courses' element={<Courses/>} /> */}
        {/* <Route path='/placements' element={<Placements/>} /> */}
        {/* <Route path='/contact' element={<Contact />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}


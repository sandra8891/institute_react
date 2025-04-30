import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Placements from './components/Placements';
import Contact from './components/Contact';
import CourseDetail from './components/CourseDetail';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; // You forgot to import this

export default function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/placements' element={<Placements />} />
            <Route path='/courses/:id' element={<CourseDetail />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

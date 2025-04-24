import React from "react"
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <nav >
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/placements">Placements</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  );
}
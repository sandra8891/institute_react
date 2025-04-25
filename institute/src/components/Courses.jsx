// import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './ins.css'


export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/courses/')
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="courses-container">
        <Navbar/>
      <h2 className="title">Courses</h2>
      <div className="grid-container">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} className="course-image" />
            <h3 className="course-title">{course.title}</h3>
            {/* <p>{course.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
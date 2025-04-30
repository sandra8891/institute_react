import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import './ins.css';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/courses/')
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="courses-container">
      {/* <Navbar /> */}
      <h2 className="title">Courses</h2>
      <div className="grid-container">
        {courses.map((course) => (
          <div
            className="course-card"
            key={course.id}
            onClick={() => navigate(`/courses/${course.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <img src={course.image} alt={course.title} className="course-image" />
            <h3 className="course-title">{course.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

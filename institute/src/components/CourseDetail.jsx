import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/courses/${id}/`)
      .then(res => setCourse(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div>
      {/* <Navbar /><br /> */}
      <h2 className="title">Courses</h2>
      {course && (
          <div className="course-detail">
          <img className="course-image" src={course.image} alt={course.title} />
          <div className="course-info">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <h4>Course Duration:{course.duration}</h4>
          </div>
        </div>
      )}
    </div>
  );
}

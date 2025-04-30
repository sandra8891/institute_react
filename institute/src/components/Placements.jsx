import React from 'react';
import './ins.css';

const placements = [
  {
    name: "ASWIN K T",
    role: "System Supervisor",
    image: "/images/aswin.jpg",
    tagline: "BELIEVED ACHIEVED",
    colorClass: "orange-bg",
  },
  {
    name: "Hashir",
    role: "Web Developer",
    image: "/images/hashir.jpg",
    tagline: "Journey To Excellence",
    colorClass: "white-bg",
  },
  {
    name: "ABDUL NAZEER",
    role: "Digital Marketer",
    image: "/images/nazeer.jpg",
    
    colorClass: "cream-bg",
  },
  {
    name: "SUNISHA",
    role: "MERN Stack Trainee",
    image: "/images/sunisha.jpg",
    tagline: "EFFORT TO EXCELLENCE",
    colorClass: "pink-bg",
  },
];

export default function Placements() {
  return (
    <div className="placements-section">
      <h1 className="placements-title">PLACEMENTS</h1>
      <p className="placements-subtitle">
        Unlock exciting career opportunities with our expert-guided placements,
        connecting you to top companies and industry leaders for a successful future.
      </p>

      <div className="placement-cards">
        {placements.map((p, index) => (
          <div className={`placement-card ${p.colorClass}`} key={index}>
            <img src={p.image} alt={p.name} className="placement-image" />
            <div className="placement-text">
              <h3>{p.tagline}</h3>
              <p className="placement-name">{p.name}</p>
              <p className="placement-role">{p.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

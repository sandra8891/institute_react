import React from "react";
import Navbar from './Navbar';
import "./ins.css"; 

export default function Home() {
  return (
    <section className="hero-section">
      <h1 className="hero-title">SMART SPACE</h1>
      <h2 className="hero-subtitle">
        LEARN <span className="highlight">BY DOING</span>
      </h2>
      <p className="hero-description">
        Step into the future of learning—where flexibility meets innovation, mentors
        are always within reach, and real-world experiences shape your journey to
        success.
      </p>
      {/* <button className="hero-button">
        Learn More <span>⬆</span>
      </button> */}
    </section>
  );
}


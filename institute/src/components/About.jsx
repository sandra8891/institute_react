import React from "react";
import "./ins.css";

export default function AboutUs() {
  return (
    <section className="about-section">
      <h1 className="about-title">ABOUT US</h1>
      <p className="about-intro">
        Discover who we are, what we do, and how we are committed to driving innovation,
        excellence, and success in everything we do.
      </p>

      <div className="about-content">
        <img
          src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
          alt="Team working"
          className="about-image"
        />

        <div className="about-text">
          <h2 className="about-subtitle">Who we are</h2>
          <p>
            Since our establishment in 2015, we have established ourselves as industry leaders by
            upholding high ethical standards, delivering top-notch training, and achieving impressive
            placement records.
          </p>
          <p>
            Our team of trainers boasts extensive real-world experience, ensuring that you receive
            in-depth knowledge and instruction in the latest technologies.
          </p>
          <p>
            We believe that quality training combined with hands-on experience is key for students
            to become certified professionals. We are here to guide you to excellence.
          </p>
        </div>
      </div>
      
      
    </section>
    
  );
}

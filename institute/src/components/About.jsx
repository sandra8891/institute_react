import React from "react";
import Navbar from './Navbar';
// import './ins.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="aboutUs">
        <h1 className="title">Welcome to Our Institute</h1>
        <p className="approach">
          Empowering students with skills and knowledge for a better future.
        </p>

        <div className="content">
          <img
            src="" 
            alt="Our Institute"
            className="image"
          />

          <div className="textBlock">
            <h2 className="subtitle">Our Mission</h2>
            <p className="description">
              We aim to provide world-class education and build a strong foundation
              for students to succeed in their careers. Our programs are designed
              to encourage creativity, critical thinking, and practical skills.
            </p>
            <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime asperiores ut cumque dolorum voluptas ex porro harum fugit? Impedit rerum repudiandae voluptates quas quod non, molestiae cum nulla facere ullam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptas, vitae maiores veritatis asperiores accusantium. Officiis, placeat? Hic incidunt velit natus accusamus et nobis vero amet in, placeat voluptatum obcaecati.</p>
            <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, omnis quasi repellat quaerat mollitia, vel dolor atque inventore qui recusandae debitis expedita vitae cum laborum asperiores architecto sint nobis ea!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
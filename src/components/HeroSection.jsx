import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Empower Your Future with <span>Online Training</span></h1>
        <p>
          Join our institute to learn top-demand skills with interactive
          e-learning and expert mentors.
        </p>
        <button className="hero-btn">Explore Courses</button>
      </div>

      <div className="hero-image">
      </div>
    </section>
  );
}

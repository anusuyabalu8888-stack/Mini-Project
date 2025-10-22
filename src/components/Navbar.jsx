import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SkillXcel</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/admission">Admission</Link></li>
      </ul>
      <Link to="/login" className="login-btn">Login</Link>
    </nav>
  );
}

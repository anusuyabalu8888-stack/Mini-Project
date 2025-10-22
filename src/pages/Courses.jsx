import React from "react";

export default function Courses() {
  const courses = [
    {
      title: "Full Stack Web Development",
      duration: "6 Months",
      level: "Beginner to Advanced",
    },
    {
      title: "Data Analytics & Visualization",
      duration: "4 Months",
      level: "Intermediate",
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      duration: "6 Months",
      level: "Advanced",
    },
    {
      title: "Java Programming & DSA",
      duration: "3 Months",
      level: "Beginner",
    },
    {
      title: "Cloud Computing with AWS & Azure",
      duration: "5 Months",
      level: "Intermediate",
    },
    {
      title: "UI/UX Design Fundamentals",
      duration: "2 Months",
      level: "Beginner",
    },
  ];

  return (
    <div className="courses-page">
      <h2>Our Courses</h2>
      <p>Explore our wide range of professional training programs and certifications.</p>

      <div className="course-list">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.title}</h3>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Level:</strong> {course.level}</p>
            <button className="enroll-btn">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}


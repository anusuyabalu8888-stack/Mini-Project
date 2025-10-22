import React, { useState } from "react";

export default function Admission() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.course && formData.phone) {
      alert(`Admission submitted successfully!\nWelcome, ${formData.name}!`);
      setFormData({ name: "", email: "", course: "", phone: "" });
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  return (
    <div className="admission-page">
      <h2>Admission</h2>
      <p>Apply now and start learning with industry professionals.</p>

      <form className="admission-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Select Course</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        >
          <option value="">-- Choose a Course --</option>
          <option value="Full Stack Web Development">Full Stack Web Development</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="AI & Machine Learning">AI & Machine Learning</option>
          <option value="Java Programming">Java Programming</option>
          <option value="Cloud Computing">Cloud Computing</option>
          <option value="UI/UX Design">UI/UX Design</option>
        </select>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

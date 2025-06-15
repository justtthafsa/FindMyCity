// src/ReportIssue.jsx
import React, { useState } from 'react';

export default function ReportIssue() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    location: '',
    photo: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Issue reported!');
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-lg font-sans">
      <h1 className="text-2xl font-bold text-center mb-6">Report an Issue</h1>
      <form onSubmit={handleSubmit}>
        <label className="block font-semibold mb-1">Issue Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
        />

        <label className="block font-semibold mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
        >
          <option value="">Select Category</option>
          <option value="Pothole">Pothole</option>
          <option value="Streetlight">Broken Streetlight</option>
          <option value="Garbage">Garbage Issue</option>
          <option value="WaterLeak">Water Leakage</option>
          <option value="Other">Other</option>
        </select>

        <label className="block font-semibold mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
        />

        <label className="block font-semibold mb-1">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
        />

        <label className="block font-semibold mb-1">Upload Photo</label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleChange}
          className="w-full mb-6"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
}

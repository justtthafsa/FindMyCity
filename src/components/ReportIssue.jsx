import React, { useState } from 'react';
import './ReportIssue.css';

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    location: '',
    category: '',
    description: '',
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
    console.log('Submitted data:', formData);
    alert('Issue submitted!');
    // Add logic to send formData to backend or API
  };

  return (
    <div className="report-container">
      <h2>Report an Issue</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Pothole">Pothole</option>
            <option value="Garbage">Garbage</option>
            <option value="Streetlight">Broken Streetlight</option>
            <option value="WaterLeak">Water Leakage</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Description:
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <label>
          Upload Photo:
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default ReportIssue;

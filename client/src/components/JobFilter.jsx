// src/components/JobFilter.jsx
import React, { useState } from 'react';
import './JobFilter.css';

function JobFilter() {
  const [salary, setSalary] = useState(30000); // default salary value

  const formatCurrency = (value) => {
    return `₱${parseInt(value).toLocaleString()}`;
  };

  return (
    <div className="job-filter">
      <div className="filter-header">
        <h3>Filter</h3>
        <button className="clear-button">Clear All</button>
      </div>

      <div className="filter-group">
        <label>Date Posted:</label>
        <select>
          <option>Any time</option>
          <option>Past 24 hours</option>
          <option>Past week</option>
          <option>Past month</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Job Type:</label>
        <div><input type="checkbox" /> Full-Time</div>
        <div><input type="checkbox" /> Part-Time</div>
        <div><input type="checkbox" /> Freelance</div>
        <div><input type="checkbox" /> Internship</div>
        <div><input type="checkbox" /> Contract</div>
      </div>

      <div className="filter-group">
        <label>Salary Range:</label>
        <input
          type="range"
          min="0"
          max="100000"
          step="1000"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <div className="salary-value">{formatCurrency(salary)}</div>
      </div>

      <div className="filter-group">
        <label>Location Type:</label>
        <div><input type="checkbox" /> On-site</div>
        <div><input type="checkbox" /> Remote</div>
        <div><input type="checkbox" /> Hybrid</div>
      </div>
    </div>
  );
}

export default JobFilter;

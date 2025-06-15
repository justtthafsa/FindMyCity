import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ReportIssue from './components/ReportIssue';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report" element={<ReportIssue />} />
      </Routes>
    </Router>
  );
}

export default App;

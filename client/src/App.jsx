import React from 'react';
import Navbar from './components/Navbar';
import JobFilter from './components/JobFilter';
import SearchBar from './components/SearchBar';
import './App.css'; 

function App() {
  return (
    
    <div>

      <Navbar />

      <main>
        <h1>Welcome to Project JLA</h1>
        <p1>Looking a job?emememem</p1>
      </main>
      <div className="main-section">
        <JobFilter />
        <SearchBar />
      </div>

    </div>
  );
}

export default App;

import './App.css';
import EmployeeDisplay from './components/EmployeeDisplay';
import Header from './components/Header'
import React, { useState, useEffect } from "react";

function App() {

  return (
    <div className="App">
      <Header />
      <EmployeeDisplay />
    </div>
  );
}

export default App;

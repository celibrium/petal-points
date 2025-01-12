import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import TestApiCall from './components/AIpet';
import PetBuddy from './pages/PetBuddy';
import TaskList from './pages/TaskList';
import Store from './pages/Store';
import './App.css';
import BalanceWidget from './components/BalanceWidget';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <TestApiCall />
        <BalanceWidget />
        <Routes>
          <Route path="/" element={<PetBuddy />} /> 
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

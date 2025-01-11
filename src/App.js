import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import PetBuddy from './pages/PetBuddy';
import TaskList from './pages/TaskList';
import Store from './pages/Store';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
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

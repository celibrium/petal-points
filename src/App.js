import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PetBuddy from './components/PetBuddy';
import TaskList from './components/TaskList';
import Store from './components/Store';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
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

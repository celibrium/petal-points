import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import TestApiCall from './components/AIpet';
import PetBuddy from './pages/PetBuddy';
import TaskList from './pages/TaskList';
import Store from './pages/Store';
import './App.css';

function App() {
  const [isChatVisible, setIsChatVisible] = useState(false);

  return (
    <Router>
      <div className={`App ${isChatVisible ? "chat-open" : ""}`}>
        <NavBar />
        <div className="content-wrapper">
          <TestApiCall isChatVisible={isChatVisible} setIsChatVisible={setIsChatVisible}/>
          <Routes>
            <Route path="/" element={<PetBuddy />} /> 
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

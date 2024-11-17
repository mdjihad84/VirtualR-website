
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/HomePage/Video';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

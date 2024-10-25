import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { UserProvider } from './components/UserContext';
import Home from './components/Home';
import View from './components/View';
import Edit from './components/Edit';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
      <Routes >
            <Route path="/" exact element={<Home/>} />
            <Route path="/view/:id" element={<View/>} />
            <Route path="/edit/:id" element={<Edit/>} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

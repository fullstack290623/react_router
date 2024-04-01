import './App.css';
import React, { Component } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
class App extends Component {
  render() {
    return (
      <div>
        <header className="App">
          <Navbar />
        </header>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contact/:id' element={<Contact />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </div>
    );
  }
}

export default App;
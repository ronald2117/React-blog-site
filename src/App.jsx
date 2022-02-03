import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import { useState } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Create from './Create';
import Contacts from './Contacts';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/create" element={<Create />}/>
            <Route exact path="/contacts" element={<Contacts />}/>
            <Route exact path="/blogs/:id" element={<BlogDetails />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
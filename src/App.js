import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Navbar /> 
        {/* <News pageSize={5} country="in" category = "sports"/> */}
        <Routes>
        <Route path="/" element={<News key="general" pageSize={10} country="in" category = "general"/> } />
        <Route path="/business" element={<News key="business"pageSize={10} country="in" category = "business"/> } />
        <Route path="/entertainment" element={<News key="entertainment" pageSize={10} country="in" category = "entertainment"/> } />
        <Route path="/general" element={<News key="general" pageSize={10} country="in" category = "general"/> } />
        <Route path="/health" element={<News key="health" pageSize={10} country="in" category = "health"/> } />
        <Route path="/science" element={<News key="science" pageSize={10} country="in" category = "science"/> } />
        <Route path="/sports" element={<News key="sports" pageSize={10} country="in" category = "sports"/> } />
        <Route path="/technology" element={<News key="technology" pageSize={10} country="in" category = "technology"/> } />
      </Routes>
      </BrowserRouter> 
      </div>
    )
  }
}




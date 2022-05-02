import './App.css';
import React, { Component } from 'react';
import { NavBar } from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route exact path="/category/general" element={<News key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route exact path="/category/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business"/>}/>
          <Route exact path="/category/health" element={<News key="health" pageSize={this.pageSize} country="in" category="health"/>}/>
          <Route exact path="/category/science" element={<News key="scinece" pageSize={this.pageSize} country="in" category="science"/>}/>
          <Route exact path="/category/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports"/>}/>
          <Route exact path="/category/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>
          <Route exact path="/category/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

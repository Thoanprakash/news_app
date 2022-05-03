import './App.css';
import React, { Component } from 'react';
import { NavBar } from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_NEWSAPP_API;
  state={
    progress:0
  }
  setProgress =(progress)=> {
    this.setState({progress:progress});
  }

  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
          color='#f11946'
          height={3}
          progress={this.state.progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route exact path="/category/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route exact path="/category/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/>}/>
          <Route exact path="/category/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/>}/>
          <Route exact path="/category/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="scinece" pageSize={this.pageSize} country="in" category="science"/>}/>
          <Route exact path="/category/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}/>
          <Route exact path="/category/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>
          <Route exact path="/category/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

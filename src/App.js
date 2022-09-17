import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from './components/News';
import Footer from './components/Footer';

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
            <NavBar />

                
            <Routes>
            
              <Route exact path="/general" element={<News setPropgress={this.setProgress} key="general" pageSize={15} country='in' category='general' />} />
              <Route exact path="/" element={<News setPropgress={this.setProgress} key="general" pageSize={15} country='in' category='general' />} />
              <Route exact path="/business" element={<News setPropgress={this.setProgress} key="business"  pageSize={15} country='in' category='business' />} />
              <Route exact path="/entertainment" element={<News setPropgress={this.setProgress} key="entertainment"  pageSize={15} country='in' category='entertainment' />} />
              <Route exact path="/health" element={<News setPropgress={this.setProgress} key="health"  pageSize={15} country='in' category='health' />} />
              <Route exact path="/science" element={<News setPropgress={this.setProgress}  key="science" pageSize={15} country='in' category='science' />} />
              <Route exact path="/sports" element={<News setPropgress={this.setProgress} key="sports" pageSize={15} country='in' category='sports' />} />
              <Route exact path="/technology" element={<News setPropgress={this.setProgress} key="technology" pageSize={15} country='in' category='technology' />} />
            </Routes>
            <Footer/>
      </Router>

      </div>
    )
  }
}

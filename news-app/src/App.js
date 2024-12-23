import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import News from './components/News';import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Footer from './components/Footer';

export default class App extends Component {
  pageSize=4;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  render() {
    return (
      <div  style={{display: "flex",flexDirection: "column",minHeight: "100vh",}}>
        <Router>
        <Navbar/>
        <LoadingBar
            color="red"
            height={3}
            progress={this.state.progress}
          />
                <Routes>
              {/* <Route exact path="/" element={< News  key='general' pageSize={this.pageSize} country="us" category="general"/>}></Route>
              <Route exact path="/Bususess" element={ <News setProgress={this.setProgress} key='bususess'  pageSize={this.pageSize} country="us" category="bususess"/>}></Route> */}
              <Route path="/" element={<Home />} />
              <Route exact path="/Entertausment" element={<News setProgress={this.setProgress} key='entertausment'  pageSize={this.pageSize} country="us" category="entertainment"/>}></Route>
              <Route exact path="/General" element={ <News setProgress={this.setProgress} key='general'  pageSize={this.pageSize} country="us" category="general"/>}></Route>
              <Route exact path="/Health" element={ <News setProgress={this.setProgress} key='health'  pageSize={this.pageSize} country="us" category="health"/>}></Route>
              <Route exact path="/Science" element={ <News setProgress={this.setProgress} key='science'  pageSize={this.pageSize} country="us" category="science"/>}></Route>
              <Route exact path="/Sports" element={ <News setProgress={this.setProgress} key='sports'  pageSize={this.pageSize} country="us" category="sports"/>}></Route>
              <Route exact path="/Technology" element={ <News setProgress={this.setProgress}  key='technology}>' pageSize={this.pageSize} country="us" category="technology"/>}></Route>
            </Routes>
        </Router>
        <Footer/>
      </div>
    )
  }
}




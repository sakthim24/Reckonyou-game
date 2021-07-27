
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import React, { Component } from "react";
import App from "./App";
import Typewriter from 'typewriter-effect'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Start extends Component {
  state = {
    isActive: true,
    msg: "Lets play something crazy here",
    msg1: "Hope you are smart without calculator,I am going to read your mind now!"
  }
  handleclick = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  render() {
    return (
      <div>
        {this.state.isActive && <div className="pos">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(this.state.msg)
                .pauseFor(1000)
                .deleteAll().changeDeleteSpeed(1)
                .typeString(this.state.msg1).pauseFor(1000)
                .typeString(" tap start")
                .start();
            }} />
        </div>}
        <Router>
          <Link to="/">{this.state.isActive ? <span className="clear" onClick={this.handleclick}>clear</span> :
            <span className="clear" onClick={this.handleclick}>again</span>}
          </Link>
          <br></br>
          <Link to="/App">
            {this.state.isActive && <span onClick={this.handleclick} className='but'>Start</span>}</Link>
          <Switch>
            <Route exact path="/">
            </Route>
            <Route path="/App">
              <App />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}



ReactDOM.render(
  <React.StrictMode>
    <Start />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

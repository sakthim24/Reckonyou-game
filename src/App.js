import './App.css';
import React, { Component } from 'react';
import { Hint, Idea, } from './contents';
import Typewriter from 'typewriter-effect';
class App extends Component {

  state = {
    id: 1,ir:1,
    
  }
  Godnum = () => {
    let godnum = Math.floor(Math.random() * 1000) + 1;
    var a;
    godnum % 2 != 0 ? a = ++godnum : a = godnum;
    this.setState({ id: 1,ir:1});
    return a;
  }
  temp=this.Godnum();
  render() {
    return (
      <div >       
        <Hint ir={this.state.id} />
          <div>
          <Idea ir={this.state.id} numb={this.temp} /><br></br>
          {this.state.id < 6 && <div onClick={() =>  this.setState({ id: this.state.id + 1 })} className="but">Done eh!</div>}        
          {this.state.id == 6 &&  <div >
          <div   className="but but-yes" onClick={() =>  this.setState({ id: 7,ir:2})}>correct</div>
          <div   className="but but-no" onClick={() =>  this.setState({ id: 8,ir:2})} >wrong</div>
          </div>}
          {this.state.id == 6 && <div className="pos" ><Typewriter  onInit={(typewriter)=> {
             typewriter  
            .typeString("My guess is ").pauseFor(1000)
            .typeString(this.temp/2+'')
            .start(); }}/>
         </div>}
          {this.state.ir == 2 && <div  className="but" onClick={() => this.temp=this.Godnum()}>Play Again</div>}        
        </div>
      </div>
    );
  }
}
class Animate extends React.Component {
  render() {
    return (
      <div>
        <img src="https://www.animatedimages.org/data/media/209/animated-cat-image-0301.gif" alt="cat"></img>
      </div>
    )
  }
}

export default App;
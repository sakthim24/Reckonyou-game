import './App.css';
import './hint.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import { Fade } from "react-awesome-reveal";
import Typewriter from 'typewriter-effect'
import React, { Component, } from 'react';


class Hint extends Component {


  hints = [{ id: 1, hint: 'Its not a Rocket Science!' },
  { id: 2, hint: 'Multiply the current Number by two!' },
  { id: 3, hint: 'So tough? just add the given number' },
  { id: 4, hint: 'Divide the number by 2' },
  { id: 5, hint: 'Subtract the number you thought!' }]
  render() {
    return (
      
      
         this.hints.filter(thint => thint.id === this.props.ir).map(thint => (
        console.log(thint),<div className='hint' key={thint.id}>
      <Tippy  className="tool" content={thint.hint}>
      <span className="buthint">hint??</span>
      </Tippy>
      </div>
      
     )))
  }
}
class Idea extends Component {
 
  ideas = [{ id: 1, idea: 'Think a Number' },
  { id: 2, idea: 'I am Giving same number you thought!' },
  { id: 3, idea: 'Now Your Favourite person is giving You ',},
  { id: 4, idea: 'Donate  half the value to government ' },
  { id: 5, idea: 'Now Give back what I gave' },
  { id: 6, idea: ' ',},
  { id: 7, idea: 'Its nice isnt?Thank you for spending your time with me,cheers!!' },
  { id: 8, idea: 'Ahh you wasted my time! improve your brain calculation or try again with calc!' }
  ]
 render() {
    return (
      
      this.ideas.filter(ide => ide.id === this.props.ir).map(ide => (
        <div  key={ide.id}><div className="pos">
         <Fade delay={100}>
         <span> {ide.idea}
        {this.props.ir==3 && <span>{this.props.numb}</span>}</span>
        </Fade>
        {console.log(this.props.numb)}
         </div>
        </div>)))
  }
}

export { Idea, Hint };


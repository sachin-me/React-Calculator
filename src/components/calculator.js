// Imports.
import React from 'react';
import CalculatorTitle from './calculatorTitle.js';
import OutputScreen from './outputScreen.js';
import Button from './button.js';

class Calculator extends React.Component {
  constructor() {
    super();

    // set our default state
    this.state = {
      question: '',
      answer: ''
    }

    // Bind our handleClick method (sets 'this' explicitly
    // to refer to this componenent) We did this because 'this'
    // would refer to the source of the click events
    this.handleClick = this.handleClick.bind(this);
  }

  // our method to handle all click events from our buttons
  handleClick(event){

    // get the value from the target element (button)
    const value = event.target.value;

    switch (value) {
      case '=': {
        // if it's an equal sign, use the eval module
        // to evaluate the question ,convert the answer
        // (in number) to String
    		if (this.state.question !== '')
        {
    			var ans='';
    		  try
    			{
    				ans = eval(this.state.question);
    			}
    			catch(err)
    			{
    				this.setState({answer: "Math Error"});
    			}
    			if (ans === undefined)
    				this.setState({answer: "Math Error"});
    			// update answer in our state.
    			else
    				this.setState({ answer: ans , question: ans});
        }
    		break;
      }
      case 'Clear': {
        // if it's the Clears sign, just clean our
        // question and answer in the state
        this.setState({ question: '', answer: '' });
        break;
      }

	  case 'Delete': {
	    var str = this.state.question;
  		str = str.substr(0,str.length-1);
  		this.setState({question: str});
  		break;
    }
    
    case '√': {
      const ques = this.state.question;
      const root = Math.sqrt(ques);
      this.setState({ answer: root, question: '' })
      break;
    }

    case 'square': {
      const ques = this.state.question;
      const power = Math.pow(ques, 2);
      this.setState({ answer: power, question: '' })
      break;
    }

    case 'log10': {
      const ques = this.state.question;
      const logNum = Math.log10(ques);
      this.setState({ answer: logNum, question: '' })
      break;
    }

    case 'sin': {
      const ques = this.state.question;
      let convertRad = (ques * Math.PI)/180;
      const sin = Math.sin(convertRad);
      this.setState({ answer: sin, question: '' })
      break;
    }

    case 'cos': {
      const ques = this.state.question;
      let convertRad = (ques * Math.PI)/180;
      const cos = Math.cos(convertRad);
      this.setState({ answer: cos, question: '' })
      break;
    }

    case 'tan': {
      const ques = this.state.question;
      let convertRad = (ques * Math.PI)/180;
      const tan = Math.tan(convertRad);
      this.setState({ answer: tan, question: '' })
      break;
    }

    default: {
        // for every other commmand, update the answer in the state
        this.setState({ question: this.state.question += value})
        break;
      }
    }
  }

  render() {
    return (
      <div className="frame">
        <CalculatorTitle title="Calculator"/>
        <div className="mainCalc">
          <OutputScreen answer = {this.state.answer} question = {this.state.question}/>
          <div className="button-row">
            <Button label={'Clear'} handleClick = {this.handleClick}/>
            <Button label={'Delete'} handleClick = {this.handleClick}/>
            <Button label={'.'}  handleClick = {this.handleClick}/>
            <Button label={'/'} handleClick = {this.handleClick}/>
          </div>
          <div className="button-row">
            <Button label={'1'} handleClick = {this.handleClick}/>
            <Button label={'2'} handleClick = {this.handleClick}/>
            <Button label={'3'} handleClick = {this.handleClick}/>
            <Button label={'*'} handleClick = {this.handleClick}/>
          </div>
          <div className="button-row">
            <Button label={'4'} handleClick = {this.handleClick}/>
            <Button label={'5'} handleClick = {this.handleClick}/>
            <Button label={'6'} handleClick = {this.handleClick}/>
            <Button label={'-'} handleClick = {this.handleClick}/>
          </div>
          <div className="button-row">
            <Button label={'7'} handleClick = {this.handleClick}/>
            <Button label={'8'} handleClick = {this.handleClick}/>
            <Button label={'9'} handleClick = {this.handleClick}/>
            <Button label={'+'} handleClick = {this.handleClick}/>
          </div>
          <div className="button-row">
            <Button label={'√'} handleClick = {this.handleClick} />
            <Button label={'0'} handleClick = {this.handleClick} />
            <Button label={'square'} handleClick = {this.handleClick} />
            <Button label={'='} handleClick = {this.handleClick}/>
          </div>
          <div className="button-row">
            <Button label={`log10`} handleClick = {this.handleClick} />
            <Button label={'sin'} handleClick = {this.handleClick} />
            <Button label={'cos'} handleClick = {this.handleClick} />
            <Button label={'tan'} handleClick = {this.handleClick}/>
          </div>
          
        </div>
    </div>
    );
  }
}

// Export Calculator Component.
export default Calculator;

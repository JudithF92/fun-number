import React, {Component} from 'react';
import UserInput from './components/UserInput/UserInput';
import Output from './components/Output/Output';
import Explanation from './components/Explanation/Explanation';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
        input: '',
        fact: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onClickButton = (event) => {
    const url = 'http://numbersapi.com/' + this.state.input.trim() + '?json';  
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({fact: data.text})) 
      .catch(() => this.setState({fact: 'Please enter a valid form.'}))
  }

  render (){
    return(
    <div className="App">
      <div className="container">     
        <Explanation />
          <UserInput 
            onInputChange={this.onInputChange} 
            onClickButton={this.onClickButton}
          />
      </div>
      <p />
      <Output fact={this.state.fact}/>
    </div>
    );
  }
}

export default App;
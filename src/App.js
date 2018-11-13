import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: "Abdelmonaem", age: 29},
      {name: "Ahmed", age: 26},
      {name: "Asmaa", age: 27},
    ]
  }
  switchNamesHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 29},
        {name: "Ahmed Shahat", age: 26},
        {name: "Asmaa Shahat", age: 27},
      ]
    });
  }
  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {name: "Abdelmonaem shahat", age: 29},
        {name: event.target.value, age: 26},
        {name: "Asmaa Shahat", age: 27},
      ]
    });
  }
  render() {
    const style = {
      backgroundColor: 'transparent',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      border: '1px solid royalblue',
      padding: '10px 20px',
      color: 'orange',
      borderRadius: '3px',
      margin: '10px 0',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hello react!!</h1>
        <p>React Is Awesome !!!</p>
        <button 
              onClick = {() => this.switchNamesHandler("Abdelmonaem")}
              style = {style}
              >Switch Names</button>
        <Person 
                name = {this.state.persons[0].name} 
                age = {this.state.persons[0].age} 
                changed = {this.changeNameHandler}
                />
        <Person 
              name = {this.state.persons[1].name} 
              age = {this.state.persons[1].age}
              tick = {this.switchNamesHandler.bind(this, 'Abdo')}
              changed = {this.changeNameHandler}
              >
               He is very Clever!!
               </Person>
        <Person 
                name = {this.state.persons[2].name} 
                age = {this.state.persons[2].age} 
                changed = {this.changeNameHandler}
                />
      </div>
    );
  }
}

export default App;

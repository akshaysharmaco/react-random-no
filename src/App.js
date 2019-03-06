import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Random Number</h1>
        </header>
        <Body/>
      </div>
    );
  }
}


class Body extends Component {
  constructor(props){
    super(props);

    this.state = {
      r: 0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber(){
   // console.log("random number called");
    this.setState({r: Math.floor(Math.random()*10) })
  }



  render() {
    return (
      <div>
        <p className="App-intro">
          Click the button to generate the Random Number
        </p>

        <button onClick={this.getRandomNumber}> Random Number</button>
        <Numbers myNumber={this.state.r}/>
      </div>
    );
  }
}

class Numbers extends Component {
  componentWillMount(){
    console.log("ComponentWillMount Called here");
  }
  componentDidMount(){
    console.log("ComponentDidMount Called here");
  }

  componentWillReceiveProps(newProps){
    console.log("ComponentWillReceiveProps called");
  }


  render() {
    return (
      <div>
        <br />
        {this.props.myNumber}

      </div>
    );
  }
}

export default App;

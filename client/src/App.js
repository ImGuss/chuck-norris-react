import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    joke: undefined
  }

  componentDidMount() {
    fetch('/chuck')
    .then( res => res.json() )
    .then( (joke) => {
      const theJoke = JSON.parse(joke);
      this.setState({joke: theJoke}, () => {
        console.log(this.state);
      });
    });
  }

  render() {
    if (this.state && this.state.joke && !this.state.joke.category) {
      return (
        <div className="App">
          <h1>Chuck Norris</h1>
          <img src={this.state.joke.icon_url} alt={this.state.joke.value} />
          <p>{this.state.joke.value}</p>
        </div>
      );
    }
    else if (this.state && this.state.joke && this.state.joke.category) {
      return (
        <div className="App">
          <h1>{this.state.joke.category}</h1>
          <img src={this.state.joke.icon_url} alt={this.state.joke.value} />
          <p>{this.state.joke.value}</p>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <h1>Loading</h1>
        </div>
      );
    }
  }

}

export default App;

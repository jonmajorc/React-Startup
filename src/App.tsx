import { hot } from 'react-hot-loader'
import React, { Component } from 'react';
import Hello from './components/Hello'
import grumps from './statics/grumps.jpeg'

export interface HelloProps { 
  compiler: string; 
  boilerplate: string; 
}

export class App extends Component<HelloProps, {}> {

  state = {
    text: 'Hello,'
  }

  handleInput = (e:any) => {
    let text = e.target.value
    this.setState({
      text,
    })
  }
  
  render() {
    return (
      <main>
        <h1>Hello from {this.props.boilerplate} using {this.props.compiler}!</h1>
        <input onChange={this.handleInput} type="text" value={this.state.text}/>
        <Hello greeting={this.state.text}/>
        <br />
        <img src={grumps} alt=""/> {/* Specifiy an alt tag! */}
        <p>If you don't specify an alt tag, you will get an ugly red box.</p>
      </main>
    )
  }
};

export default hot(module)(App);
